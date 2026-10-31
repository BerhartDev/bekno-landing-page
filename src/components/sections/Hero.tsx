'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/lib/i18n/routing';
import { demoImage } from '@/lib/portfolio';

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
      {/* Montagem com capas do portfólio: notebook, cartão e celular, desenhados em CSS. */}
      <div role="img" aria-label={t('imageAlt')} className="relative aspect-[4/3] w-full">
        <div className="absolute left-0 top-0 w-[84%]">
          <div className="border border-fg bg-bg">
            <div className="flex h-5 items-center gap-1.5 border-b border-line px-2 md:h-6" aria-hidden="true">
              <span className="h-1.5 w-1.5 bg-line" />
              <span className="h-1.5 w-1.5 bg-line" />
              <span className="h-1.5 w-1.5 bg-line" />
            </div>
            <div className="relative aspect-[16/10]">
              <Image
                src={demoImage('fornalha/hero.webp')}
                alt=""
                fill
                priority
                sizes="(min-width: 768px) 42vw, 84vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="h-2 w-full border border-t-0 border-fg bg-surface" aria-hidden="true" />
        </div>

        <div className="absolute bottom-0 left-[4%] w-[36%] border border-fg bg-bg p-1.5">
          <div className="relative aspect-[4/3]">
            <Image src={demoImage('alvea/sorriso.webp')} alt="" fill sizes="(min-width: 768px) 18vw, 36vw" className="object-cover" />
          </div>
        </div>

        <div className="absolute bottom-0 right-0 w-[26%] overflow-hidden rounded-[14px] border-[3px] border-fg bg-bg">
          <div className="relative aspect-[9/19]">
            <Image
              src={demoImage('mare-atelier/hero.webp')}
              alt=""
              fill
              sizes="(min-width: 768px) 13vw, 26vw"
              className="object-cover"
            />
            <span className="absolute left-1/2 top-1.5 h-1.5 w-1/3 -translate-x-1/2 rounded-full bg-fg" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
