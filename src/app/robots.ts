import type { MetadataRoute } from 'next';
import { getSiteUrl } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Sites demo de clientes fictícios (projetos conceito).
      disallow: '/demos/',
    },
    sitemap: `${getSiteUrl()}/sitemap.xml`,
  };
}
