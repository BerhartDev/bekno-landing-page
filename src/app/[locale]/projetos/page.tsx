import { useTranslations } from 'next-intl';
import { Link } from '@/lib/i18n/routing';
import PortfolioCard from '@/components/PortfolioCard';
import { PORTFOLIO } from '@/lib/portfolio';

export default function ProjectsPage() {
  const t = useTranslations('projects');

  return (
    <>
      <section className="grid gap-6 border-t border-line py-16 md:py-24">
        <p className="font-mono text-sm uppercase tracking-[0.04em] text-muted">{t('title')}</p>
        <h1 className="max-w-[16ch] text-[clamp(2.5rem,1.6rem+4.2vw,5.25rem)] font-bold leading-[1.02] tracking-[-0.035em]">
          {t('subtitle')}
        </h1>
        <p className="max-w-[68ch] text-lg leading-relaxed text-muted">{t('description')}</p>
      </section>

      <section className="pb-16 md:pb-24">
        <ul className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO.map((project) => (
            <li key={project.slug}>
              <PortfolioCard
                project={project}
                niche={t(`items.${project.slug}.niche`)}
                summary={t(`items.${project.slug}.summary`)}
                siteType={t(`siteTypes.${project.siteType}`)}
                open={t('open')}
              />
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-[68ch] font-mono text-xs text-muted">{t('disclaimer')}</p>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <Link href="/orcamento" className="cta">
            {t('ctaContact')}
            <span className="arrow" aria-hidden="true">→</span>
          </Link>
          <Link href="/" className="link font-mono text-sm uppercase tracking-[0.04em]">
            {t('ctaBack')}
          </Link>
        </div>
      </section>
    </>
  );
}
