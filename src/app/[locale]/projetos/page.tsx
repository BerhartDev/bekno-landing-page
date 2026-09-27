import { useTranslations } from 'next-intl';
import { Link } from '@/lib/i18n/routing';

export default function ProjectsPage() {
  const t = useTranslations('projects');

  return (
    <section className="grid gap-6 border-t border-line py-16 md:py-24">
      <p className="font-mono text-sm uppercase tracking-[0.04em] text-muted">
        01 — {t('title')}
      </p>
      <h1 className="max-w-[14ch] text-[clamp(2.5rem,1.6rem+4.2vw,5.25rem)] font-bold leading-[1.02] tracking-[-0.035em]">
        {t('subtitle')}
      </h1>
      <p className="max-w-[68ch] text-lg leading-relaxed text-muted">{t('description')}</p>
      <div className="mt-2 flex flex-wrap items-center gap-x-8 gap-y-4">
        <Link href="/#contact" className="cta">
          {t('ctaContact')}
          <span className="arrow" aria-hidden="true">→</span>
        </Link>
        <Link href="/" className="link font-mono text-sm uppercase tracking-[0.04em]">
          {t('ctaBack')}
        </Link>
      </div>
    </section>
  );
}
