import type { MetadataRoute } from 'next';
import { routing, type AppPathname } from '@/lib/i18n/routing';
import { pageUrl } from '@/lib/seo';
import { SITE } from '@/lib/site';

/** Rotas de routing.pathnames que não entram no sitemap. */
const EXCLUDED: string[] = [];

/** Páginas legais ficam fora até a revisão jurídica (SITE.legalPagesReady). */
const LEGAL_PAGES = ['/politica-de-privacidade', '/termos-de-uso'];

function priority(path: string, locale: string) {
  if (path === '/') return locale === routing.defaultLocale ? 1 : 0.8;
  if (path === '/orcamento') return 0.7;
  return 0.6;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const paths = (Object.keys(routing.pathnames) as AppPathname[]).filter(
    (path) => !EXCLUDED.includes(path) && (SITE.legalPagesReady || !LEGAL_PAGES.includes(path)),
  );

  return routing.locales.flatMap((locale) =>
    paths.map((path) => ({
      url: pageUrl(locale, path === '/' ? '' : path),
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: priority(path, locale),
    })),
  );
}
