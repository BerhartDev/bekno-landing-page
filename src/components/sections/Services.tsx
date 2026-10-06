'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/lib/i18n/routing';
import Section from '@/components/ui/Section';

type ServiceItem = {
  title: string;
  description: string;
};

export default function Services() {
  const t = useTranslations('services');
  const items = t.raw('items') as ServiceItem[];

  return (
    <Section id="services" title={t('title')} intro={t('subtitle')}>
      <ul className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => (
          <li key={item.title} className="flex flex-col gap-4 bg-bg p-6 md:p-8">
            <span className="font-mono text-sm text-muted">{String(index + 1).padStart(2, '0')}</span>
            <h3 className="text-xl font-semibold tracking-[-0.02em]">{item.title}</h3>
            <p className="text-sm text-muted">{item.description}</p>
            <Link href="/orcamento" className="link mt-auto w-fit pt-2 font-mono text-sm uppercase tracking-[0.04em]">
              {t('cta')}
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
