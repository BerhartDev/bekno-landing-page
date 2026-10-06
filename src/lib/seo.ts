import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { localizedPath, routing, type AppPathname } from '@/lib/i18n/routing';

const HREFLANG = {
  pt: 'pt-BR',
  en: 'en',
  es: 'es',
  fr: 'fr',
} as const;

const OG_LOCALE = {
  pt: 'pt_BR',
  en: 'en_US',
  es: 'es_ES',
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

/** URL pública de uma página: o PT fica na raiz e cada idioma usa o endereço traduzido. */
export function pageUrl(locale: string, path = '') {
  const internal = (path === '' ? '/' : path.startsWith('/') ? path : `/${path}`) as AppPathname;
  const localized = localizedPath(internal, locale);
  const normalized = localized === '/' ? '' : localized;
  const prefix = locale === routing.defaultLocale ? '' : `/${locale}`;
  return `${getSiteUrl()}${prefix}${normalized}/`;
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

/** Título e descrição de cada rota; a home usa o hero. */
async function pageCopy(locale: string, path: string) {
  if (path === '/projetos') {
    const projects = await getTranslations({ locale, namespace: 'projects' });
    return { title: `${projects('title')} | BEKNO`, description: projects('description') };
  }
  if (path === '/orcamento') {
    const quote = await getTranslations({ locale, namespace: 'quote' });
    return { title: `${quote('eyebrow')} | BEKNO`, description: `${quote('title')} ${quote('subtitle')}` };
  }
  const hero = await getTranslations({ locale, namespace: 'hero' });
  return { title: `${hero('kicker')} | BEKNO`, description: `${hero('kicker')}. ${hero('headline')}` };
}

export async function buildPageMetadata(locale: string, path = ''): Promise<Metadata> {
  const current = asLocale(locale);
  const hero = await getTranslations({ locale, namespace: 'hero' });
  const { title, description } = await pageCopy(locale, path);
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
    knowsLanguage: ['pt-BR', 'en', 'es', 'fr'],
  };
}

function websiteNode(description: string) {
  return {
    '@type': 'WebSite',
    '@id': websiteId(),
    name: 'BEKNO',
    url: `${getSiteUrl()}/`,
    description,
    inLanguage: ['pt-BR', 'en', 'es', 'fr'],
    publisher: { '@id': organizationId() },
  };
}

export async function homeJsonLd(locale: string) {
  const current = asLocale(locale);
  const hero = await getTranslations({ locale, namespace: 'hero' });
  const services = await getTranslations({ locale, namespace: 'services' });
  const items = services.raw('items') as Array<{ title: string; description: string }>;
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
        name: services('title'),
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

async function subpageJsonLd(locale: string, path: string) {
  const current = asLocale(locale);
  const hero = await getTranslations({ locale, namespace: 'hero' });
  const nav = await getTranslations({ locale, namespace: 'navigation' });
  const { title, description } = await pageCopy(locale, path);
  const name = title.replace(/ \| BEKNO$/, '');
  const url = pageUrl(locale, path);
  const home = pageUrl(locale);

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
            name,
            item: url,
          },
        ],
      },
    ],
  };
}

export function projectsJsonLd(locale: string) {
  return subpageJsonLd(locale, '/projetos');
}

export function quoteJsonLd(locale: string) {
  return subpageJsonLd(locale, '/orcamento');
}
