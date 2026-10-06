import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BEKNO',
  robots: { index: false, follow: true },
};

// The document shell lives in [locale]/layout so each language can set <html lang>.
// globals.css is imported by each shell, not here, so the /demos sites keep their own styles.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
