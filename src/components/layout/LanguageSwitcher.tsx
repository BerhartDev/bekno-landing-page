'use client';

import { useEffect, useRef, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/lib/i18n/routing';

const languages = [
  { code: 'pt', name: 'Português' },
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'Français' },
];

export default function LanguageSwitcher() {
  const t = useTranslations('navigation');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const close = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, [isOpen]);

  return (
    <div className="relative" ref={rootRef}>
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex h-10 items-center gap-2 border border-line px-3 font-mono text-sm transition-colors duration-150 hover:border-fg hover:bg-fg hover:text-bg aria-expanded:border-fg aria-expanded:bg-fg aria-expanded:text-bg"
        aria-expanded={isOpen}
        aria-label={t('language')}
      >
        <span className="visually-hidden">{t('language')}: </span>
        <span aria-hidden="true">{locale.toUpperCase()}</span>
        <span aria-hidden="true" className={`inline-block transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          ↓
        </span>
      </button>

      {isOpen && (
        <ul className="absolute right-0 top-[calc(100%+0.5rem)] z-20 min-w-[11rem] border border-fg bg-bg">
          {languages.map((language) => (
            <li key={language.code} className="border-t border-line first:border-t-0">
              <button
                type="button"
                lang={language.code}
                aria-current={locale === language.code ? 'true' : undefined}
                onClick={() => {
                  router.replace(pathname, { locale: language.code });
                  setIsOpen(false);
                }}
                className="flex w-full items-baseline gap-3 px-3 py-2 text-left text-sm transition-colors duration-150 hover:bg-fg hover:text-bg aria-[current=true]:bg-fg aria-[current=true]:text-bg"
              >
                <span className="font-mono text-xs text-muted">{language.code.toUpperCase()}</span>
                {language.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
