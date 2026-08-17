import type { MetadataRoute } from "next";
import { DEFAULT_DESCRIPTION, SITE_NAME, SITE_TAGLINE } from "@/lib/seo";
import { site } from "@/lib/content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} — ${SITE_TAGLINE}`,
    short_name: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#fbf6ec",
    theme_color: "#12294d",
    lang: "en-IN",
    icons: [
      {
        src: site.logoMark,
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: site.logo,
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
