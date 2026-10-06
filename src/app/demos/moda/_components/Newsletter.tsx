'use client';

import type { FormEvent } from 'react';
import { showDemoNotice } from '@/components/demos/DemoNotice';

export default function Newsletter() {
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    showDemoNotice('Num site real, o e-mail entraria na lista e receberia o cupom de 10%.');
    event.currentTarget.reset();
  };

  return (
    <form onSubmit={submit} className="mt-8 flex max-w-md border-b border-d-fg">
      <label htmlFor="mare-email" className="sr-only">
        E-mail
      </label>
      <input
        id="mare-email"
        type="email"
        required
        placeholder="seu@email.com"
        className="h-12 min-w-0 flex-1 bg-transparent text-sm placeholder:text-d-muted focus:outline-none"
      />
      <button type="submit" className="h-12 px-2 text-xs uppercase tracking-[0.2em]">
        Assinar →
      </button>
    </form>
  );
}
