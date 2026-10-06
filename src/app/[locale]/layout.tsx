import type { ReactNode } from 'react';
import LocaleShell from '@/components/layout/LocaleShell';
import { routing } from '@/lib/i18n/routing';

// O idioma padrão (PT) mora na raiz, em app/(pt). Aqui ficam só os outros.
export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.filter((locale) => locale !== routing.defaultLocale).map((locale) => ({ locale }));
}

export default function LocaleLayout({ children, params: { locale } }: { children: ReactNode; params: { locale: string } }) {
  return <LocaleShell locale={locale}>{children}</LocaleShell>;
}
