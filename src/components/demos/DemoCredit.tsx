import { SITE } from '@/lib/site';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

// Fonte do sistema: a faixa não herda as fontes nem o tema do demo.
const SYSTEM_FONT = 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif';

/**
 * Faixa da BEKNO no fim de cada site do portfólio. Só em PT: os demos são pt-BR e não têm
 * provider de tradução. Os links são <a> comuns porque o site da BEKNO tem outro CSS.
 */
export default function DemoCredit() {
  const brand = <strong className="font-semibold text-white">{SITE.brand}</strong>;
  const link = 'inline-flex min-h-[44px] items-center underline-offset-4 hover:text-white hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:min-h-0';

  const items = [
    <span key="privacy">Projeto real · nome e marca alterados por privacidade</span>,
    <span key="credit">Site criado pela {brand}</span>,
    <a key="home" href={`${basePath}/`} className={link}>
      Conheça a {brand}&nbsp;→
    </a>,
    <a key="quote" href={`${basePath}/orcamento/`} className={link}>
      Pedir orçamento&nbsp;→
    </a>,
    <span key="rights" suppressHydrationWarning>
      © {SITE.foundedYear}–{new Date().getFullYear()} {brand}. Todos os direitos reservados.
    </span>,
  ];

  return (
    <aside
      aria-label="Créditos"
      className="bg-neutral-950 px-4 py-6 text-xs leading-relaxed text-neutral-300 sm:px-6 sm:text-sm"
      style={{ fontFamily: SYSTEM_FONT }}
    >
      <ul className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-3 gap-y-1">
        {items.map((item, index) => (
          <li key={item.key} className="flex items-center gap-x-3">
            {index > 0 && (
              <span className="text-neutral-500" aria-hidden="true">
                ·
              </span>
            )}
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}
