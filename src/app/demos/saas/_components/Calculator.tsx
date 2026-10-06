'use client';

import { useId, useState } from 'react';

const brl = (value: number) =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });

/** Estimativa ilustrativa: o Fluxo automatiza ~70% do tempo gasto com rotinas financeiras. */
const AUTOMATED_SHARE = 0.7;

export default function Calculator() {
  const hoursId = useId();
  const costId = useId();
  const [hours, setHours] = useState(8);
  const [cost, setCost] = useState(60);

  const hoursSaved = Math.round(hours * 4.3 * AUTOMATED_SHARE);
  const moneySaved = hoursSaved * cost * 12;

  return (
    <div className="grid gap-8 rounded-3xl border border-white/10 bg-d-surface p-6 md:grid-cols-2 md:p-10">
      <div className="grid content-start gap-8">
        <div>
          <div className="flex items-baseline justify-between">
            <label htmlFor={hoursId} className="text-sm text-d-muted">
              Horas por semana com planilhas e conciliação
            </label>
            <output htmlFor={hoursId} className="font-display text-2xl font-semibold">
              {hours}h
            </output>
          </div>
          <input
            id={hoursId}
            type="range"
            min={1}
            max={30}
            value={hours}
            onChange={(event) => setHours(Number(event.target.value))}
            className="mt-4 h-2 w-full cursor-pointer accent-d-accent"
          />
        </div>
        <div>
          <div className="flex items-baseline justify-between">
            <label htmlFor={costId} className="text-sm text-d-muted">
              Custo da hora de quem faz isso
            </label>
            <output htmlFor={costId} className="font-display text-2xl font-semibold">
              {brl(cost)}
            </output>
          </div>
          <input
            id={costId}
            type="range"
            min={20}
            max={250}
            step={5}
            value={cost}
            onChange={(event) => setCost(Number(event.target.value))}
            className="mt-4 h-2 w-full cursor-pointer accent-d-accent"
          />
        </div>
      </div>
      <div className="flex flex-col justify-between gap-6 rounded-2xl bg-gradient-to-br from-d-accent to-cyan-300 p-6 text-d-accent-fg md:p-8">
        <p className="text-sm font-medium opacity-80">Com o Fluxo, sua empresa recupera</p>
        <div aria-live="polite">
          <p className="font-display text-5xl font-bold tracking-tight md:text-6xl">{hoursSaved}h</p>
          <p className="mt-1 text-sm font-medium opacity-80">por mês</p>
          <p className="mt-6 font-display text-3xl font-bold tracking-tight">{brl(moneySaved)}</p>
          <p className="mt-1 text-sm font-medium opacity-80">por ano em tempo de equipe</p>
        </div>
        <p className="text-xs opacity-70">Estimativa ilustrativa, considerando 70% das rotinas automatizadas.</p>
      </div>
    </div>
  );
}
