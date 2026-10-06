'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { showDemoNotice } from '@/components/demos/DemoNotice';
import { demoImage } from '@/lib/portfolio';
import { brl, FREE_SHIPPING } from '../_data';
import { useCart } from './Cart';

export default function CartDrawer() {
  const { lines, subtotal, open, setOpen, change } = useCart();
  const missing = Math.max(0, FREE_SHIPPING - subtotal);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, setOpen]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end" role="dialog" aria-modal="true" aria-label="Sacola">
      <button type="button" aria-label="Fechar sacola" className="absolute inset-0 bg-d-fg/40" onClick={() => setOpen(false)} />
      <div className="relative flex h-full w-full max-w-md flex-col bg-d-bg">
        <div className="flex items-center justify-between border-b border-d-line px-6 py-5">
          <h2 className="font-display text-3xl">Sacola</h2>
          <button type="button" onClick={() => setOpen(false)} className="h-11 text-xs uppercase tracking-[0.2em]">
            Fechar
          </button>
        </div>

        <div className="border-b border-d-line px-6 py-4">
          <p className="text-xs">
            {missing > 0 ? (
              <>
                Faltam <strong>{brl(missing)}</strong> para o frete grátis.
              </>
            ) : (
              'Frete grátis garantido.'
            )}
          </p>
          <div className="mt-3 h-1 bg-d-line">
            <div className="h-full bg-d-accent transition-all" style={{ width: `${Math.min(100, (subtotal / FREE_SHIPPING) * 100)}%` }} />
          </div>
        </div>

        <ul className="flex-1 divide-y divide-d-line overflow-y-auto px-6">
          {lines.length === 0 && <li className="py-12 text-center text-sm text-d-muted">Sua sacola está vazia.</li>}
          {lines.map((line) => (
            <li key={line.key} className="flex gap-4 py-5">
              <div className="relative h-28 w-20 shrink-0 bg-d-surface">
                <Image src={demoImage(line.product.image)} alt="" fill sizes="80px" className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col">
                <p className="text-sm">{line.product.name}</p>
                <p className="mt-1 text-xs text-d-muted">
                  {line.product.color} · {line.size}
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center border border-d-line">
                    <button type="button" className="grid h-9 w-9 place-items-center" onClick={() => change(line.key, -1)} aria-label={`Remover um ${line.product.name}`}>
                      −
                    </button>
                    <span className="w-6 text-center text-sm">{line.qty}</span>
                    <button type="button" className="grid h-9 w-9 place-items-center" onClick={() => change(line.key, 1)} aria-label={`Adicionar mais um ${line.product.name}`}>
                      +
                    </button>
                  </div>
                  <p className="text-sm">{brl(line.product.price * line.qty)}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="border-t border-d-line p-6">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>{brl(subtotal)}</span>
          </div>
          <p className="mt-1 text-xs text-d-muted">Em até 6x sem juros. Frete calculado no checkout.</p>
          <button
            type="button"
            disabled={lines.length === 0}
            onClick={() => showDemoNotice('Num site real, aqui começaria o checkout com pagamento por Pix ou cartão.')}
            className="mt-5 h-14 w-full bg-d-fg text-xs uppercase tracking-[0.25em] text-d-bg transition-opacity hover:opacity-90 disabled:opacity-40"
          >
            Finalizar compra
          </button>
        </div>
      </div>
    </div>
  );
}
