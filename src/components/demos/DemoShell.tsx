import type { CSSProperties, ReactNode } from 'react';
import type { Metadata } from 'next';
import ConceptBadge from './ConceptBadge';
import DemoNotice from './DemoNotice';
import { demoThemeStyle, getProject } from '@/lib/portfolio';

type Font = { style: { fontFamily: string } };

interface DemoShellProps {
  slug: string;
  display: Font;
  body: Font;
  children: ReactNode;
}

/** Documento de um site demo: tema e fontes do cliente fictício, sem nada da BEKNO além do selo. */
export default function DemoShell({ slug, display, body, children }: DemoShellProps) {
  const style = {
    ...demoThemeStyle(getProject(slug).theme),
    '--d-font-display': display.style.fontFamily,
    '--d-font-body': body.style.fontFamily,
  } as CSSProperties;

  return (
    <html lang="pt-BR" style={style}>
      <body className="min-h-screen bg-d-bg font-body text-d-fg antialiased">
        <ConceptBadge />
        {children}
        <DemoNotice />
      </body>
    </html>
  );
}

export function demoMetadata(client: string, description: string): Metadata {
  return {
    title: `${client} · Projeto conceito BEKNO`,
    description: `Projeto conceito, cliente fictício. ${description}`,
    // Negócios fictícios não devem aparecer em buscas.
    robots: { index: false, follow: false },
  };
}
