import type { ReactNode } from 'react';
import { Work_Sans } from 'next/font/google';
import DemoShell, { demoMetadata } from '@/components/demos/DemoShell';
import { fornalhaDisplay } from '@/lib/demo-fonts';
import '../sites.css';

const body = Work_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: 'variable',
  display: 'swap',
});

export const metadata = demoMetadata(
  'Fornalha · Cozinha de Brasa',
  'Restaurante de cozinha na brasa com cardápio, pedido e reservas on-line.',
);

export default function FornalhaLayout({ children }: { children: ReactNode }) {
  return (
    <DemoShell slug="fornalha" display={fornalhaDisplay} body={body}>
      {children}
    </DemoShell>
  );
}
