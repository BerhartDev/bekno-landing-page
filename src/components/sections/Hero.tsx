'use client';

import { useTranslations } from 'next-intl';
import Button from '@/components/ui/Button';
import { fontClasses } from '@/lib/fonts';
import { Link } from '@/lib/i18n/routing';

export default function Hero() {
  const t = useTranslations('hero');

  const features = t.raw('features') as string[];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-bekno-black text-bekno-white min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-bekno-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-bekno-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-bekno-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">

        {/* Headline */}
        <h1 className={`text-3xl md:text-5xl lg:text-6xl ${fontClasses.title} mb-8 leading-tight`}>
          {t('headline')}
        </h1>

        {/* Subheadline */}
        <p className="text-base md:text-lg lg:text-xl text-bekno-gray max-w-4xl mx-auto mb-12 leading-relaxed">
          {t('subheadline')}
        </p>


        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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

        {/* Scroll Indicator */}
        <div className="flex justify-center">
          <button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center justify-center gap-2 text-bekno-white/60 hover:text-bekno-white transition-colors duration-300 animate-bounce"
          >
            <span className="text-xs font-medium">Descobrir mais</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
