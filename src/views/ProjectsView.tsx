import { getTranslations, setRequestLocale } from 'next-intl/server';
import JsonLd from '@/components/seo/JsonLd';
import { projectsJsonLd } from '@/lib/seo';
import { Link } from '@/lib/i18n/routing';
import PortfolioCard from '@/components/PortfolioCard';
import { PORTFOLIO } from '@/lib/portfolio';

export default async function ProjectsView({ locale }: { locale: string }) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'projects' });
  const jsonLd = await projectsJsonLd(locale);

  return (
    <>
      <JsonLd data={jsonLd} />
      <section className="grid gap-6 border-t border-line py-16 md:py-24">
        <p className="font-mono text-sm uppercase tracking-[0.04em] text-muted">{t('title')}</p>
        <h1 className="max-w-[16ch] text-[clamp(2.5rem,1.6rem+4.2vw,5.25rem)] font-bold leading-[1.02] tracking-[-0.035em]">
          {t('subtitle')}
        </h1>
        <p className="max-w-[68ch] text-lg leading-relaxed text-muted">{t('description')}</p>
        <div className="flex max-w-[68ch] gap-3 border border-line p-4 text-sm leading-relaxed text-muted">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mt-0.5 shrink-0 text-fg"
            aria-hidden="true"
          >
            <rect x="4" y="11" width="16" height="10" rx="1" />
            <path d="M8 11V7a4 4 0 0 1 8 0v4" />
          </svg>
          <p>{t.rich('disclaimer', { strong: (chunks) => <strong className="font-semibold text-fg">{chunks}</strong> })}</p>
        </div>
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
                badge={t('badge')}
              />
            </li>
          ))}
        </ul>
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
