import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { localizedPath, routing, type AppPathname } from '@/lib/i18n/routing';
import { buildPageMetadata } from '@/lib/seo';
import ProjectsView from '@/views/ProjectsView';
import QuoteView from '@/views/QuoteView';

// Páginas internas dos idiomas com prefixo, cada uma no endereço da própria língua:
// /en/projects, /es/proyectos, /fr/projets, /en/quote, /es/presupuesto, /fr/devis.
const PAGES: Partial<Record<AppPathname, (locale: string) => ReactNode>> = {
  '/projetos': (locale) => <ProjectsView locale={locale} />,
  '/orcamento': (locale) => <QuoteView locale={locale} />,
};

export const dynamicParams = false;

export function generateStaticParams({ params: { locale } }: { params: { locale: string } }) {
  return (Object.keys(PAGES) as AppPathname[]).map((pathname) => ({
    slug: localizedPath(pathname, locale).slice(1),
  }));
}

type Props = { params: { locale: string; slug: string } };

function pageFor(locale: string, slug: string): AppPathname {
  const match = (Object.keys(PAGES) as AppPathname[]).find((pathname) => localizedPath(pathname, locale) === `/${slug}`);
  if (!match) throw new Error(`Página desconhecida: /${locale}/${slug}`);
  return match;
}

export function generateMetadata({ params: { locale, slug } }: Props): Promise<Metadata> {
  return buildPageMetadata(locale, pageFor(locale, slug));
}

export default function LocalizedPage({ params: { locale, slug } }: Props) {
  return PAGES[pageFor(locale, slug)]!(locale);
}
