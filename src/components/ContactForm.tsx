'use client';

import React, { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import Button from '@/components/ui/Button';

const SERVICES = ['website', 'cms', 'consult', 'marketing', 'ecommerce'] as const;

const ContactForm = () => {
  const t = useTranslations('contact.form');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [service, setService] = useState('');

  useEffect(() => {
    const onSelect = (event: Event) => {
      const value = (event as CustomEvent<string>).detail;
      if (SERVICES.includes(value as (typeof SERVICES)[number])) {
        setService(value);
      }
    };

    window.addEventListener('select-service', onSelect);
    return () => window.removeEventListener('select-service', onSelect);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);

    try {
      await fetch('https://formspree.io/f/mvgagpwg', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
        mode: 'no-cors',
      });

      setStatus('success');
      setMessage(t('success'));
      setService('');
      e.currentTarget.reset();
    } catch (error) {
      console.error('Erro no envio via JavaScript:', error);
      setStatus('error');
      return true;
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      action="https://formspree.io/f/mvgagpwg"
      method="POST"
      className="grid gap-5"
    >
      <div>
        <h3 className="text-xl font-semibold tracking-[-0.02em]">{t('title')}</h3>
        <p className="mt-2 text-sm text-muted">{t('intro')}</p>
      </div>

      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="field-label">{t('name')}</label>
          <input id="name" name="name" type="text" required className="field" placeholder={t('namePlaceholder')} />
        </div>
        <div>
          <label htmlFor="business" className="field-label">{t('business')}</label>
          <input id="business" name="business" type="text" required className="field" placeholder={t('businessPlaceholder')} />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="field-label">{t('email')}</label>
        <input id="email" name="email" type="email" required className="field" placeholder={t('emailPlaceholder')} />
      </div>

      <div>
        <label htmlFor="service-interest" className="field-label">{t('services')}</label>
        <select
          id="service-interest"
          name="services"
          required
          className="field"
          value={service}
          onChange={(event) => setService(event.target.value)}
        >
          <option value="" disabled>{t('servicesPlaceholder')}</option>
          {SERVICES.map((option) => (
            <option key={option} value={option}>{t(`servicesOptions.${option}`)}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="field-label">{t('message')}</label>
        <textarea id="message" name="message" rows={4} required className="field resize-y" placeholder={t('messagePlaceholder')} />
      </div>

      {message && (
        <p className="border border-line px-4 py-3 text-sm">{message}</p>
      )}

      <Button type="submit" className="w-full" disabled={status === 'loading'}>
        {status === 'loading' ? t('submitting') : t('submit')}
      </Button>
    </form>
  );
};

export default ContactForm;
