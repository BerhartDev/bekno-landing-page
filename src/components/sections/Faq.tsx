import { useTranslations } from 'next-intl';
import Section from '@/components/ui/Section';

export type FaqGroup = {
  title: string;
  items: { q: string; a: string }[];
};

// TODO [CONFIRMAR] as duas respostas do grupo "O site é seu" (domínio no nome do cliente e
// entrega de arquivos e acessos) precisam ser confirmadas antes de ir ao ar.
// Perguntas que dependem de dados ainda pendentes estão em docs/faq-pendentes.md.

/** Perguntas frequentes em acordeão nativo (<details>): abre sem JS e funciona com teclado. */
export default function Faq({ id }: { id?: string }) {
  const t = useTranslations('faq');
  const groups = t.raw('groups') as FaqGroup[];

  return (
    <Section id={id} title={t('title')} intro={t('subtitle')}>
      <div className="grid gap-10">
        {groups.map((group) => (
          <div key={group.title}>
            <h3 className="field-label">{group.title}</h3>
            <div className="border-b border-line">
              {group.items.map((item) => (
                <details key={item.q} className="group border-t border-line">
                  <summary className="flex min-h-[44px] cursor-pointer list-none items-start justify-between gap-6 py-4 text-lg font-semibold leading-7 tracking-[-0.01em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg [&::-webkit-details-marker]:hidden">
                    {item.q}
                    <span className="font-mono text-base font-normal leading-7 text-muted" aria-hidden="true">
                      <span className="group-open:hidden">+</span>
                      <span className="hidden group-open:inline">–</span>
                    </span>
                  </summary>
                  <p className="max-w-[68ch] pb-6 text-muted">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
