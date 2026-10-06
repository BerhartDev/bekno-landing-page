import type { ReactNode } from 'react';
import { Jost } from 'next/font/google';
import DemoShell, { demoMetadata } from '@/components/demos/DemoShell';
import { mareDisplay } from '@/lib/demo-fonts';
import '../demos.css';

const body = Jost({
  subsets: ['latin', 'latin-ext'],
  weight: 'variable',
  display: 'swap',
});

export const metadata = demoMetadata(
  'Maré Atelier · Moda em linho',
  'Loja virtual de moda com vitrine filtrável, escolha de tamanho e carrinho.',
);

export default function MareLayout({ children }: { children: ReactNode }) {
  return (
    <DemoShell slug="moda" display={mareDisplay} body={body}>
      {children}
    </DemoShell>
  );
}
