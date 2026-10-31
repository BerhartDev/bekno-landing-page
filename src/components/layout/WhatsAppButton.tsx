'use client';

import { useTranslations } from 'next-intl';
import { whatsappUrl } from '@/lib/site';

/** Atalho fixo para o WhatsApp. Fica abaixo do Header (z-30) para o menu do celular cobrir o botão. */
export default function WhatsAppButton() {
  const t = useTranslations('whatsapp');

  return (
    <a
      href={whatsappUrl(t('message'))}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t('label')}
      className="fixed bottom-4 right-4 z-20 grid h-14 w-14 place-items-center border border-fg bg-fg text-bg transition-colors duration-150 hover:bg-bg hover:text-fg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fg md:bottom-6 md:right-6"
    >
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3.5 20.5l1.4-4.2A8.5 8.5 0 1 1 8 19.3z" />
        <path d="M9.2 8.3c.2-.4.5-.5.8-.5h.5l1 2.2-.8 1a5 5 0 0 0 2.3 2.3l1-.8 2.2 1v.5c0 .3-.1.6-.5.8-.6.4-1.5.5-2.4.1a8 8 0 0 1-4-4c-.4-.9-.3-1.8.1-2.6z" />
      </svg>
    </a>
  );
}
