'use client';

import { useEffect, useId, useRef, useState, type FormEvent, type ReactNode } from 'react';
import { useTranslations } from 'next-intl';
import Button from '@/components/ui/Button';
import {
  fieldErrors,
  isService,
  overLimit,
  recordSend,
  SERVICES,
  stripLinks,
  tooFast,
  type FieldError,
  type FieldErrors,
  type Service,
} from '@/lib/contact';

const ENDPOINT = 'https://api.web3forms.com/submit';
const WHATSAPP = '5521973692691';
const openedAt = Date.now();

type Notice = 'fast' | 'limit' | 'links' | 'sent' | 'sentLinks' | 'error';
type FieldName = 'name' | 'business' | 'email' | 'message' | 'service';

function fill(template: string, values: Record<string, string>): string {
  return template.replace(/%(name|business|email|service|message)%/g, (_, key: string) => values[key] ?? '');
}

function succeeded(value: unknown): boolean {
  return typeof value === 'object' && value !== null && 'success' in value && value.success === true;
}

const ContactForm = () => {
  const t = useTranslations('contact.form');
  const baseId = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [notice, setNotice] = useState<Notice | null>(null);
  const [service, setService] = useState('');

  useEffect(() => {
    const onSelect = (event: Event) => {
      const value = (event as CustomEvent<string>).detail;
      if (isService(value)) setService(value);
    };

    window.addEventListener('select-service', onSelect);
    return () => window.removeEventListener('select-service', onSelect);
  }, []);

  function messageFor(code: FieldError): string {
    const map: Record<FieldError, string> = {
      name: t('errName'),
      business: t('errBusiness'),
      email: t('errEmail'),
      emailDomain: t('errEmailDomain'),
      message: t('errMessage'),
      messageLong: t('errMessageLong'),
      service: t('errService'),
    };
    return map[code];
  }

  function read(form: HTMLFormElement) {
    const data = new FormData(form);
    return {
      name: String(data.get('name') ?? '').trim(),
      business: String(data.get('business') ?? '').trim(),
      email: String(data.get('email') ?? '').trim(),
      message: String(data.get('message') ?? '').trim(),
      service: String(data.get('services') ?? ''),
      botcheck: data.get('botcheck') ? 'yes' : '',
    };
  }

  function prepare(form: HTMLFormElement) {
    const draft = read(form);
    const next = fieldErrors(draft);
    setErrors(next);
    if (Object.keys(next).length > 0 || !isService(draft.service)) {
      setNotice(null);
      return null;
    }
    if (tooFast(openedAt)) {
      setNotice('fast');
      return null;
    }
    if (overLimit()) {
      setNotice('limit');
      return null;
    }
    const { text: message, stripped } = stripLinks(draft.message);
    const serviceLabel = t(`servicesOptions.${draft.service as Service}`);
    recordSend();
    let text = fill(t('template'), {
      name: draft.name,
      business: draft.business,
      email: draft.email,
      service: serviceLabel,
      message,
    });
    if (!draft.business) text = text.replace(/\n[^:\n]+:\s*(?=\n)/, '');
    return {
      name: draft.name,
      email: draft.email,
      serviceLabel,
      botcheck: draft.botcheck,
      stripped,
      text,
    };
  }

  function onWhatsApp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const ready = prepare(event.currentTarget);
    if (!ready) return;
    setNotice(ready.stripped ? 'links' : null);
    const popup = window.open(
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(ready.text)}`,
      '_blank',
      'noopener,noreferrer',
    );
    if (popup) popup.opener = null;
    else setNotice('error');
  }

  async function onEmail() {
    const form = formRef.current;
    if (!form || !accessKey) return;
    const ready = prepare(form);
    if (!ready) return;
    setSending(true);
    setNotice(null);
    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `${t('subject')} · ${ready.serviceLabel}`,
          name: ready.name,
          email: ready.email,
          message: ready.text,
          botcheck: ready.botcheck,
        }),
      });
      setNotice(succeeded(await response.json()) ? (ready.stripped ? 'sentLinks' : 'sent') : 'error');
    } catch {
      setNotice('error');
    } finally {
      setSending(false);
    }
  }

  const noticeText =
    notice === 'fast'
      ? t('errFast')
      : notice === 'limit'
        ? t('errLimit')
        : notice === 'links'
          ? t('linksRemoved')
          : notice === 'sent'
            ? t('sent')
            : notice === 'sentLinks'
              ? `${t('sent')} ${t('linksRemoved')}`
              : notice === 'error'
                ? t('error')
                : null;

  function field(name: FieldName, label: string, control: ReactNode) {
    const code = errors[name];
    const errorId = `${baseId}-${name}-error`;
    return (
      <div key={name}>
        <label className="field-label" htmlFor={`${baseId}-${name}`}>
          {label}
        </label>
        {control}
        {code ? (
          <span className="mt-2 block text-sm text-muted" id={errorId}>
            {messageFor(code)}
          </span>
        ) : null}
      </div>
    );
  }

  return (
    <form ref={formRef} className="grid gap-5" onSubmit={onWhatsApp} aria-busy={sending} noValidate>
      <div>
        <h3 className="text-xl font-semibold tracking-[-0.02em]">{t('title')}</h3>
        <p className="mt-2 text-sm text-muted">{t('intro')}</p>
      </div>

      <div className="hidden" aria-hidden="true">
        <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {field(
          'name',
          t('name'),
          <input
            className="field"
            id={`${baseId}-name`}
            name="name"
            type="text"
            required
            autoComplete="name"
            maxLength={80}
            placeholder={t('namePlaceholder')}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? `${baseId}-name-error` : undefined}
          />,
        )}
        {field(
          'business',
          t('business'),
          <input
            className="field"
            id={`${baseId}-business`}
            name="business"
            type="text"
            autoComplete="organization"
            maxLength={80}
            placeholder={t('businessPlaceholder')}
            aria-invalid={errors.business ? true : undefined}
            aria-describedby={errors.business ? `${baseId}-business-error` : undefined}
          />,
        )}
      </div>

      {field(
        'email',
        t('email'),
        <input
          className="field"
          id={`${baseId}-email`}
          name="email"
          type="text"
          inputMode="email"
          required
          autoComplete="email"
          maxLength={254}
          spellCheck={false}
          placeholder={t('emailPlaceholder')}
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? `${baseId}-email-error` : undefined}
        />,
      )}

      {field(
        'service',
        t('services'),
        <select
          className="field"
          id={`${baseId}-service`}
          name="services"
          required
          value={service}
          onChange={(event) => setService(event.target.value)}
          aria-invalid={errors.service ? true : undefined}
          aria-describedby={errors.service ? `${baseId}-service-error` : undefined}
        >
          <option value="" disabled>
            {t('servicesPlaceholder')}
          </option>
          {SERVICES.map((option) => (
            <option key={option} value={option}>
              {t(`servicesOptions.${option}`)}
            </option>
          ))}
        </select>,
      )}

      {field(
        'message',
        t('message'),
        <textarea
          className="field resize-y"
          id={`${baseId}-message`}
          name="message"
          required
          rows={4}
          maxLength={2000}
          placeholder={t('messagePlaceholder')}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? `${baseId}-message-error` : undefined}
        />,
      )}

      <div className="grid gap-3">
        <Button type="submit" className="w-full" disabled={sending}>
          {t('whatsapp')}
        </Button>
        <Button type="button" className="w-full" disabled={sending || !accessKey} onClick={() => void onEmail()}>
          {sending ? t('sending') : t('emailSubmit')}
        </Button>
      </div>

      <p className="text-sm text-muted" role="status">
        {noticeText}
      </p>
    </form>
  );
};

export default ContactForm;
