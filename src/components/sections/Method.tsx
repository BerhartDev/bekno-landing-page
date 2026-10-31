'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/lib/i18n/routing';
import Section from '@/components/ui/Section';
import { hasValue, SITE } from '@/lib/site';

type Step = {
  title: string;
  description: string;
};

// TODO [CONFIRMAR] a etapa 04 (Defesa) promete proteção contra invasões, cópia de segurança e
// acompanhamento para o site não sair do ar. Confirmar que isso está incluso em todo projeto.
export default function Method() {
  const t = useTranslations('method');
  const steps = t.raw('steps') as Step[];
  const locale = useLocale();
  // Só aparece com medição real (docs/medicoes-velocidade.md). Vírgula em PT/ES/FR, ponto em EN.
  const seconds = hasValue(SITE.loadTimeSeconds)
    ? new Intl.NumberFormat(locale, { maximumFractionDigits: 1 }).format(SITE.loadTimeSeconds)
    : '';

  return (
    <Section id="method" title={t('title')} intro={t('subtitle')}>
      <ol className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, index) => (
          <li key={step.title} className="grid content-start gap-3 bg-bg px-6 py-8">
            <span className="font-mono text-sm text-muted">{String(index + 1).padStart(2, '0')}</span>
            <h3 className="text-xl font-semibold tracking-[-0.02em]">{step.title}</h3>
            <p className="text-sm text-muted">{step.description}</p>
          </li>
        ))}
      </ol>
      {seconds && (
        <p className="mt-6 w-fit border border-line px-4 py-3 font-mono text-sm">{t('speedBadge', { s: seconds })}</p>
      )}
      <div className="mt-10">
        <Link href="/orcamento" className="cta">
          {t('cta')}
          <span className="arrow" aria-hidden="true">→</span>
        </Link>
      </div>
    </Section>
  );
}
