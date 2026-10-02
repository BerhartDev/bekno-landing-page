import type { MetadataRoute } from 'next';
import { routing } from '@/lib/i18n/routing';
import { pageUrl } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = routing.locales.flatMap((locale) => [
    {
      url: pageUrl(locale),
      lastModified,
      changeFrequency: 'monthly',
      priority: locale === routing.defaultLocale ? 1 : 0.8,
    },
    {
      url: pageUrl(locale, '/projetos'),
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]);

  return entries;
}
