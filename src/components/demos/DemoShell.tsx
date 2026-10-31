import type { CSSProperties, ReactNode } from 'react';
import type { Metadata } from 'next';
import DemoNotice from './DemoNotice';
import { demoThemeStyle, getProject } from '@/lib/portfolio';

type Font = { style: { fontFamily: string } };

interface DemoShellProps {
  slug: string;
  display: Font;
  body: Font;
  children: ReactNode;
}

/** Documento de um site do portfólio: tema e fontes da versão de demonstração anonimizada de projeto real, sem a identidade da BEKNO. */
export default function DemoShell({ slug, display, body, children }: DemoShellProps) {
  const style = {
    ...demoThemeStyle(getProject(slug).theme),
    '--d-font-display': display.style.fontFamily,
    '--d-font-body': body.style.fontFamily,
  } as CSSProperties;

  return (
    <html lang="pt-BR" style={style}>
      <body className="min-h-screen bg-d-bg font-body text-d-fg antialiased">
        {children}
        <DemoNotice />
      </body>
    </html>
  );
}

export function demoMetadata(client: string, description: string): Metadata {
  return {
    title: client,
    description,
    // Versão de demonstração anonimizada de projeto real: fora das buscas para não ser confundida com o negócio real.
    robots: { index: false, follow: false },
  };
}
