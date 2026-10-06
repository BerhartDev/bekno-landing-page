import type { Metadata } from 'next';
import { fontVariables } from '@/lib/fonts';
import './globals.css';
import { routing } from '@/lib/i18n/routing';
import { pageUrl } from '@/lib/seo';

const href = `/${routing.defaultLocale}/`;

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  alternates: { canonical: pageUrl(routing.defaultLocale) },
};

export default function RootPage() {
  return (
    <html lang={routing.defaultLocale} className={fontVariables}>
      <head>
        <meta httpEquiv="refresh" content={`0;url=${href}`} />
      </head>
      <body className="font-sans antialiased">
        <p>
          <a href={href}>BEKNO</a>
        </p>
      </body>
    </html>
  );
}
