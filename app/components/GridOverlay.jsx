"use client";

export default function GridOverlay() {
  return (
    <div className="absolute inset-0 z-[12] pointer-events-none h-[70%]">
      <div className="w-full h-full [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:80px_80px]"></div>
    </div>
  );
}


