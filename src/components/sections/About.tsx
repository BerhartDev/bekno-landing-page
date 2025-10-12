'use client';

import { useTranslations } from 'next-intl';
import AboutIllustration from '@/components/AboutIllustration';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';

export default function About() {
  const t = useTranslations('about');

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Heading level={2} className="text-bekno-black">{t('title')}</Heading>
            <p className="text-lg text-gray-600 mb-6">
              {t('description1')}
            </p>
            <p className="text-lg text-gray-600">
              {t('description2')}
            </p>
          </div>
          <div className="relative">
            <AboutIllustration />
          </div>
        </div>
      </Container>
    </section>
  );
}
