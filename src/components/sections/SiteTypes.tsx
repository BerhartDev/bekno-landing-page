'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/lib/i18n/routing';
import Section from '@/components/ui/Section';
import type { SiteType } from '@/lib/contact';
import { hasValue, SITE } from '@/lib/site';

type SiteTypeItem = {
  type: SiteType;
  title: string;
  description: string;
};

/** Preço "a partir de" do tipo; 0 (não exibe) quando não há preço cadastrado em SITE.prices. */
const priceOf = (type: SiteType): number =>
  type in SITE.prices ? SITE.prices[type as keyof typeof SITE.prices] : 0;

export default function SiteTypes() {
  const t = useTranslations('siteTypes');
  const items = t.raw('items') as SiteTypeItem[];
  const locale = useLocale();
  const brl = new Intl.NumberFormat(locale, { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });

  return (
    <Section id="site-types" title={t('title')} intro={t('subtitle')}>
      <ul className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <li key={item.type} className="flex flex-col gap-4 bg-bg p-6 md:p-8">
            <h3 className="text-xl font-semibold tracking-[-0.02em]">{item.title}</h3>
            <p className="text-sm text-muted">{item.description}</p>
            {hasValue(priceOf(item.type)) && (
              <p className="font-mono text-sm">{t('priceFrom', { price: brl.format(priceOf(item.type)) })}</p>
            )}
            <Link
              href={{ pathname: '/orcamento', query: { tipo: item.type } }}
              className="link mt-auto w-fit pt-2 font-mono text-sm uppercase tracking-[0.04em]"
            >
              {t('cta')} <span aria-hidden="true">→</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-10">
        <Link href="/projetos" className="cta">
          {t('projectsCta')}
          <span className="arrow" aria-hidden="true">→</span>
        </Link>
      </div>
    </Section>
  );
}
