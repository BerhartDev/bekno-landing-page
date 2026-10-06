'use client';

import { useState } from 'react';
import { brl, PLANS, type PlanId } from '../_data';

const QUESTIONS: { q: string; options: { label: string; score: Record<PlanId, number> }[] }[] = [
  {
    q: 'Qual é o seu objetivo agora?',
    options: [
      { label: 'Ganhar força', score: { base: 2, forja: 1, total: 1 } },
      { label: 'Perder peso', score: { base: 0, forja: 2, total: 2 } },
      { label: 'Aprender a lutar', score: { base: 0, forja: 3, total: 1 } },
    ],
  },
  {
    q: 'Quantas vezes por semana você consegue vir?',
    options: [
      { label: '2 ou menos', score: { base: 2, forja: 0, total: 1 } },
      { label: '3 ou 4', score: { base: 1, forja: 2, total: 1 } },
      { label: '5 ou mais', score: { base: 0, forja: 2, total: 2 } },
    ],
  },
  {
    q: 'Você prefere treinar…',
    options: [
      { label: 'Sozinho', score: { base: 3, forja: 0, total: 0 } },
      { label: 'Em turma', score: { base: 0, forja: 3, total: 0 } },
      { label: 'Com treinador', score: { base: 0, forja: 0, total: 3 } },
    ],
  },
];

export default function Quiz() {
  const [answers, setAnswers] = useState<number[]>([]);
  const current = answers.length;
  const finished = current === QUESTIONS.length;

  const result = (() => {
    if (!finished) return null;
    const totals: Record<PlanId, number> = { base: 0, forja: 0, total: 0 };
    answers.forEach((choice, index) => {
      const score = QUESTIONS[index].options[choice].score;
      (Object.keys(totals) as PlanId[]).forEach((id) => (totals[id] += score[id]));
    });
    const best = (Object.keys(totals) as PlanId[]).reduce((a, b) => (totals[b] > totals[a] ? b : a));
    return PLANS.find((plan) => plan.id === best)!;
  })();

  return (
    <div className="border border-d-line bg-d-surface p-6 md:p-10">
      <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-d-muted">
        <span>Quiz · qual plano é pra você</span>
        <span>
          {Math.min(current + 1, QUESTIONS.length)}/{QUESTIONS.length}
        </span>
      </div>
      <div className="mt-3 h-1 bg-d-line">
        <div className="h-full bg-d-accent transition-all duration-300" style={{ width: `${(current / QUESTIONS.length) * 100}%` }} />
      </div>

      <div aria-live="polite" className="mt-10 min-h-[15rem]">
        {!finished ? (
          <fieldset>
            <legend className="font-display text-4xl uppercase leading-none md:text-5xl">{QUESTIONS[current].q}</legend>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {QUESTIONS[current].options.map((option, index) => (
                <button
                  key={option.label}
                  type="button"
                  onClick={() => setAnswers((list) => [...list, index])}
                  className="h-16 border border-d-line px-4 text-left font-semibold uppercase tracking-wide transition-colors hover:border-d-accent hover:bg-d-accent hover:text-d-accent-fg"
                >
                  {option.label}
                </button>
              ))}
            </div>
          </fieldset>
        ) : (
          result && (
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-d-accent">Seu plano</p>
              <p className="mt-3 font-display text-6xl uppercase leading-none md:text-7xl">{result.name}</p>
              <p className="mt-4 text-lg text-d-muted">
                {result.tagline} {brl(result.price)}/mês.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#planos"
                  className="inline-flex h-12 items-center bg-d-accent px-6 font-semibold uppercase tracking-wide text-d-accent-fg"
                >
                  Ver o plano
                </a>
                <button
                  type="button"
                  onClick={() => setAnswers([])}
                  className="h-12 border border-d-line px-6 font-semibold uppercase tracking-wide hover:border-d-fg"
                >
                  Refazer
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
