/**
 * Links do site, compartilhados por Header e Footer.
 * `key` é a chave em `navigation` nos JSON de tradução. `href` com "#" é uma âncora da home;
 * os demais são caminhos internos em PT (routing.pathnames traduz para cada idioma).
 * Itens com enabled: false já têm texto traduzido e são ativados quando a página existir.
 */
export const NAV_LINKS = [
  { key: 'services', href: '#services', enabled: true },
  { key: 'method', href: '#method', enabled: true },
  { key: 'projects', href: '/projetos', enabled: true },
  { key: 'quote', href: '/orcamento', enabled: true },
  { key: 'design', href: '/design', enabled: false },
  { key: 'marketing', href: '/marketing', enabled: false },
  { key: 'about', href: '/sobre', enabled: false },
  { key: 'faq', href: '#perguntas', enabled: true },
  { key: 'privacy', href: '/politica-de-privacidade', enabled: false },
  { key: 'terms', href: '/termos-de-uso', enabled: false },
] as const;

export type NavLink = (typeof NAV_LINKS)[number];

export const enabledNavLinks = () => NAV_LINKS.filter((link) => link.enabled);
