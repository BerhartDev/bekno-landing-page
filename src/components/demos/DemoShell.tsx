import type { CSSProperties, ReactNode } from 'react';
import type { Metadata } from 'next';
import DemoNotice from './DemoNotice';
import { demoThemeStyle, getProject, portfolioHref } from '@/lib/portfolio';

type Font = { style: { fontFamily: string } };

interface DemoShellProps {
  slug: string;
  display: Font;
  body: Font;
  children: ReactNode;
}

/**
 * Documento de um site do portfólio: tema e fontes do cliente fictício.
 * A única marca da BEKNO é o crédito discreto no fim da página, que identifica o projeto conceito.
 */
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
        <p className="border-t border-d-line px-5 py-4 text-center text-xs text-d-muted">
          Projeto conceito desenvolvido por{' '}
          <a href={portfolioHref()} className="underline underline-offset-2 hover:text-d-fg">
            BEKNO
          </a>
        </p>
        <DemoNotice />
      </body>
    </html>
  );
}

export function demoMetadata(client: string, description: string): Metadata {
  return {
    title: client,
    description,
    // Negócios fictícios não devem aparecer em buscas.
    robots: { index: false, follow: false },
  };
}
