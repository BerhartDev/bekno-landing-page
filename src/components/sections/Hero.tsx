'use client';

import { useTranslations } from 'next-intl';
import Button from '@/components/ui/Button';

export default function Hero() {
  const t = useTranslations('hero');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-bekno-black text-bekno-white min-h-screen flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">{t('headline')}</h1>
        <p className="text-xl md:text-2xl text-bekno-gray-light mb-8">
          {t('subheadline')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="primary"
            onClick={() => scrollToSection('contact')}
          >
            {t('ctaPrimary')}
          </Button>
          <Button 
            variant="secondary"
            onClick={() => scrollToSection('plans')}
          >
            {t('ctaSecondary')}
          </Button>
        </div>
      </div>
    </section>
  );
}
