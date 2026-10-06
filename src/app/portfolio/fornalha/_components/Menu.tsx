'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { showDemoNotice } from '@/components/demos/DemoNotice';
import { demoImage } from '@/lib/portfolio';
import { brl, CATEGORIES, DISHES, type Category } from '../_data';

type Bag = Record<string, number>;

export default function Menu() {
  const [category, setCategory] = useState<Category>('brasa');
  const [bag, setBag] = useState<Bag>({});
  const [bagOpen, setBagOpen] = useState(false);

  const visible = DISHES.filter((dish) => dish.category === category);
  const lines = useMemo(
    () => DISHES.filter((dish) => bag[dish.id]).map((dish) => ({ dish, qty: bag[dish.id] })),
    [bag],
  );
  const count = lines.reduce((sum, line) => sum + line.qty, 0);
  const total = lines.reduce((sum, line) => sum + line.qty * line.dish.price, 0);

  const change = (id: string, delta: number) =>
    setBag((current) => {
      const qty = Math.max(0, (current[id] ?? 0) + delta);
      const next = { ...current, [id]: qty };
      if (qty === 0) delete next[id];
      return next;
    });

  const checkout = () => {
    showDemoNotice('Num site real, o pedido seguiria pronto para o WhatsApp do restaurante, com itens e total.');
  };

  return (
    <section id="cardapio" className="scroll-mt-20 border-t border-d-line py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-d-accent">Cardápio</p>
            <h2 className="mt-3 font-display text-5xl leading-none md:text-6xl">Do fogo para a mesa</h2>
          </div>
          <p className="max-w-sm text-d-muted">
            Monte o pedido para retirada ou entrega. A cozinha confirma pelo WhatsApp.
          </p>
        </div>

        <div role="tablist" aria-label="Categorias do cardápio" className="mt-10 flex gap-2 overflow-x-auto pb-2">
          {CATEGORIES.map((item) => (
            <button
              key={item.id}
              role="tab"
              type="button"
              aria-selected={category === item.id}
              onClick={() => setCategory(item.id)}
              className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors ${
                category === item.id
                  ? 'border-d-accent bg-d-accent text-d-accent-fg'
                  : 'border-d-line text-d-muted hover:border-d-muted hover:text-d-fg'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <ul role="tabpanel" className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((dish) => (
            <li key={dish.id} className="group flex flex-col overflow-hidden rounded-2xl bg-d-surface">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={demoImage(dish.image)}
                  alt={dish.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {dish.tag && (
                  <span className="absolute left-3 top-3 rounded-full bg-d-bg/85 px-3 py-1 text-xs font-medium backdrop-blur">
                    {dish.tag}
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-2xl leading-tight">{dish.name}</h3>
                  <span className="shrink-0 font-semibold text-d-accent">{brl(dish.price)}</span>
                </div>
                <p className="text-sm leading-relaxed text-d-muted">{dish.description}</p>
                <div className="mt-auto pt-2">
                  {bag[dish.id] ? (
                    <div className="inline-flex items-center gap-1 rounded-full border border-d-line">
                      <button
                        type="button"
                        className="grid h-11 w-11 place-items-center text-lg"
                        onClick={() => change(dish.id, -1)}
                        aria-label={`Remover um ${dish.name}`}
                      >
                        −
                      </button>
                      <span className="min-w-6 text-center font-semibold" aria-live="polite">
                        {bag[dish.id]}
                      </span>
                      <button
                        type="button"
                        className="grid h-11 w-11 place-items-center text-lg"
                        onClick={() => change(dish.id, 1)}
                        aria-label={`Adicionar mais um ${dish.name}`}
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => change(dish.id, 1)}
                      className="h-11 rounded-full border border-d-accent px-5 text-sm font-semibold text-d-accent transition-colors hover:bg-d-accent hover:text-d-accent-fg"
                    >
                      Adicionar à sacola
                    </button>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {count > 0 && (
        <div className="fixed inset-x-0 bottom-0 z-40 p-4">
          <button
            type="button"
            onClick={() => setBagOpen(true)}
            className="mx-auto flex w-full max-w-md items-center justify-between rounded-full bg-d-accent px-6 py-4 font-semibold text-d-accent-fg shadow-2xl shadow-black/50"
          >
            <span>
              Ver sacola · {count} {count === 1 ? 'item' : 'itens'}
            </span>
            <span>{brl(total)}</span>
          </button>
        </div>
      )}

      {bagOpen && (
        <div className="fixed inset-0 z-50 flex justify-end" role="dialog" aria-modal="true" aria-label="Sacola">
          <button
            type="button"
            className="absolute inset-0 bg-black/60"
            aria-label="Fechar sacola"
            onClick={() => setBagOpen(false)}
          />
          <div className="relative flex h-full w-full max-w-md flex-col bg-d-bg shadow-2xl">
            <div className="flex items-center justify-between border-b border-d-line px-6 py-5">
              <h2 className="font-display text-3xl">Sua sacola</h2>
              <button
                type="button"
                className="grid h-11 w-11 place-items-center rounded-full border border-d-line"
                onClick={() => setBagOpen(false)}
                aria-label="Fechar sacola"
              >
                ✕
              </button>
            </div>
            <ul className="flex-1 divide-y divide-d-line overflow-y-auto px-6">
              {lines.length === 0 && <li className="py-10 text-center text-d-muted">A sacola está vazia.</li>}
              {lines.map(({ dish, qty }) => (
                <li key={dish.id} className="flex items-center gap-4 py-4">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
                    <Image src={demoImage(dish.image)} alt="" fill sizes="64px" className="object-cover" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-medium">{dish.name}</p>
                    <p className="text-sm text-d-muted">{brl(dish.price * qty)}</p>
                  </div>
                  <div className="flex items-center rounded-full border border-d-line">
                    <button
                      type="button"
                      className="grid h-10 w-10 place-items-center"
                      onClick={() => change(dish.id, -1)}
                      aria-label={`Remover um ${dish.name}`}
                    >
                      −
                    </button>
                    <span className="w-5 text-center text-sm font-semibold">{qty}</span>
                    <button
                      type="button"
                      className="grid h-10 w-10 place-items-center"
                      onClick={() => change(dish.id, 1)}
                      aria-label={`Adicionar mais um ${dish.name}`}
                    >
                      +
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="border-t border-d-line p-6">
              <div className="flex items-baseline justify-between">
                <span className="text-d-muted">Total</span>
                <span className="font-display text-3xl">{brl(total)}</span>
              </div>
              <button
                type="button"
                disabled={count === 0}
                onClick={checkout}
                className="mt-5 h-14 w-full rounded-full bg-d-accent font-semibold text-d-accent-fg transition-opacity disabled:opacity-40"
              >
                Finalizar pelo WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
