"use client";

import Image from "next/image";

export default function DecorativeEllipses() {
  return (
    <div className="sticky top-0 z-0 pointer-events-none">
      <div className="absolute -top-[75px] left-[60px] -rotate-[59.68deg]">
        <Image
          src="/images/Ellipse 60.png"
          alt=""
          width={119}
          height={772}
          className="w-[140px] h-[386px] sm:w-[280px] sm:h-[772px] opacity-100"
          priority={false}
        />
      </div>
      <div className="absolute -top-[55px] left-20 -rotate-[59.68deg]">
        <Image
          src="/images/Ellipse 61.png"
          alt=""
          width={80}
          height={772}
          className="w-[90px] h-[386px] sm:w-[180px] sm:h-[772px] opacity-100"
          priority={false}
        />
      </div>
    </div>
  );
}


