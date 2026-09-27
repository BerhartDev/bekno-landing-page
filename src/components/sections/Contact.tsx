'use client';

import { useTranslations } from 'next-intl';
import ContactForm from '@/components/ContactForm';
import Section from '@/components/ui/Section';

export default function Contact() {
  const t = useTranslations('contact');

  const contactInfo = [
    { label: t('emailLabel'), value: t('email'), href: `mailto:${t('email')}` },
    { label: t('phoneLabel'), value: t('phone'), href: `tel:${t('phone').replace(/\s/g, '')}` },
    { label: t('locationLabel'), value: t('location'), href: null as string | null },
  ];

  return (
    <Section id="contact" title={t('title')} intro={t('subtitle')}>
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-8 max-w-[42ch]">{t('after')}</p>
          <ul className="border-b border-line">
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
          <p className="mt-6 max-w-[48ch] text-sm text-muted">{t('response')}</p>
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}
