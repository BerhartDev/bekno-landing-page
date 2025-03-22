'use client';

import Image from 'next/image';
import aboutIllustration from '@/assets/about-illustration.svg';

export default function AboutIllustration() {
  return (
    <div className="relative w-full h-full">
      <img
        src={aboutIllustration}
        alt="BEKNO About Illustration"
        className="w-full h-auto"
      />
    </div>
  );
} 