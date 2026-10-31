'use client';

import type { ReactNode } from 'react';
import { useTranslations } from 'next-intl';
import { Link, type AppPathname } from '@/lib/i18n/routing';
import { enabledNavLinks } from '@/lib/nav';
import { hasValue, SITE, whatsappUrl } from '@/lib/site';
import LanguageSwitcher from './LanguageSwitcher';

// Área de toque de 44px no celular; no desktop volta ao tamanho do texto.
const TAP = 'link inline-flex min-h-[44px] items-center hover:text-fg md:min-h-0';

const iconProps = {
  width: 16,
  height: 16,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
};

const SOCIAL: { network: string; url: string; icon: ReactNode }[] = [
  {
    network: 'Instagram',
    url: SITE.social.instagram,
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    network: 'LinkedIn',
    url: SITE.social.linkedin,
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M8 10.5V17M8 7.5v.01M12 17v-6.5M12 13.5a2.5 2.5 0 0 1 5 0V17" />
      </svg>
    ),
  },
  {
    network: 'Google',
    url: SITE.social.google,
    icon: (
      <svg {...iconProps}>
        <path d="M19.5 12a7.5 7.5 0 1 1-2.2-5.3" />
        <path d="M19.5 12H12" />
      </svg>
    ),
  },
].filter((item) => hasValue(item.url));

const company = [SITE.brand, SITE.legalName, hasValue(SITE.cnpj) ? `CNPJ ${SITE.cnpj}` : ''].filter(hasValue);
const showCompany = hasValue(SITE.legalName) || hasValue(SITE.cnpj);
const address = hasValue(SITE.streetAddress)
  ? [SITE.streetAddress, SITE.neighborhood, `${SITE.city} - ${SITE.region}`].filter(hasValue).join(', ')
  : '';

export default function Footer() {
  const t = useTranslations('footer');
  const nav = useTranslations('navigation');

  // Âncoras da home; fora dela, voltam para a home do idioma atual.
  const linkHref = (href: string) =>
    href.startsWith('#') ? { pathname: '/' as const, hash: href.slice(1) } : (href as AppPathname);

  const place = [SITE.neighborhood, SITE.city].filter(hasValue).join(', ');

  return (
    <footer className="border-t border-line pb-24 pt-8 font-mono text-xs text-muted">
      <div className="grid gap-6 md:grid-cols-[minmax(0,24rem)_1fr] md:gap-x-12">
        <div className="grid content-start gap-3">
          <Link href="/" className="link w-fit text-sm text-fg">
            {SITE.brand}
          </Link>
          <p className="leading-relaxed">{t('tagline')}</p>
        </div>

        <div className="grid content-start gap-4 md:justify-items-end">
          <nav aria-label={t('links')}>
            <ul className="flex flex-wrap gap-x-5 md:gap-y-2">
              {enabledNavLinks().map((link) => (
                <li key={link.key}>
                  <Link href={linkHref(link.href)} className={TAP}>
                    {nav(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <address aria-label={t('contact')} className="flex flex-wrap items-center gap-x-5 not-italic md:justify-end md:gap-y-2">
            {hasValue(SITE.whatsapp) && hasValue(SITE.phoneDisplay) && (
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className={TAP}>
                WhatsApp {SITE.phoneDisplay}
              </a>
            )}
            {hasValue(SITE.email) && (
              <a href={`mailto:${SITE.email}`} className={TAP}>
                {SITE.email}
              </a>
            )}
            <span className="py-3 md:py-0">
              {[place, t('coverage')].filter(hasValue).join(' · ')}
            </span>
          </address>

          {SOCIAL.length > 0 && (
            <ul aria-label={t('social')} className="flex flex-wrap gap-x-5 md:gap-y-2">
              {SOCIAL.map((item) => (
                <li key={item.network}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t('socialLink', { network: item.network })}
                    className={`${TAP} gap-2`}
                  >
                    {item.icon}
                    <span aria-hidden="true">{item.network}</span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {(showCompany || hasValue(address)) && (
        <div className="mt-8 grid gap-1 border-t border-line pt-6 leading-relaxed">
          {showCompany && <p>{company.join(' · ')}</p>}
          {hasValue(address) && <p>{address}</p>}
        </div>
      )}

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
        <p suppressHydrationWarning>
          {t('copyright', { start: SITE.foundedYear, year: new Date().getFullYear() })}
        </p>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <a href="#top" className={TAP}>
            {t('backToTop')}
          </a>
        </div>
      </div>
    </footer>
  );
}
