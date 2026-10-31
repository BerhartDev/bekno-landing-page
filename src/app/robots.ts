import type { MetadataRoute } from 'next';
import { getSiteUrl } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // /portfolio/ guarda versões de demonstração anonimizadas de projetos de clientes reais.
      // Fica fora do Google para não ser confundido com os negócios reais.
      disallow: '/portfolio/',
    },
    sitemap: `${getSiteUrl()}/sitemap.xml`,
  };
}
