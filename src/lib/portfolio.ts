import type { CSSProperties } from 'react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

/** Cores de um site demo. Viram as variáveis --d-* que o Tailwind expõe como `d-*`. */
export type DemoTheme = {
  bg: string;
  surface: string;
  fg: string;
  muted: string;
  line: string;
  accent: string;
  accentFg: string;
};

export type PortfolioProject = {
  slug: string;
  client: string;
  /** Chave de `projects.siteTypes` nos locales. */
  siteType: 'institutional' | 'landing' | 'store' | 'platform';
  theme: DemoTheme;
  cover?: string;
};

/**
 * Projetos conceito: clientes fictícios criados para mostrar o trabalho da BEKNO.
 * Todo card e todo demo exibe o selo "Projeto conceito".
 */
export const PORTFOLIO: PortfolioProject[] = [
  {
    slug: 'fornalha',
    client: 'Fornalha',
    siteType: 'institutional',
    cover: 'fornalha/hero.jpg',
    theme: {
      bg: '#14100d',
      surface: '#1f1914',
      fg: '#f3e9dc',
      muted: '#b5a593',
      line: '#3a2f26',
      accent: '#e8622c',
      accentFg: '#140f0b',
    },
  },
  {
    slug: 'fluxo',
    client: 'Fluxo',
    siteType: 'landing',
    theme: {
      bg: '#0b0a1f',
      surface: '#15132f',
      fg: '#eeedfb',
      muted: '#a6a3cc',
      line: '#2a2752',
      accent: '#8f82ff',
      accentFg: '#0b0a1f',
    },
  },
  {
    slug: 'mare-atelier',
    client: 'Maré Atelier',
    siteType: 'store',
    cover: 'mare-atelier/hero.jpg',
    theme: {
      bg: '#f4efe8',
      surface: '#ebe3d8',
      fg: '#1c1a17',
      muted: '#6b6359',
      line: '#d6cbbd',
      accent: '#b0532f',
      accentFg: '#fbf8f3',
    },
  },
  {
    slug: 'alvea',
    client: 'Alvéa',
    siteType: 'institutional',
    cover: 'alvea/sorriso.jpg',
    theme: {
      bg: '#f7f3ec',
      surface: '#ece7dc',
      fg: '#23302a',
      muted: '#5d6b63',
      line: '#d9d3c5',
      accent: '#3f6b55',
      accentFg: '#f7f3ec',
    },
  },
  {
    slug: 'forja',
    client: 'Forja',
    siteType: 'landing',
    cover: 'forja/hero.jpg',
    theme: {
      bg: '#0a0a0a',
      surface: '#161616',
      fg: '#f5f5f0',
      muted: '#9a9a92',
      line: '#2a2a2a',
      accent: '#d4ff3a',
      accentFg: '#0a0a0a',
    },
  },
  {
    slug: 'altair-advocacia',
    client: 'Altair Advocacia',
    siteType: 'institutional',
    cover: 'altair-advocacia/hero.jpg',
    theme: {
      bg: '#0f1a2b',
      surface: '#16243a',
      fg: '#f1ece2',
      muted: '#a9b1bf',
      line: '#2a3a55',
      accent: '#c9a96a',
      accentFg: '#0f1a2b',
    },
  },
];

export function getProject(slug: string): PortfolioProject {
  const project = PORTFOLIO.find((item) => item.slug === slug);
  if (!project) throw new Error(`Projeto de portfólio desconhecido: ${slug}`);
  return project;
}

/** "#8f82ff" -> "143 130 255": o Tailwind monta rgb(var(--d-x) / alpha) com esses canais. */
function channels(hex: string): string {
  const value = parseInt(hex.slice(1), 16);
  return `${(value >> 16) & 255} ${(value >> 8) & 255} ${value & 255}`;
}

export function demoThemeStyle(theme: DemoTheme): CSSProperties {
  return {
    '--d-bg': channels(theme.bg),
    '--d-surface': channels(theme.surface),
    '--d-fg': channels(theme.fg),
    '--d-muted': channels(theme.muted),
    '--d-line': channels(theme.line),
    '--d-accent': channels(theme.accent),
    '--d-accent-fg': channels(theme.accentFg),
  } as CSSProperties;
}

export function demoImage(path: string): string {
  return `${basePath}/portfolio/${path}`;
}

/** Os sites do portfólio ficam fora de [locale]; os links usam <a> para recarregar e trocar o CSS da página. */
export function demoHref(slug: string): string {
  return `${basePath}/portfolio/${slug}/`;
}

