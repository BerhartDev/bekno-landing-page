import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { routing } from '@/lib/i18n/routing';

const HREFLANG = {
  pt: 'pt-BR',
  en: 'en',
  fr: 'fr',
} as const;

const OG_LOCALE = {
  pt: 'pt_BR',
  en: 'en_US',
  fr: 'fr_FR',
} as const;

type Locale = keyof typeof HREFLANG;

function asLocale(locale: string): Locale {
  if (locale in HREFLANG) return locale as Locale;
  return routing.defaultLocale;
}

export function getSiteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL || 'https://bekno.com.br').replace(/\/$/, '');
}

export function pageUrl(locale: string, path = '') {
  const normalized = path === '' || path === '/' ? '' : path.startsWith('/') ? path : `/${path}`;
  return `${getSiteUrl()}/${locale}${normalized}/`;
}

export function languageAlternates(path = '') {
  const languages: Record<string, string> = {};
  for (const locale of routing.locales) {
    languages[HREFLANG[asLocale(locale)]] = pageUrl(locale, path);
  }
  languages['x-default'] = pageUrl(routing.defaultLocale, path);
  return languages;
}

export function organizationId() {
  return `${getSiteUrl()}/#organization`;
}

export function websiteId() {
  return `${getSiteUrl()}/#website`;
}

const PHONE = '+5521973692691';

export async function buildPageMetadata(locale: string, path = ''): Promise<Metadata> {
  const current = asLocale(locale);
  const hero = await getTranslations({ locale, namespace: 'hero' });
  const projects = await getTranslations({ locale, namespace: 'projects' });
  const isProjects = path === '/projetos';
  const title = isProjects ? `${projects('title')} | BEKNO` : `${hero('kicker')} | BEKNO`;
  const description = isProjects ? projects('description') : `${hero('kicker')}. ${hero('headline')}`;
  const url = pageUrl(locale, path);
  const image = {
    url: `${getSiteUrl()}/services/hero.jpg`,
    width: 1600,
    height: 1200,
    alt: hero('imageAlt'),
  };

  return {
    metadataBase: new URL(getSiteUrl()),
    title: { absolute: title },
    description,
    alternates: {
      canonical: url,
      languages: languageAlternates(path),
    },
    openGraph: {
      type: 'website',
      url,
      title,
      description,
      siteName: 'BEKNO',
      locale: OG_LOCALE[current],
      alternateLocale: routing.locales
        .filter((item) => item !== current)
        .map((item) => OG_LOCALE[asLocale(item)]),
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image.url],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
  };
}

function organizationNode(description: string) {
  return {
    '@type': 'ProfessionalService',
    '@id': organizationId(),
    name: 'BEKNO',
    url: `${getSiteUrl()}/`,
    description,
    telephone: PHONE,
    image: `${getSiteUrl()}/services/hero.jpg`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Rio de Janeiro',
      addressRegion: 'RJ',
      addressCountry: 'BR',
    },
    areaServed: {
      '@type': 'Country',
      name: 'BR',
    },
    knowsLanguage: ['pt-BR', 'en', 'fr'],
  };
}

function websiteNode(description: string) {
  return {
    '@type': 'WebSite',
    '@id': websiteId(),
    name: 'BEKNO',
    url: `${getSiteUrl()}/`,
    description,
    inLanguage: ['pt-BR', 'en', 'fr'],
    publisher: { '@id': organizationId() },
  };
}

export async function homeJsonLd(locale: string) {
  const current = asLocale(locale);
  const hero = await getTranslations({ locale, namespace: 'hero' });
  const features = await getTranslations({ locale, namespace: 'features' });
  const items = features.raw('items') as Array<{ title: string; description: string }>;
  const description = `${hero('kicker')}. ${hero('headline')}`;
  const url = pageUrl(locale);
  const title = `${hero('kicker')} | BEKNO`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      organizationNode(description),
      websiteNode(description),
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: title,
        description,
        inLanguage: HREFLANG[current],
        isPartOf: { '@id': websiteId() },
        about: { '@id': organizationId() },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: `${getSiteUrl()}/services/hero.jpg`,
          width: 1600,
          height: 1200,
        },
      },
      {
        '@type': 'ItemList',
        '@id': `${url}#services`,
        name: features('title'),
        itemListElement: items.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'Service',
            name: item.title,
            description: item.description,
            url: `${url}#services`,
            provider: { '@id': organizationId() },
            areaServed: { '@type': 'Country', name: 'BR' },
          },
        })),
      },
    ],
  };
}

export async function projectsJsonLd(locale: string) {
  const current = asLocale(locale);
  const hero = await getTranslations({ locale, namespace: 'hero' });
  const projects = await getTranslations({ locale, namespace: 'projects' });
  const nav = await getTranslations({ locale, namespace: 'navigation' });
  const description = projects('description');
  const url = pageUrl(locale, '/projetos');
  const home = pageUrl(locale);
  const title = `${projects('title')} | BEKNO`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      organizationNode(`${hero('kicker')}. ${hero('headline')}`),
      websiteNode(`${hero('kicker')}. ${hero('headline')}`),
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: title,
        description,
        inLanguage: HREFLANG[current],
        isPartOf: { '@id': websiteId() },
        about: { '@id': organizationId() },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: nav('home'),
            item: home,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: projects('title'),
            item: url,
          },
        ],
      },
    ],
  };
}
