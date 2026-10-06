'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/lib/i18n/routing';

export default function FinalCta() {
  const t = useTranslations('finalCta');

  return (
    <section className="border-t border-line py-16 md:py-24">
      <div className="grid gap-8 border border-fg p-8 md:grid-cols-[1fr_auto] md:items-end md:p-12">
        <div className="grid gap-4">
          <h2 className="max-w-[18ch] text-[clamp(2rem,1.4rem+2.6vw,3.25rem)] font-bold leading-[1.05] tracking-[-0.03em]">
            {t('title')}
          </h2>
          <p className="max-w-[48ch] text-lg leading-relaxed text-muted">{t('text')}</p>
        </div>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <Link href="/orcamento" className="cta w-fit">
            {t('cta')}
            <span className="arrow" aria-hidden="true">→</span>
          </Link>
          <Link href="/projetos" className="link font-mono text-sm uppercase tracking-[0.04em]">
            {t('secondary')}
          </Link>
        </div>
      </div>
    </section>
  );
}
