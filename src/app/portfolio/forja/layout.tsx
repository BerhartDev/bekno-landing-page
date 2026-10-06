import type { ReactNode } from 'react';
import { Barlow } from 'next/font/google';
import DemoShell, { demoMetadata } from '@/components/demos/DemoShell';
import { forjaDisplay } from '@/lib/demo-fonts';
import '../sites.css';

const body = Barlow({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata = demoMetadata(
  'Forja Training · Força, boxe e funcional',
  'Landing page de academia com quiz de plano, grade de aulas e planos.',
);

export default function ForjaLayout({ children }: { children: ReactNode }) {
  return (
    <DemoShell slug="forja" display={forjaDisplay} body={body}>
      {children}
    </DemoShell>
  );
}
