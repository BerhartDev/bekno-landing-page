export type PlanId = 'base' | 'forja' | 'total';

export const PLANS: { id: PlanId; name: string; price: number; tagline: string; features: string[] }[] = [
  {
    id: 'base',
    name: 'Base',
    price: 129,
    tagline: 'Musculação livre, no seu horário.',
    features: ['Sala de musculação', 'Avaliação física trimestral', 'App com treino'],
  },
  {
    id: 'forja',
    name: 'Forja',
    price: 219,
    tagline: 'Aulas em grupo ilimitadas.',
    features: ['Tudo do Base', 'Boxe, funcional e LPO', 'Reserva de vaga pelo app', 'Plano alimentar básico'],
  },
  {
    id: 'total',
    name: 'Forja+',
    price: 389,
    tagline: 'Com treinador ao seu lado.',
    features: ['Tudo do Forja', '2 sessões de personal por semana', 'Avaliação mensal', 'Nutricionista'],
  },
];

export const brl = (value: number) =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
