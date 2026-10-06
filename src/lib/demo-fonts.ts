import { Anton, Cormorant_Garamond, DM_Serif_Display, Fraunces, Italiana, Space_Grotesk } from 'next/font/google';

// Fontes de título dos demos. Ficam aqui porque os cards do portfólio também as usam.
// preload: false para a página de projetos não pré-carregar a fonte de todos os demos.

export const fornalhaDisplay = DM_Serif_Display({
  subsets: ['latin', 'latin-ext'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-fornalha-display',
  display: 'swap',
  preload: false,
});

export const fluxoDisplay = Space_Grotesk({
  subsets: ['latin', 'latin-ext'],
  weight: 'variable',
  variable: '--font-fluxo-display',
  display: 'swap',
  preload: false,
});

export const mareDisplay = Italiana({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-mare-display',
  display: 'swap',
  preload: false,
});

export const alveaDisplay = Fraunces({
  subsets: ['latin', 'latin-ext'],
  weight: 'variable',
  style: ['normal', 'italic'],
  axes: ['SOFT', 'opsz'],
  variable: '--font-alvea-display',
  display: 'swap',
  preload: false,
});

export const forjaDisplay = Anton({
  subsets: ['latin', 'latin-ext'],
  weight: '400',
  variable: '--font-forja-display',
  display: 'swap',
  preload: false,
});

export const altairDisplay = Cormorant_Garamond({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-altair-display',
  display: 'swap',
  preload: false,
});

export const demoDisplayFonts: Record<string, { className: string; variable: string }> = {
  fornalha: fornalhaDisplay,
  fluxo: fluxoDisplay,
  'mare-atelier': mareDisplay,
  alvea: alveaDisplay,
  forja: forjaDisplay,
  'altair-advocacia': altairDisplay,
};
