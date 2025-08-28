"use client";

import Image from "next/image";

export default function PlayButton() {
  return (
    <button
      type="button"
      aria-label="Play Video"
      className="absolute z-[15] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <Image
        src="/images/play-button.png"
        alt=""
        width={80}
        height={80}
        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 opacity-80 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
        priority={false}
      />
    </button>
  );
}


