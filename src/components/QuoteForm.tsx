'use client';

import { useEffect, useId, useRef, useState, type FormEvent, type ReactNode } from 'react';
import { useTranslations } from 'next-intl';
import Button from '@/components/ui/Button';
import {
  fieldErrors,
  isSiteType,
  overLimit,
  recordSend,
  SEGMENTS,
  SITE_TYPES,
  stripLinks,
  tooFast,
  type FieldError,
  type FieldErrors,
  type FieldName,
  type Segment,
  type SiteType,
} from '@/lib/contact';

const ENDPOINT = 'https://api.web3forms.com/submit';
const WHATSAPP = '5521973692691';
const openedAt = Date.now();

type Notice = 'fast' | 'limit' | 'links' | 'sent' | 'sentLinks' | 'error';

function fill(template: string, values: Record<string, string>): string {
  return template.replace(/%(name|email|phone|segment|siteType|message)%/g, (_, key: string) => values[key] ?? '');
}

function succeeded(value: unknown): boolean {
  return typeof value === 'object' && value !== null && 'success' in value && value.success === true;
}

const QuoteForm = () => {
  const t = useTranslations('quote.form');
  const baseId = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [notice, setNotice] = useState<Notice | null>(null);
  const [siteType, setSiteType] = useState('');

  // Os cards de "Tipos de site" chegam com ?tipo=; lido no navegador para a página seguir estática.
  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get('tipo');
    if (isSiteType(requested)) setSiteType(requested);
  }, []);

  function messageFor(code: FieldError): string {
    const map: Record<FieldError, string> = {
      name: t('errName'),
      email: t('errEmail'),
      emailDomain: t('errEmailDomain'),
      phone: t('errPhone'),
      segment: t('errSegment'),
      siteType: t('errSiteType'),
      message: t('errMessage'),
      messageLong: t('errMessageLong'),
    };
    return map[code];
  }

  function read(form: HTMLFormElement) {
    const data = new FormData(form);
    return {
      name: String(data.get('name') ?? '').trim(),
      email: String(data.get('email') ?? '').trim(),
      phone: String(data.get('phone') ?? '').trim(),
      segment: String(data.get('segment') ?? ''),
      siteType: String(data.get('siteType') ?? ''),
      message: String(data.get('message') ?? '').trim(),
      botcheck: data.get('botcheck') ? 'yes' : '',
    };
  }

  function prepare(form: HTMLFormElement) {
    const draft = read(form);
    const next = fieldErrors(draft);
    setErrors(next);
    if (Object.keys(next).length > 0) {
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
    const siteTypeLabel = t(`siteTypeOptions.${draft.siteType as SiteType}`);
    recordSend();
    const text = fill(t('template'), {
      name: draft.name,
      email: draft.email,
      phone: draft.phone,
      segment: t(`segmentOptions.${draft.segment as Segment}`),
      siteType: siteTypeLabel,
      message,
    });
    return {
      name: draft.name,
      email: draft.email,
      siteTypeLabel,
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
          subject: `${t('subject')} · ${ready.siteTypeLabel}`,
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

  const describedBy = (name: FieldName) => (errors[name] ? `${baseId}-${name}-error` : undefined);

  function errorText(name: FieldName) {
    const code = errors[name];
    return code ? (
      <span className="mt-2 block text-sm text-muted" id={`${baseId}-${name}-error`}>
        {messageFor(code)}
      </span>
    ) : null;
  }

  function field(name: FieldName, label: string, control: ReactNode) {
    return (
      <div key={name}>
        <label className="field-label" htmlFor={`${baseId}-${name}`}>
          {label}
        </label>
        {control}
        {errorText(name)}
      </div>
    );
  }

  return (
    <form ref={formRef} className="grid gap-5" onSubmit={onWhatsApp} aria-busy={sending} noValidate>
      <div>
        <h2 className="text-xl font-semibold tracking-[-0.02em]">{t('title')}</h2>
        <p className="mt-2 text-sm text-muted">{t('intro')}</p>
      </div>

      <div className="hidden" aria-hidden="true">
        <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" />
      </div>

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
          aria-describedby={describedBy('name')}
        />,
      )}

      <div className="grid gap-5 md:grid-cols-2">
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
            aria-describedby={describedBy('email')}
          />,
        )}
        {field(
          'phone',
          t('phone'),
          <input
            className="field"
            id={`${baseId}-phone`}
            name="phone"
            type="tel"
            inputMode="tel"
            required
            autoComplete="tel"
            maxLength={24}
            placeholder={t('phonePlaceholder')}
            aria-invalid={errors.phone ? true : undefined}
            aria-describedby={describedBy('phone')}
          />,
        )}
      </div>

      {field(
        'segment',
        t('segment'),
        <select
          className="field"
          id={`${baseId}-segment`}
          name="segment"
          required
          defaultValue=""
          aria-invalid={errors.segment ? true : undefined}
          aria-describedby={describedBy('segment')}
        >
          <option value="" disabled>
            {t('segmentPlaceholder')}
          </option>
          {SEGMENTS.map((option) => (
            <option key={option} value={option}>
              {t(`segmentOptions.${option}`)}
            </option>
          ))}
        </select>,
      )}

      <fieldset aria-describedby={describedBy('siteType')}>
        <legend className="field-label">{t('siteType')}</legend>
        <div className="grid gap-px border border-line bg-line sm:grid-cols-2">
          {SITE_TYPES.map((option) => (
            <label
              key={option}
              className="group flex cursor-pointer items-center gap-3 bg-bg px-4 py-3 text-sm transition-colors duration-150 hover:bg-surface has-[:checked]:bg-fg has-[:checked]:text-bg has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:-outline-offset-2 has-[:focus-visible]:outline-fg"
            >
              <input
                type="radio"
                name="siteType"
                value={option}
                checked={siteType === option}
                onChange={() => setSiteType(option)}
                className="sr-only"
                aria-invalid={errors.siteType ? true : undefined}
              />
              <span
                className="grid h-3 w-3 shrink-0 place-items-center border border-current"
                aria-hidden="true"
              >
                <span className="hidden h-1.5 w-1.5 bg-current group-has-[:checked]:block" />
              </span>
              {t(`siteTypeOptions.${option}`)}
            </label>
          ))}
        </div>
        {errorText('siteType')}
      </fieldset>

      {field(
        'message',
        t('message'),
        <textarea
          className="field resize-y"
          id={`${baseId}-message`}
          name="message"
          required
          rows={5}
          maxLength={2000}
          placeholder={t('messagePlaceholder')}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={describedBy('message')}
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

export default QuoteForm;
