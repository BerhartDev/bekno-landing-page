'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/lib/i18n/routing';
import LanguageSwitcher from './LanguageSwitcher';

export default function Footer() {
  const t = useTranslations('footer');
  const nav = useTranslations('navigation');
  // Âncoras da home; fora dela, voltam para a home do idioma atual.
  const sectionHref = (id: string) => ({ pathname: '/' as const, hash: id });

  const links = [
    { href: sectionHref('services'), label: nav('services') },
    { href: sectionHref('method'), label: nav('method') },
    { href: '/projetos' as const, label: nav('projects') },
    { href: '/orcamento' as const, label: nav('quote') },
  ];

  return (
    <footer className="border-t border-line py-8 font-mono text-xs text-muted">
      <div className="flex flex-wrap items-start justify-between gap-6">
        <div className="grid max-w-sm gap-3">
          <Link href="/" className="link w-fit text-sm text-fg">
            BEKNO
          </Link>
          <p className="leading-relaxed">{t('tagline')}</p>
        </div>
        <nav aria-label={t('links')} className="flex flex-wrap gap-x-5 gap-y-2">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="link hover:text-fg">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
        <p>{t('copyright')}</p>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <a href="#top" className="link hover:text-fg">
            {t('backToTop')}
          </a>
        </div>
      </div>
    </footer>
  );
}
