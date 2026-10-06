import type { ReactNode } from 'react';
import { Source_Sans_3 } from 'next/font/google';
import DemoShell, { demoMetadata } from '@/components/demos/DemoShell';
import { altairDisplay } from '@/lib/demo-fonts';
import '../sites.css';

const body = Source_Sans_3({
  subsets: ['latin', 'latin-ext'],
  weight: 'variable',
  display: 'swap',
});

export const metadata = demoMetadata(
  'Altair Advocacia',
  'Site institucional de escritório de advocacia com áreas de atuação, artigos e triagem do caso.',
);

export default function AltairLayout({ children }: { children: ReactNode }) {
  return (
    <DemoShell slug="altair-advocacia" display={altairDisplay} body={body}>
      {children}
    </DemoShell>
  );
}
