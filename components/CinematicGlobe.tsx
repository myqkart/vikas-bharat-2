"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { feature } from "topojson-client";
import type { Topology, GeometryCollection } from "topojson-specification";
import type { FeatureCollection, Geometry } from "geojson";
import countriesTopo from "world-atlas/countries-110m.json";
import landTopo from "world-atlas/land-110m.json";
import earcut from "earcut";

/** India center */
const INDIA_LAT = 20.5937;
const INDIA_LON = 78.9629;
const RADIUS = 1;

/** Palette matched to reference globe image */
const COLOR_OCEAN = 0xf4f4f4;
const COLOR_LAND = 0xc8c8c8;
const COLOR_BORDER = 0x5c5c5c;
const COLOR_MARKER = 0xf5e63a;
const COLOR_ATMOSPHERE = 0xffffff;

export type GlobeCinemaPhase = "orbit" | "locate" | "zoom" | "done";

type CinematicGlobeProps = {
  play: boolean;
  onPhaseChange?: (phase: GlobeCinemaPhase) => void;
  onComplete?: () => void;
  className?: string;
};

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

/**
 * Camera distance so a sphere of `radius` fully fits in both width & height
 * (critical on portrait mobile where horizontal FOV is much narrower).
 */
function fitCameraDistance(
  fovDeg: number,
  aspect: number,
  radius: number,
  padding = 1.28,
) {
  const vFov = THREE.MathUtils.degToRad(fovDeg);
  const hFov = 2 * Math.atan(Math.tan(vFov / 2) * Math.max(aspect, 0.01));
  const distV = radius / Math.tan(vFov / 2);
  const distH = radius / Math.tan(hFov / 2);
  return Math.max(distV, distH) * padding;
}

/**
 * Standard geographic → Three.js (Y-up, north = +Y).
 * GeoJSON coords are [longitude, latitude] in degrees.
 */
function geoToVec3(lonDeg: number, latDeg: number, r = RADIUS) {
  const lon = THREE.MathUtils.degToRad(lonDeg);
  const lat = THREE.MathUtils.degToRad(latDeg);
  const cosLat = Math.cos(lat);
  return new THREE.Vector3(
    r * cosLat * Math.cos(lon),
    r * Math.sin(lat),
    -r * cosLat * Math.sin(lon),
  );
}

/** Local geographic-north tangent at lon/lat (unit). */
function geoNorth(lonDeg: number, latDeg: number) {
  const lon = THREE.MathUtils.degToRad(lonDeg);
  const lat = THREE.MathUtils.degToRad(latDeg);
  return new THREE.Vector3(
    -Math.sin(lat) * Math.cos(lon),
    Math.cos(lat),
    Math.sin(lat) * Math.sin(lon),
  ).normalize();
}

/**
 * Face lon/lat toward the camera (+Z) AND keep geographic north screen-up (+Y).
 * Plain setFromUnitVectors alone leaves an arbitrary roll → tilted maps.
 */
function quatFacingCamera(lonDeg: number, latDeg: number) {
  const radial = geoToVec3(lonDeg, latDeg, 1).normalize();
  const north = geoNorth(lonDeg, latDeg);

  // Project north onto the tangent plane at this point
  const northProj = north
    .clone()
    .addScaledVector(radial, -north.dot(radial))
    .normalize();

  // Local east so (east, north, radial) is right-handed
  const east = new THREE.Vector3()
    .crossVectors(northProj, radial)
    .normalize();
  // Re-orthogonalize north against east × radial drift
  northProj.crossVectors(radial, east).normalize();

  // Basis columns = local axes in world-before-rotation.
  // Inverse maps that frame → identity (east→X, north→Y, radial→Z).
  const basis = new THREE.Matrix4().makeBasis(east, northProj, radial);
  const inv = basis.clone().invert();
  return new THREE.Quaternion().setFromRotationMatrix(inv);
}

function buildCountryLines(): THREE.LineSegments {
  const topo = countriesTopo as unknown as Topology<{
    countries: GeometryCollection;
  }>;
  const fc = feature(
    topo,
    topo.objects.countries,
  ) as FeatureCollection<Geometry>;

  const positions: number[] = [];

  const pushRing = (ring: number[][]) => {
    for (let i = 0; i < ring.length - 1; i++) {
      // GeoJSON: [lon, lat]
      const [lon1, lat1] = ring[i];
      const [lon2, lat2] = ring[i + 1];
      const a = geoToVec3(lon1, lat1, RADIUS * 1.0015);
      const b = geoToVec3(lon2, lat2, RADIUS * 1.0015);
      positions.push(a.x, a.y, a.z, b.x, b.y, b.z);
    }
  };

  for (const f of fc.features) {
    const g = f.geometry;
    if (!g) continue;
    if (g.type === "Polygon") {
      for (const ring of g.coordinates) pushRing(ring);
    } else if (g.type === "MultiPolygon") {
      for (const poly of g.coordinates) {
        for (const ring of poly) pushRing(ring);
      }
    }
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positions, 3),
  );
  const mat = new THREE.LineBasicMaterial({
    color: COLOR_BORDER,
    transparent: true,
    opacity: 0.85,
  });
  return new THREE.LineSegments(geo, mat);
}

/** Filled landmasses (medium gray) — matches reference continent fill. */
function buildLandMesh(): THREE.Mesh {
  const topo = landTopo as unknown as Topology<{ land: GeometryCollection }>;
  const fc = feature(topo, topo.objects.land) as FeatureCollection<Geometry>;

  const positions: number[] = [];
  const indices: number[] = [];

  const addPolygon = (rings: number[][][]) => {
    if (!rings.length) return;
    const outer = rings[0];
    const flat: number[] = [];
    const holeIndices: number[] = [];

    for (let r = 0; r < rings.length; r++) {
      if (r > 0) holeIndices.push(flat.length / 2);
      const ring = rings[r];
      // Skip duplicate closing vertex for earcut
      const n = ring.length > 1 ? ring.length - 1 : ring.length;
      for (let i = 0; i < n; i++) {
        const [lon, lat] = ring[i];
        flat.push(lon, lat);
      }
    }

    const tris = earcut(flat, holeIndices.length ? holeIndices : undefined, 2);
    const base = positions.length / 3;

    for (let i = 0; i < flat.length; i += 2) {
      const v = geoToVec3(flat[i], flat[i + 1], RADIUS * 1.0008);
      positions.push(v.x, v.y, v.z);
    }
    for (let i = 0; i < tris.length; i++) {
      indices.push(base + tris[i]);
    }
  };

  for (const f of fc.features) {
    const g = f.geometry;
    if (!g) continue;
    if (g.type === "Polygon") addPolygon(g.coordinates);
    else if (g.type === "MultiPolygon") {
      for (const poly of g.coordinates) addPolygon(poly);
    }
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positions, 3),
  );
  geo.setIndex(indices);
  geo.computeVertexNormals();

  const mat = new THREE.MeshLambertMaterial({
    color: COLOR_LAND,
  });
  return new THREE.Mesh(geo, mat);
}

/**
 * Full-viewport globe with correctly oriented country outlines.
 * Colors stay paper/gray (not photoreal Earth).
 */
export default function CinematicGlobe({
  play,
  onPhaseChange,
  onComplete,
  className,
}: CinematicGlobeProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const onPhaseChangeRef = useRef(onPhaseChange);
  const onCompleteRef = useRef(onComplete);
  onPhaseChangeRef.current = onPhaseChange;
  onCompleteRef.current = onComplete;

  useEffect(() => {
    if (!play) return;
    const mount = mountRef.current;
    if (!mount) return;

    let cancelled = false;
    let animId = 0;
    let cinemaId = 0;

    const width = mount.clientWidth || window.innerWidth;
    const height = mount.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const FOV = 34;
    const camera = new THREE.PerspectiveCamera(FOV, width / height, 0.1, 100);

    // Include atmosphere in fit radius so rim isn't clipped
    const fitRadius = RADIUS * 1.04;
    const camDist = {
      far: fitCameraDistance(FOV, width / height, fitRadius, 1.32),
      hold: 0,
      zoom: 0,
    };
    camDist.hold = camDist.far * 0.9;
    camDist.zoom = Math.max(1.2, camDist.far * 0.38);
    camera.position.set(0, 0, camDist.far);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.display = "block";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    mount.appendChild(renderer.domElement);
    mount.style.opacity = "1";

    const root = new THREE.Group();
    scene.add(root);

    // Ocean — matte light gray / white (no shiny plastic look)
    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(RADIUS, 64, 64),
      new THREE.MeshLambertMaterial({
        color: 0xf4f4f4,
        emissive: 0xffffff,
        emissiveIntensity: 0.04,
      }),
    );
    root.add(sphere);

    // Soft white rim — subtle, not glowing
    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(RADIUS * 1.028, 64, 64),
      new THREE.MeshBasicMaterial({
        color: COLOR_ATMOSPHERE,
        transparent: true,
        opacity: 0.1,
        side: THREE.BackSide,
      }),
    );
    root.add(atmosphere);

    const land = buildLandMesh();
    root.add(land);

    const borders = buildCountryLines();
    root.add(borders);

    const marker = new THREE.Mesh(
      new THREE.SphereGeometry(0.03, 24, 24),
      new THREE.MeshBasicMaterial({ color: COLOR_MARKER }),
    );
    marker.position.copy(geoToVec3(INDIA_LON, INDIA_LAT, RADIUS * 1.02));
    marker.scale.setScalar(0.6);
    root.add(marker);

    const markerGlow = new THREE.Mesh(
      new THREE.SphereGeometry(0.055, 24, 24),
      new THREE.MeshBasicMaterial({
        color: COLOR_MARKER,
        transparent: true,
        opacity: 0.28,
      }),
    );
    markerGlow.position.copy(marker.position);
    markerGlow.scale.setScalar(0.6);
    root.add(markerGlow);

    // Soft, even lighting — avoids hot specular shine
    const key = new THREE.DirectionalLight(0xffffff, 0.45);
    key.position.set(2.2, 1.8, 3.5);
    scene.add(key);
    scene.add(new THREE.AmbientLight(0xffffff, 0.95));
    const fill = new THREE.DirectionalLight(0xffffff, 0.25);
    fill.position.set(-2, -0.5, 2);
    scene.add(fill);

    // India dead-center; start ~half-turn west so continents read correctly while orbiting
    const qIndia = quatFacingCamera(INDIA_LON, INDIA_LAT);
    const qStart = quatFacingCamera(INDIA_LON - 150, INDIA_LAT + 8);
    const qTmp = new THREE.Quaternion();
    root.quaternion.copy(qStart);

    const onResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      if (w < 1 || h < 1) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      // Re-fit so portrait / landscape never clips left-right or top-bottom
      camDist.far = fitCameraDistance(FOV, w / h, fitRadius, 1.32);
      camDist.hold = camDist.far * 0.9;
      camDist.zoom = Math.max(1.2, camDist.far * 0.38);
      // Keep framing during pre-zoom phases
      if (camera.position.z >= camDist.hold * 0.95) {
        camera.position.z = camDist.far;
      }
    };
    window.addEventListener("resize", onResize);
    // Run once more after layout settles (mobile browser chrome)
    window.setTimeout(onResize, 50);

    const renderLoop = () => {
      if (cancelled) return;
      renderer.render(scene, camera);
      animId = requestAnimationFrame(renderLoop);
    };
    animId = requestAnimationFrame(renderLoop);

    const ORBIT_END = 4000;
    const HOLD_END = 5000;
    const ZOOM_END = 6400;
    const DONE_AT = 6800;
    const t0 = performance.now();
    let lastPhase: GlobeCinemaPhase | null = null;

    const setPhase = (p: GlobeCinemaPhase) => {
      if (p === lastPhase) return;
      lastPhase = p;
      onPhaseChangeRef.current?.(p);
    };

    const tick = (now: number) => {
      if (cancelled) return;
      const elapsed = now - t0;

      if (elapsed < ORBIT_END) {
        setPhase("orbit");
        const t = easeOutCubic(elapsed / ORBIT_END);
        qTmp.copy(qStart).slerp(qIndia, t);
        root.quaternion.copy(qTmp);
        marker.scale.setScalar(lerp(0.6, 1, t));
        markerGlow.scale.setScalar(lerp(0.6, 1.15, t));
        camera.position.z = camDist.far;
        mount.style.opacity = "1";
      } else if (elapsed < HOLD_END) {
        setPhase("locate");
        const t = easeInOutCubic((elapsed - ORBIT_END) / (HOLD_END - ORBIT_END));
        root.quaternion.copy(qIndia);
        marker.scale.setScalar(lerp(1, 1.35, t));
        markerGlow.scale.setScalar(lerp(1.15, 1.7, t));
        (markerGlow.material as THREE.MeshBasicMaterial).opacity = lerp(
          0.35,
          0.55,
          t,
        );
        camera.position.z = lerp(camDist.far, camDist.hold, t);
        mount.style.opacity = "1";
      } else if (elapsed < ZOOM_END) {
        setPhase("zoom");
        const t = easeInOutCubic((elapsed - HOLD_END) / (ZOOM_END - HOLD_END));
        root.quaternion.copy(qIndia);
        camera.position.z = lerp(camDist.hold, camDist.zoom, t);
        mount.style.opacity = String(
          lerp(1, 0.05, Math.max(0, (t - 0.45) / 0.55)),
        );
      } else if (elapsed < DONE_AT) {
        setPhase("zoom");
        root.quaternion.copy(qIndia);
        camera.position.z = camDist.zoom;
        mount.style.opacity = "0.04";
      } else {
        setPhase("done");
        onCompleteRef.current?.();
        return;
      }

      cinemaId = requestAnimationFrame(tick);
    };

    cinemaId = requestAnimationFrame(tick);

    return () => {
      cancelled = true;
      cancelAnimationFrame(animId);
      cancelAnimationFrame(cinemaId);
      window.removeEventListener("resize", onResize);
      borders.geometry.dispose();
      (borders.material as THREE.Material).dispose();
      land.geometry.dispose();
      (land.material as THREE.Material).dispose();
      sphere.geometry.dispose();
      (sphere.material as THREE.Material).dispose();
      atmosphere.geometry.dispose();
      (atmosphere.material as THREE.Material).dispose();
      marker.geometry.dispose();
      (marker.material as THREE.Material).dispose();
      markerGlow.geometry.dispose();
      (markerGlow.material as THREE.Material).dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [play]);

  return (
    <div
      ref={mountRef}
      className={`absolute inset-0 h-full w-full ${className ?? ""}`}
      style={{ opacity: 1, willChange: "opacity" }}
      aria-hidden
    />
  );
}
