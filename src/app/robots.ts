import type { MetadataRoute } from 'next';
import { getSiteUrl } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Sites de projetos conceito (negócios fictícios) não devem ser indexados.
      disallow: '/portfolio/',
    },
    sitemap: `${getSiteUrl()}/sitemap.xml`,
  };
}
