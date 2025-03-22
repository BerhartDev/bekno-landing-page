'use client';

import Image from 'next/image';

export default function AboutIllustration() {
  return (
    <div className="relative w-full h-full">
      <Image
        src="/about-illustration.svg"
        alt="BEKNO About Illustration"
        width={500}
        height={500}
        className="w-full h-auto"
        priority
      />
    </div>
  );
} 