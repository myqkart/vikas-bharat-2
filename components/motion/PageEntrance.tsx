"use client";

export default function PageEntrance({
  children,
}: {
  children: React.ReactNode;
}) {
  // No entrance fade — SplashGate owns the first-paint reveal and a fade here
  // caused splash ↔ content flicker on load.
  return (
    <div className="flex min-h-full flex-1 flex-col">{children}</div>
  );
}
