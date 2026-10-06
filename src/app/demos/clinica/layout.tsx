import type { ReactNode } from 'react';
import { Manrope } from 'next/font/google';
import DemoShell, { demoMetadata } from '@/components/demos/DemoShell';
import { alveaDisplay } from '@/lib/demo-fonts';
import '../demos.css';

const body = Manrope({
  subsets: ['latin', 'latin-ext'],
  weight: 'variable',
  display: 'swap',
});

export const metadata = demoMetadata(
  'Alvéa Odontologia & Estética',
  'Site de clínica odontológica com tratamentos, equipe e agendamento on-line em três passos.',
);

export default function AlveaLayout({ children }: { children: ReactNode }) {
  return (
    <DemoShell slug="clinica" display={alveaDisplay} body={body}>
      {children}
    </DemoShell>
  );
}
