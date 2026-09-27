'use client';

import { useTranslations } from 'next-intl';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

export default function Plans() {
  const t = useTranslations('plans');
  const plans = t.raw('items') as Array<{
    name: string;
    service: string;
    description: string;
    price: string;
    features: string[];
    cta: string;
    popular?: boolean;
  }>;

  const choosePlan = (service: string) => {
    window.dispatchEvent(new CustomEvent('select-service', { detail: service }));
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section id="plans" title={t('title')} intro={t('subtitle')}>
      <div className="grid border border-line md:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`flex flex-col gap-8 border-line p-6 md:border-l md:p-8 md:first:border-l-0 ${plan.popular ? 'bg-surface' : ''} max-md:border-t max-md:first:border-t-0`}
          >
            <div className="grid gap-2">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-xl font-semibold tracking-[-0.02em]">{plan.name}</h3>
                {plan.popular && (
                  <span className="font-mono text-xs uppercase tracking-[0.04em] text-muted">{t('popular')}</span>
                )}
              </div>
              <p className="text-sm text-muted">{plan.description}</p>
              <p className="mt-2 font-mono text-sm">{plan.price}</p>
            </div>
            <ul className="grid flex-1 gap-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-sm">
                  <span className="font-mono text-muted" aria-hidden="true">+</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full" onClick={() => choosePlan(plan.service)}>
              {plan.cta}
            </Button>
          </article>
        ))}
      </div>
      <p className="mt-6 max-w-[68ch] text-sm text-muted">{t('note')}</p>
    </Section>
  );
}
