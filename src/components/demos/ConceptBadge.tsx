import { portfolioHref } from '@/lib/portfolio';

/** Faixa neutra no topo de todo demo: deixa claro que o cliente é fictício. */
export default function ConceptBadge() {
  return (
    <div className="relative z-50 bg-neutral-950 px-4 py-2 text-center font-sans text-xs text-neutral-300">
      <span className="font-semibold text-white">Projeto conceito</span>
      <span aria-hidden="true"> · </span>
      cliente fictício criado pela BEKNO para demonstração
      <span aria-hidden="true"> · </span>
      <a href={portfolioHref()} className="whitespace-nowrap text-white underline underline-offset-2 hover:no-underline">
        Ver portfólio
      </a>
    </div>
  );
}
