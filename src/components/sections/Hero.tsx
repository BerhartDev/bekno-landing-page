'use client';

import { useTranslations } from 'next-intl';
import Button from '@/components/ui/Button';
import { fontClasses } from '@/lib/fonts';
import { Link } from '@/lib/i18n/routing';

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
        <h1 className={`text-5xl md:text-7xl ${fontClasses.title} mb-6`}>{t('headline')}</h1>
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
          <Link href="/portfolio">
            <Button variant="secondary">
              {t('ctaSecondary')}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
