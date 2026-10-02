import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BEKNO',
  robots: { index: false, follow: true },
};

// The document shell lives in [locale]/layout so each language can set <html lang>.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
