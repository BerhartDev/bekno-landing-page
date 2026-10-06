'use client';

import { useState } from 'react';

const LINKS = [
  { href: '#casa', label: 'A casa' },
  { href: '#cardapio', label: 'Cardápio' },
  { href: '#ambiente', label: 'Ambiente' },
  { href: '#reservas', label: 'Reservas' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-d-line/70 bg-d-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-6 px-5 md:px-8">
        <a href="#topo" className="font-display text-2xl tracking-tight" onClick={() => setOpen(false)}>
          Fornalha<span className="text-d-accent">.</span>
        </a>
        <nav aria-label="Principal" className="ml-auto hidden md:block">
          <ul className="flex gap-8 text-sm text-d-muted">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-d-fg">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="#reservas"
          className="ml-auto hidden rounded-full bg-d-accent px-5 py-2.5 text-sm font-semibold text-d-accent-fg transition-transform hover:-translate-y-0.5 md:ml-0 md:inline-flex"
        >
          Reservar mesa
        </a>
        <button
          type="button"
          className="ml-auto grid h-11 w-11 place-items-center rounded-full border border-d-line md:hidden"
          aria-expanded={open}
          aria-controls="fornalha-menu"
          aria-label="Abrir menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span aria-hidden="true" className="text-lg leading-none">
            {open ? '✕' : '☰'}
          </span>
        </button>
      </div>
      {open && (
        <nav id="fornalha-menu" aria-label="Principal" className="border-t border-d-line bg-d-bg md:hidden">
          <ul className="mx-auto max-w-6xl px-5 py-3">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-3 font-display text-3xl"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
