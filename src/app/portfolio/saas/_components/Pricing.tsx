'use client';

import { useState } from 'react';
import { showDemoNotice } from '@/components/demos/DemoNotice';

const PLANS = [
  {
    name: 'Essencial',
    monthly: 59,
    description: 'Para MEI e quem está começando a organizar o caixa.',
    features: ['1 conta bancária', 'Conciliação automática', 'Cobrança por Pix', 'Relatório mensal'],
  },
  {
    name: 'Negócio',
    monthly: 129,
    description: 'Para pequenas empresas com equipe e várias contas.',
    features: ['Até 5 contas bancárias', 'Boletos e Pix com lembrete', 'DRE e fluxo projetado', '3 usuários'],
    featured: true,
  },
  {
    name: 'Escala',
    monthly: 279,
    description: 'Para operações com mais volume e integrações.',
    features: ['Contas ilimitadas', 'Integração com ERP e e-commerce', 'Centro de custos', 'Suporte prioritário'],
  },
];

const brl = (value: number) =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });

export default function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <div>
      <div className="flex justify-center">
        <div role="group" aria-label="Período de cobrança" className="inline-flex rounded-full bg-d-surface p-1 ring-1 ring-white/10">
          {[
            { value: false, label: 'Mensal' },
            { value: true, label: 'Anual · 2 meses grátis' },
          ].map((option) => (
            <button
              key={option.label}
              type="button"
              aria-pressed={yearly === option.value}
              onClick={() => setYearly(option.value)}
              className={`h-11 rounded-full px-5 text-sm font-medium transition-colors ${
                yearly === option.value ? 'bg-d-fg text-d-bg' : 'text-d-muted hover:text-d-fg'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <ul className="mt-12 grid gap-6 lg:grid-cols-3">
        {PLANS.map((plan) => {
          const price = yearly ? Math.round((plan.monthly * 10) / 12) : plan.monthly;
          return (
            <li
              key={plan.name}
              className={`relative flex flex-col rounded-3xl p-8 ${
                plan.featured
                  ? 'bg-gradient-to-b from-d-accent/25 to-d-surface ring-2 ring-d-accent'
                  : 'bg-d-surface ring-1 ring-white/10'
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-8 rounded-full bg-d-accent px-3 py-1 text-xs font-semibold text-d-accent-fg">
                  Mais escolhido
                </span>
              )}
              <h3 className="font-display text-2xl font-semibold">{plan.name}</h3>
              <p className="mt-2 text-sm text-d-muted">{plan.description}</p>
              <p className="mt-8 flex items-baseline gap-1">
                <span className="font-display text-5xl font-bold tracking-tight">{brl(price)}</span>
                <span className="text-sm text-d-muted">/mês</span>
              </p>
              <p className="mt-1 h-5 text-xs text-d-muted">
                {yearly ? `${brl(plan.monthly * 10)} cobrados por ano` : 'Cancele quando quiser'}
              </p>
              <ul className="mt-8 grid gap-3 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="text-d-accent" aria-hidden="true">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => showDemoNotice(`Num site real, o botão levaria ao cadastro no plano ${plan.name}.`)}
                className={`mt-10 h-12 rounded-full text-sm font-semibold transition-transform hover:-translate-y-0.5 ${
                  plan.featured ? 'bg-d-accent text-d-accent-fg' : 'bg-white/10 text-d-fg hover:bg-white/15'
                }`}
              >
                Testar 14 dias grátis
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
