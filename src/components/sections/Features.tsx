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

  return (
    <section className="bg-bekno-bg-light py-20 px-4">
      <Container>
        <Heading level={2} className="text-center text-bekno-black">{t('title')}</Heading>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-bekno-black rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {index === 0 && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  )}
                  {index === 1 && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  )}
                  {index === 2 && (
                    <>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                    </>
                  )}
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-bekno-black">{feature.title}</h3>
              <p className="text-bekno-gray">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
