'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/lib/i18n/routing';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';

const SECTIONS = [
  { id: 'services', key: 'services' },
  { id: 'plans', key: 'plans' },
  { id: 'projects', key: 'projects' },
  { id: 'contact', key: 'contact' },
] as const;

export default function Header() {
  const t = useTranslations('navigation');
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isHome = pathname === '/';
  const onProjects = pathname.startsWith('/projetos');

  const sectionHref = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-bg font-mono text-sm">
      <div className="flex min-h-[4.5rem] items-center gap-4 lg:gap-6">
        <Link href="/" className="link font-medium whitespace-nowrap" onClick={closeMenu}>
          BEKNO
        </Link>

        <nav aria-label={t('menu')} className="hidden flex-1 lg:block">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-muted">
            {SECTIONS.map((section) => (
              <li key={section.id}>
                <Link
                  href={section.id === 'projects' ? '/projetos' : sectionHref(section.id)}
                  className="link transition-colors duration-150 hover:text-fg aria-[current=page]:text-fg"
                  aria-current={section.id === 'projects' && onProjects ? 'page' : undefined}
                >
                  {t(section.key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <LanguageSwitcher />
          <ThemeToggle />
          <Link href={sectionHref('contact')} className="cta hidden lg:inline-flex">
            {t('cta')}
            <span className="arrow" aria-hidden="true">→</span>
          </Link>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center border border-fg lg:hidden"
            aria-expanded={isMenuOpen}
            aria-label={t('menu')}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="relative block h-3 w-[1.125rem]" aria-hidden="true">
              <span className={`absolute left-0 h-px w-full bg-current transition-transform duration-200 ${isMenuOpen ? 'top-1/2 rotate-45' : 'top-0'}`} />
              <span className={`absolute left-0 top-1/2 h-px w-full bg-current transition-opacity duration-150 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`absolute left-0 h-px w-full bg-current transition-transform duration-200 ${isMenuOpen ? 'top-1/2 -rotate-45' : 'top-full'}`} />
            </span>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute left-0 right-0 top-full border-b border-fg bg-bg lg:hidden">
          <nav aria-label={t('menu')} className="py-4">
            <ul className="border-b border-line">
              {SECTIONS.map((section) => (
                <li key={section.id} className="border-t border-line">
                  <Link
                    href={section.id === 'projects' ? '/projetos' : sectionHref(section.id)}
                    className="block px-1 py-3 font-sans text-xl transition-colors duration-150 hover:bg-fg hover:text-bg"
                    aria-current={section.id === 'projects' && onProjects ? 'page' : undefined}
                    onClick={closeMenu}
                  >
                    {t(section.key)}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="px-1 pt-5">
              <Link href={sectionHref('contact')} className="cta" onClick={closeMenu}>
                {t('cta')}
                <span className="arrow" aria-hidden="true">→</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
