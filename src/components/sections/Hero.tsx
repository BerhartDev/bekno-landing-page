'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/lib/i18n/routing';
import { serviceImages } from '@/lib/service-images';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="grid items-center gap-12 py-16 md:grid-cols-2 md:gap-20 md:py-28">
      <div className="grid gap-6">
        <p className="max-w-[36ch] font-mono text-sm text-muted">{t('kicker')}</p>
        <h1 className="max-w-[14ch] text-[clamp(2.5rem,1.6rem+4.2vw,4.5rem)] font-bold leading-[1.02] tracking-[-0.035em]">
          {t('headline')}
        </h1>
        <p className="max-w-[44ch] text-lg leading-relaxed text-muted">{t('subheadline')}</p>
        <div className="mt-2 flex flex-wrap items-center gap-x-8 gap-y-4">
          <Link href="/orcamento" className="cta">
            {t('ctaPrimary')}
            <span className="arrow" aria-hidden="true">→</span>
          </Link>
          <a href="#portfolio" className="link font-mono text-sm uppercase tracking-[0.04em]">
            {t('ctaSecondary')}
          </a>
        </div>
        <p className="font-mono text-sm text-muted">{t('reassurance')}</p>
      </div>
      <div className="photo border border-line">
        <Image
          src={serviceImages.hero}
          alt={t('imageAlt')}
          width={1600}
          height={1200}
          priority
          className="aspect-[4/3] w-full object-cover"
        />
      </div>
    </section>
  );
}
