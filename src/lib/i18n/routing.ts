import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['pt', 'en', 'es', 'fr'],

  // Used when no locale matches
  defaultLocale: 'pt',

  // PT lives at the site root (/projetos/); other languages keep a prefix (/en/projects/).
  localePrefix: 'as-needed',

  // Each language gets its own URL. Code always links to the PT path; next-intl translates it.
  pathnames: {
    '/': '/',
    '/projetos': {
      pt: '/projetos',
      en: '/projects',
      es: '/proyectos',
      fr: '/projets'
    },
    '/orcamento': {
      pt: '/orcamento',
      en: '/quote',
      es: '/presupuesto',
      fr: '/devis'
    }
  }
});

export type AppPathname = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

/** Localized path of a page, e.g. ('/projetos', 'en') -> '/projects'. Without the locale prefix. */
export function localizedPath(pathname: AppPathname, locale: string): string {
  const entry = routing.pathnames[pathname];
  return typeof entry === 'string' ? entry : entry[locale as Locale];
}

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, getPathname, redirect, usePathname, useRouter } =
  createNavigation(routing);
