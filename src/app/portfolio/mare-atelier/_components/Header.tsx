'use client';

import { useCart } from './Cart';

const LINKS = [
  { href: '#loja', label: 'Loja' },
  { href: '#lookbook', label: 'Lookbook' },
  { href: '#atelier', label: 'O atelier' },
];

export default function Header() {
  const { count, setOpen } = useCart();

  return (
    <>
      <p className="bg-d-fg py-2 text-center text-[11px] uppercase tracking-[0.2em] text-d-bg">
        Frete grátis acima de R$ 600 · Primeira troca por nossa conta
      </p>
      <header className="sticky top-0 z-40 border-b border-d-line bg-d-bg/90 backdrop-blur">
        <div className="mx-auto grid h-20 max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-5 md:h-24 md:px-10">
          <nav aria-label="Principal">
            <ul className="hidden gap-8 text-xs uppercase tracking-[0.2em] md:flex">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="border-b border-transparent pb-1 hover:border-d-fg">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#loja" className="text-xs uppercase tracking-[0.2em] md:hidden">
              Loja
            </a>
          </nav>
          <a href="#topo" className="text-center font-display text-3xl leading-none tracking-[0.12em] md:text-4xl">
            MARÉ
            <span className="mt-1.5 block text-[10px] font-normal leading-none tracking-[0.5em] text-d-muted">ATELIER</span>
          </a>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="flex h-11 items-center gap-2 text-xs uppercase tracking-[0.2em]"
            >
              Sacola
              <span className="grid h-6 min-w-6 place-items-center rounded-full bg-d-fg px-1.5 text-[11px] tracking-normal text-d-bg">
                {count}
              </span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
