'use client';

import { useTranslations } from 'next-intl';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';

export default function Features() {
  const t = useTranslations('features');

  const features = t.raw('items') as Array<{
    title: string;
    description: string;
  }>;

  const icons = [
    // Web Development Icon
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>,
    // CMS and Automation Icon
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>,
    // Performance and Marketing Icon
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ];

  return (
    <section id="services" className="bg-bekno-black text-bekno-white py-20 px-4">
      <Container>
        <div className="text-center mb-16">
          <Heading level={2} className="text-bekno-white mb-4">{t('title')}</Heading>
          <p className="text-bekno-gray text-base max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="relative bg-bekno-black border-2 border-bekno-white/20 rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:border-bekno-white/40 hover:shadow-2xl hover:shadow-bekno-white/10 group"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-bekno-white/10 rounded-2xl mb-6 mx-auto flex items-center justify-center group-hover:bg-bekno-white/20 transition-colors duration-300">
                  <div className="text-bekno-white">
                    {icons[index]}
                  </div>
                </div>
                <h3 className="text-xl font-bold font-heading text-bekno-white mb-4">{feature.title}</h3>
                <p className="text-bekno-gray text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-bekno-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
