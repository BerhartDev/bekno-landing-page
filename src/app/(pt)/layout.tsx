import type { ReactNode } from 'react';
import LocaleShell from '@/components/layout/LocaleShell';
import { routing } from '@/lib/i18n/routing';

// Português é o idioma padrão e fica na raiz do site, sem prefixo.
export default function DefaultLocaleLayout({ children }: { children: ReactNode }) {
  return <LocaleShell locale={routing.defaultLocale}>{children}</LocaleShell>;
}
