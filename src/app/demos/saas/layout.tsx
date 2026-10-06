import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import DemoShell, { demoMetadata } from '@/components/demos/DemoShell';
import { fluxoDisplay } from '@/lib/demo-fonts';
import '../demos.css';

const body = Inter({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
});

export const metadata = demoMetadata(
  'Fluxo · Gestão financeira para pequenas empresas',
  'Landing page de um software de gestão financeira, com planos, calculadora de economia e perguntas frequentes.',
);

export default function FluxoLayout({ children }: { children: ReactNode }) {
  return (
    <DemoShell slug="saas" display={fluxoDisplay} body={body}>
      {children}
    </DemoShell>
  );
}
