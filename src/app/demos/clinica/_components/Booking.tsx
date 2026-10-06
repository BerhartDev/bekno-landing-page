'use client';

import { useEffect, useState } from 'react';
import { showDemoNotice } from '@/components/demos/DemoNotice';

const TREATMENTS = [
  'Avaliação completa',
  'Limpeza e check-up',
  'Clareamento',
  'Lentes de contato dental',
  'Alinhadores invisíveis',
  'Implantes',
];

const TIMES = ['08:30', '09:30', '10:30', '14:00', '15:00', '16:30', '18:00'];

type Day = { key: string; weekday: string; date: string; label: string };

/** Próximos dias úteis + sábado. Calculado no navegador para não fixar a data do build. */
function nextDays(count: number): Day[] {
  const days: Day[] = [];
  const cursor = new Date();
  while (days.length < count) {
    cursor.setDate(cursor.getDate() + 1);
    if (cursor.getDay() === 0) continue;
    days.push({
      key: cursor.toISOString().slice(0, 10),
      weekday: cursor.toLocaleDateString('pt-BR', { weekday: 'short' }).replace('.', ''),
      date: cursor.toLocaleDateString('pt-BR', { day: '2-digit' }),
      label: cursor.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' }),
    });
  }
  return days;
}

const STEPS = ['Tratamento', 'Dia', 'Horário'];

export default function Booking() {
  const [days, setDays] = useState<Day[]>([]);
  const [step, setStep] = useState(0);
  const [treatment, setTreatment] = useState('');
  const [day, setDay] = useState<Day | null>(null);
  const [time, setTime] = useState('');

  useEffect(() => setDays(nextDays(6)), []);

  const done = Boolean(treatment && day && time);
  const option = (active: boolean) =>
    `rounded-2xl border px-4 py-3 text-left text-sm transition-colors ${
      active ? 'border-d-accent bg-d-accent text-d-accent-fg' : 'border-d-line bg-d-bg hover:border-d-accent'
    }`;

  return (
    <div className="rounded-[2rem] bg-d-bg p-6 shadow-xl shadow-d-fg/5 ring-1 ring-d-line md:p-8">
      <ol className="flex gap-2">
        {STEPS.map((label, index) => (
          <li key={label} className="flex-1">
            <button
              type="button"
              disabled={index > 0 && !(index === 1 ? treatment : day)}
              onClick={() => setStep(index)}
              aria-current={step === index ? 'step' : undefined}
              className="w-full text-left disabled:cursor-not-allowed"
            >
              <span className={`block h-1 rounded-full ${index <= step ? 'bg-d-accent' : 'bg-d-line'}`} />
              <span className={`mt-2 block text-xs font-semibold ${index === step ? 'text-d-fg' : 'text-d-muted'}`}>
                {index + 1}. {label}
              </span>
            </button>
          </li>
        ))}
      </ol>

      <div className="mt-8 min-h-[16rem]">
        {step === 0 && (
          <fieldset>
            <legend className="font-display text-2xl">O que você precisa?</legend>
            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              {TREATMENTS.map((item) => (
                <button
                  key={item}
                  type="button"
                  aria-pressed={treatment === item}
                  className={option(treatment === item)}
                  onClick={() => {
                    setTreatment(item);
                    setStep(1);
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          </fieldset>
        )}

        {step === 1 && (
          <fieldset>
            <legend className="font-display text-2xl">Escolha o dia</legend>
            <div className="mt-5 grid grid-cols-3 gap-2 sm:grid-cols-6">
              {days.map((item) => (
                <button
                  key={item.key}
                  type="button"
                  aria-pressed={day?.key === item.key}
                  aria-label={item.label}
                  className={`${option(day?.key === item.key)} text-center`}
                  onClick={() => {
                    setDay(item);
                    setStep(2);
                  }}
                >
                  <span className="block text-xs capitalize opacity-80">{item.weekday}</span>
                  <span className="mt-1 block font-display text-2xl">{item.date}</span>
                </button>
              ))}
            </div>
          </fieldset>
        )}

        {step === 2 && (
          <fieldset>
            <legend className="font-display text-2xl">Qual horário?</legend>
            <div className="mt-5 flex flex-wrap gap-2">
              {TIMES.map((item) => (
                <button
                  key={item}
                  type="button"
                  aria-pressed={time === item}
                  className={`${option(time === item)} rounded-full px-5`}
                  onClick={() => setTime(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </fieldset>
        )}
      </div>

      <div className="mt-6 rounded-2xl bg-d-surface p-5 text-sm" aria-live="polite">
        <p className="font-semibold">Resumo</p>
        <p className="mt-1 text-d-muted">
          {treatment || 'Escolha um tratamento'}
          {day && <> · <span className="inline-block first-letter:uppercase">{day.label}</span></>}
          {time && <> · {time}</>}
        </p>
      </div>
      <button
        type="button"
        disabled={!done}
        onClick={() =>
          showDemoNotice('Num site real, o horário ficaria reservado e a confirmação chegaria por WhatsApp.')
        }
        className="mt-4 h-14 w-full rounded-full bg-d-accent font-semibold text-d-accent-fg transition-opacity disabled:opacity-40"
      >
        Confirmar agendamento
      </button>
    </div>
  );
}
