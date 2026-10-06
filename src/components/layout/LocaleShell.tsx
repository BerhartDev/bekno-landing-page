import type { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { fontVariables } from '@/lib/fonts';
import { themeScript } from '@/lib/theme-script';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import '@/app/globals.css';

/** Documento das páginas da BEKNO, usado pela raiz (PT) e por /[locale] (EN, ES, FR). */
export default async function LocaleShell({ locale, children }: { locale: string; children: ReactNode }) {
  setRequestLocale(locale);
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} className={fontVariables} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div id="top" className="mx-auto max-w-page px-[clamp(1rem,4vw,3rem)]">
            <Header />
            <main id="main">{children}</main>
            <Footer />
          </div>
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
