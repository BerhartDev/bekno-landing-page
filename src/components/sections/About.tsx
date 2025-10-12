'use client';

import { useTranslations } from 'next-intl';
import AboutIllustration from '@/components/AboutIllustration';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';

export default function About() {
  const t = useTranslations('about');

  const features = t.raw('features') as string[];

  return (
    <section id="about" className="bg-bekno-white text-bekno-black pt-24 pb-16 px-4">
      <Container>
        <div className="text-center mb-12">
          <Heading level={2} className="text-bekno-black mb-4">{t('title')}</Heading>
          <p className="text-bekno-gray text-lg max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
          {/* Conteúdo */}
          <div className="space-y-6">
            <div className="space-y-6">
                <p className="text-bekno-gray text-base leading-relaxed">
                  {t('description1')}
                </p>
                <p className="text-bekno-gray text-base leading-relaxed">
                  {t('description2')}
                </p>
            </div>
            
            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="w-8 h-8 bg-bekno-black/10 rounded-lg flex items-center justify-center group-hover:bg-bekno-black/20 transition-colors duration-300">
                    <svg className="w-4 h-4 text-bekno-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-bekno-black text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Ilustração */}
          <div className="relative">
            <div className="bg-bekno-black/5 rounded-2xl p-6">
              <AboutIllustration />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
