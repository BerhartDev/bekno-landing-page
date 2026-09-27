'use client';

import { useSyncExternalStore } from 'react';
import { useTranslations } from 'next-intl';

type Theme = 'light' | 'dark';

const EVENT = 'themechange';

function currentTheme(): Theme {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
}

function subscribe(onChange: () => void) {
  window.addEventListener(EVENT, onChange);
  return () => window.removeEventListener(EVENT, onChange);
}

export default function ThemeToggle() {
  const t = useTranslations('navigation');
  const theme = useSyncExternalStore(subscribe, currentTheme, () => null);

  function toggle() {
    const next: Theme = currentTheme() === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {
      // Private mode: the choice lasts for this visit only.
    }
    window.dispatchEvent(new Event(EVENT));
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={theme === null ? undefined : theme === 'dark'}
      className="grid h-10 w-10 place-items-center border border-line text-fg transition-colors duration-150 hover:border-fg hover:bg-fg hover:text-bg"
    >
      <span className="visually-hidden">{t('theme')}</span>
      <svg className="theme-moon" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
        <path d="M10.5 1.2A7 7 0 1 0 14.8 11 5.6 5.6 0 0 1 10.5 1.2Z" fill="currentColor" />
      </svg>
      <svg className="theme-sun" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
        <circle cx="8" cy="8" r="6" fill="currentColor" />
      </svg>
    </button>
  );
}
