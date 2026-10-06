'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/lib/i18n/routing';
import Section from '@/components/ui/Section';
import type { SiteType } from '@/lib/contact';

type SiteTypeItem = {
  type: SiteType;
  title: string;
  description: string;
};

export default function SiteTypes() {
  const t = useTranslations('siteTypes');
  const items = t.raw('items') as SiteTypeItem[];

  return (
    <Section id="site-types" title={t('title')} intro={t('subtitle')}>
      <ul className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <li key={item.type} className="bg-bg">
            <Link
              href={{ pathname: '/orcamento', query: { tipo: item.type } }}
              className="group flex h-full flex-col gap-4 p-6 transition-colors duration-150 hover:bg-fg hover:text-bg md:p-8"
            >
              <h3 className="text-xl font-semibold tracking-[-0.02em]">{item.title}</h3>
              <p className="text-sm text-muted transition-colors duration-150 group-hover:text-bg">
                {item.description}
              </p>
              <span className="mt-auto inline-flex items-center gap-2 pt-2 font-mono text-sm uppercase tracking-[0.04em]">
                {t('cta')}
                <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
