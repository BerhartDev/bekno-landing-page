'use client';

import { useTranslations } from 'next-intl';
import Section from '@/components/ui/Section';

type ChecklistItem = {
  title: string;
  description?: string;
};

type ChecklistNamespace = 'exclusivity' | 'commitment' | 'differentiators';

const COLUMNS = {
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-2 lg:grid-cols-3',
  4: 'sm:grid-cols-2 lg:grid-cols-4',
} as const;

interface ChecklistSectionProps {
  namespace: ChecklistNamespace;
  columns?: keyof typeof COLUMNS;
}

/** Lista de itens com marcador, usada por Exclusividade, Compromisso e Diferenciais. */
export default function ChecklistSection({ namespace, columns = 3 }: ChecklistSectionProps) {
  const t = useTranslations(namespace);
  const items = t.raw('items') as ChecklistItem[];

  return (
    <Section title={t('title')} intro={t('subtitle')}>
      <ul className={`grid border-l border-t border-line ${COLUMNS[columns]}`}>
        {items.map((item) => (
          <li key={item.title} className="flex gap-4 border-b border-r border-line px-6 py-6 md:py-8">
            <span className="font-mono text-sm leading-7 text-muted" aria-hidden="true">
              ✓
            </span>
            <div className="grid gap-2">
              <h3 className="text-lg font-semibold leading-7 tracking-[-0.02em]">{item.title}</h3>
              {item.description && <p className="text-sm text-muted">{item.description}</p>}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
