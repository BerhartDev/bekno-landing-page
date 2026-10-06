'use client';

import { useEffect, useState } from 'react';

const EVENT = 'demo-notice';

/** Chamado pelas ações que, num site real, enviariam algo (pedido, reserva, compra). */
export function showDemoNotice(message: string) {
  window.dispatchEvent(new CustomEvent<string>(EVENT, { detail: message }));
}

export default function DemoNotice() {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    const onNotice = (event: Event) => {
      setMessage((event as CustomEvent<string>).detail);
      clearTimeout(timer);
      timer = setTimeout(() => setMessage(null), 6000);
    };
    window.addEventListener(EVENT, onNotice);
    return () => {
      window.removeEventListener(EVENT, onNotice);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      role="status"
      aria-live="polite"
      className="pointer-events-none fixed inset-x-4 bottom-4 z-[60] flex justify-center"
    >
      {message && (
        <div className="pointer-events-auto flex max-w-md items-start gap-3 rounded-lg bg-neutral-950 px-4 py-3 font-sans text-sm text-neutral-100 shadow-2xl ring-1 ring-white/10">
          <span className="mt-0.5 shrink-0 rounded bg-white px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-neutral-950">
            Demo
          </span>
          <p className="flex-1">{message}</p>
          <button
            type="button"
            onClick={() => setMessage(null)}
            className="-m-1 p-1 text-neutral-400 hover:text-white"
            aria-label="Fechar aviso"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
