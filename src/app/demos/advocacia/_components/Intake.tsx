'use client';

import { useId, useState, type FormEvent } from 'react';
import { showDemoNotice } from '@/components/demos/DemoNotice';
import { AREAS } from '../_data';

export default function Intake() {
  const id = useId();
  const [who, setWho] = useState('empresa');

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    showDemoNotice('Num site real, a triagem chegaria ao advogado da área, que retornaria em até 24 horas úteis.');
  };

  const field =
    'h-12 w-full border-b border-d-line bg-transparent px-0 text-d-fg placeholder:text-d-muted/70 focus:border-d-accent focus:outline-none';

  return (
    <form onSubmit={submit} className="grid gap-7">
      <fieldset>
        <legend className="text-xs font-semibold uppercase tracking-[0.2em] text-d-muted">Você é</legend>
        <div className="mt-3 grid grid-cols-2 border border-d-line">
          {[
            { value: 'empresa', label: 'Empresa' },
            { value: 'pessoa', label: 'Pessoa física' },
          ].map((option, index) => (
            <label key={option.value} className={`cursor-pointer ${index ? 'border-l border-d-line' : ''}`}>
              <input
                type="radio"
                name="who"
                value={option.value}
                checked={who === option.value}
                onChange={() => setWho(option.value)}
                className="peer sr-only"
              />
              <span className="grid h-12 place-items-center text-sm transition-colors peer-checked:bg-d-accent peer-checked:text-d-accent-fg peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-d-accent">
                {option.label}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-7 sm:grid-cols-2">
        <label className="grid gap-1" htmlFor={`${id}-name`}>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-d-muted">Nome</span>
          <input id={`${id}-name`} required autoComplete="name" className={field} placeholder="Nome completo" />
        </label>
        <label className="grid gap-1" htmlFor={`${id}-email`}>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-d-muted">E-mail</span>
          <input id={`${id}-email`} type="email" required autoComplete="email" className={field} placeholder="voce@empresa.com" />
        </label>
      </div>

      <label className="grid gap-1" htmlFor={`${id}-area`}>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-d-muted">Área do assunto</span>
        <select id={`${id}-area`} required defaultValue="" className={`${field} [&>option]:bg-d-bg`}>
          <option value="" disabled>
            Selecione
          </option>
          {AREAS.map((area) => (
            <option key={area.id} value={area.id}>
              {area.name}
            </option>
          ))}
          <option value="outro">Não sei dizer</option>
        </select>
      </label>

      <label className="grid gap-1" htmlFor={`${id}-case`}>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-d-muted">Resumo do caso</span>
        <textarea
          id={`${id}-case`}
          required
          minLength={20}
          rows={4}
          className="w-full resize-y border-b border-d-line bg-transparent py-3 text-d-fg placeholder:text-d-muted/70 focus:border-d-accent focus:outline-none"
          placeholder="Sem detalhes sigilosos. Só o suficiente para direcionarmos ao advogado certo."
        />
      </label>

      <label className="flex items-start gap-3 text-sm text-d-muted">
        <input type="checkbox" required className="mt-1 h-4 w-4 accent-d-accent" />
        Concordo com o uso destes dados apenas para o retorno do escritório, conforme a LGPD.
      </label>

      <button
        type="submit"
        className="h-14 bg-d-accent font-semibold uppercase tracking-[0.2em] text-d-accent-fg transition-opacity hover:opacity-90"
      >
        Enviar para triagem
      </button>
    </form>
  );
}
