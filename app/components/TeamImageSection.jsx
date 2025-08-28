"use client";

import Image from "next/image";

export default function TeamImageSection() {
  return (
    <div className="relative z-20 flex justify-center mt-8 sm:mt-16 md:mt-20 lg:mt-24 px-4 sm:px-6 lg:px-8 min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] -translate-y-8 sm:translate-y-0 sm:pb-8 md:pb-12 lg:pb-16">
      <Image
        src="/images/groupimage.png"
        alt="NexStar Team"
        width={1200}
        height={400}
        priority
        className="w-full max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw] xl:max-w-[50vw] object-contain"
      />
    </div>
  );
}


