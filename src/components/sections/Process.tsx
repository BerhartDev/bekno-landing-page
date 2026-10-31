'use client';

import { useTranslations } from 'next-intl';
import Section from '@/components/ui/Section';
import { hasValue, SITE } from '@/lib/site';

type Step = {
  title: string;
  description: string;
};

interface ProcessProps {
  /** Namespace com title, intro, introWeeks e steps. As páginas de serviço podem passar o seu. */
  namespace?: string;
  id?: string;
}

/** Etapas do projeto, do primeiro contato ao site no ar. */
export default function Process({ namespace = 'process', id = 'process' }: ProcessProps) {
  const t = useTranslations(namespace);
  const steps = t.raw('steps') as Step[];
  const weeks = SITE.deadlinesWeeks.total;
  const intro = hasValue(weeks) ? t('introWeeks', { n: weeks }) : t('intro');

  return (
    <Section id={id} title={t('title')} intro={intro}>
      <ol className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((step, index) => (
          <li key={step.title} className="grid content-start gap-3 bg-bg px-6 py-8">
            <span className="font-mono text-sm text-muted">{String(index + 1).padStart(2, '0')}</span>
            <h3 className="text-xl font-semibold tracking-[-0.02em]">{step.title}</h3>
            <p className="text-sm text-muted">{step.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
