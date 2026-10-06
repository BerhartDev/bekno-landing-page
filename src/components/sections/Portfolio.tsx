'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/lib/i18n/routing';
import PortfolioCard from '@/components/PortfolioCard';
import Section from '@/components/ui/Section';
import { PORTFOLIO } from '@/lib/portfolio';

export default function Portfolio() {
  const t = useTranslations('portfolio');
  const p = useTranslations('projects');

  return (
    <Section id="portfolio" title={t('title')} intro={t('subtitle')}>
      <ul className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {PORTFOLIO.slice(0, 3).map((project) => (
          <li key={project.slug}>
            <PortfolioCard
              project={project}
              niche={p(`items.${project.slug}.niche`)}
              summary={p(`items.${project.slug}.summary`)}
              siteType={p(`siteTypes.${project.siteType}`)}
              open={p('open')}
            />
          </li>
        ))}
      </ul>
      <div className="mt-10">
        <Link href="/projetos" className="cta">
          {t('cta')}
          <span className="arrow" aria-hidden="true">→</span>
        </Link>
      </div>
    </Section>
  );
}
