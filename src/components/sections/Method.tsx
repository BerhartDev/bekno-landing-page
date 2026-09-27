'use client';

import { useTranslations } from 'next-intl';
import Section from '@/components/ui/Section';

export default function Method() {
  const t = useTranslations('method');
  const steps = t.raw('steps') as string[];

  return (
    <Section id="method" title={t('title')} intro={t('subtitle')}>
      <ol className="grid border border-line sm:grid-cols-4">
        {steps.map((step) => (
          <li
            key={step}
            className="border-line px-6 py-8 font-semibold tracking-[-0.02em] max-sm:border-t max-sm:first:border-t-0 sm:border-l sm:first:border-l-0"
          >
            {step}
          </li>
        ))}
      </ol>
    </Section>
  );
}
