'use client';

import Image from 'next/image';

export default function AboutIllustration() {
  return (
    <div className="relative w-full h-full">
      <img
        src="/about-illustration.svg"
        alt="BEKNO About Illustration"
        className="w-full h-auto"
      />
    </div>
  );
} 