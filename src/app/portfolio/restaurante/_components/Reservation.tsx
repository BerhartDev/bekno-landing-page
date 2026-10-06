'use client';

import { useState, type FormEvent } from 'react';
import { showDemoNotice } from '@/components/demos/DemoNotice';

const TIMES = ['19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'];

export default function Reservation() {
  const [people, setPeople] = useState(2);
  const [time, setTime] = useState('20:00');

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    showDemoNotice(`Mesa para ${people} às ${time}: num site real, a reserva entraria na agenda do restaurante.`);
  };

  const input =
    'h-12 w-full rounded-xl border border-d-line bg-d-bg px-4 text-d-fg placeholder:text-d-muted/70 focus:border-d-accent focus:outline-none';

  return (
    <form onSubmit={submit} className="grid gap-5 rounded-3xl bg-d-surface p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm">
          <span className="text-d-muted">Nome</span>
          <input required name="name" autoComplete="name" className={input} placeholder="Seu nome" />
        </label>
        <label className="grid gap-2 text-sm">
          <span className="text-d-muted">Data</span>
          <input required name="date" type="date" className={`${input} [color-scheme:dark]`} />
        </label>
      </div>

      <fieldset className="grid gap-2 text-sm">
        <legend className="mb-2 text-d-muted">Pessoas</legend>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="grid h-12 w-12 place-items-center rounded-full border border-d-line text-xl"
            onClick={() => setPeople((value) => Math.max(1, value - 1))}
            aria-label="Menos uma pessoa"
          >
            −
          </button>
          <output className="w-10 text-center font-display text-3xl" aria-live="polite">
            {people}
          </output>
          <button
            type="button"
            className="grid h-12 w-12 place-items-center rounded-full border border-d-line text-xl"
            onClick={() => setPeople((value) => Math.min(12, value + 1))}
            aria-label="Mais uma pessoa"
          >
            +
          </button>
        </div>
      </fieldset>

      <fieldset className="text-sm">
        <legend className="mb-2 text-d-muted">Horário</legend>
        <div className="flex flex-wrap gap-2">
          {TIMES.map((slot) => (
            <label key={slot} className="cursor-pointer">
              <input
                type="radio"
                name="time"
                value={slot}
                checked={time === slot}
                onChange={() => setTime(slot)}
                className="peer sr-only"
              />
              <span className="inline-flex h-11 items-center rounded-full border border-d-line px-4 transition-colors peer-checked:border-d-accent peer-checked:bg-d-accent peer-checked:text-d-accent-fg peer-focus-visible:ring-2 peer-focus-visible:ring-d-accent">
                {slot}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <button
        type="submit"
        className="mt-2 h-14 rounded-full bg-d-accent font-semibold text-d-accent-fg transition-transform hover:-translate-y-0.5"
      >
        Confirmar reserva
      </button>
    </form>
  );
}
