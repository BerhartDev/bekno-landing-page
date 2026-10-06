import { useTranslations } from 'next-intl';
import QuoteForm from '@/components/QuoteForm';
import JsonLd from '@/components/seo/JsonLd';
import { setRequestLocale } from 'next-intl/server';
import { quoteJsonLd } from '@/lib/seo';

function QuoteContent() {
  const t = useTranslations('quote');
  const benefits = t.raw('benefits') as string[];

  const contactInfo = [
    { label: t('phoneLabel'), value: t('phone'), href: `tel:${t('phone').replace(/\s/g, '')}` },
    { label: t('locationLabel'), value: t('location'), href: null as string | null },
  ];

  return (
    <section className="grid gap-12 border-t border-line py-16 md:py-24 lg:grid-cols-2 lg:gap-16">
      <div className="grid content-start gap-6">
        <p className="font-mono text-sm uppercase tracking-[0.04em] text-muted">{t('eyebrow')}</p>
        <h1 className="max-w-[16ch] text-[clamp(2.25rem,1.5rem+3.4vw,3.75rem)] font-bold leading-[1.04] tracking-[-0.035em]">
          {t('title')}
        </h1>
        <p className="max-w-[44ch] text-lg leading-relaxed text-muted">{t('subtitle')}</p>

        <div className="mt-4">
          <h2 className="field-label">{t('benefitsTitle')}</h2>
          <ul className="border-b border-line">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex gap-4 border-t border-line py-4">
                <span className="font-mono text-sm leading-7 text-muted" aria-hidden="true">
                  ✓
                </span>
                <span className="leading-7">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <ul className="mt-4 border-b border-line">
          {contactInfo.map((item) => (
            <li key={item.label} className="grid gap-1 border-t border-line py-4 md:grid-cols-[8rem_1fr] md:items-baseline">
              <span className="font-mono text-sm text-muted">{item.label}</span>
              {item.href ? (
                <a href={item.href} className="link inline-flex w-fit items-baseline gap-3 text-xl tracking-[-0.01em]">
                  {item.value}
                  <span className="font-mono text-base" aria-hidden="true">→</span>
                </a>
              ) : (
                <span className="text-xl tracking-[-0.01em]">{item.value}</span>
              )}
            </li>
          ))}
        </ul>
        <p className="max-w-[48ch] text-sm text-muted">{t('response')}</p>
      </div>

      <div className="border border-line p-6 md:p-8">
        <QuoteForm />
      </div>
    </section>
  );
}

export default async function QuoteView({ locale }: { locale: string }) {
  setRequestLocale(locale);
  const jsonLd = await quoteJsonLd(locale);

  return (
    <>
      <JsonLd data={jsonLd} />
      <QuoteContent />
    </>
  );
}
