'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/lib/i18n/routing';
import FlagIcon from '@/components/ui/FlagIcon';
import { useState } from 'react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'pt', flag: 'br', name: 'PT' },
    { code: 'en', flag: 'au', name: 'EN' },
    { code: 'fr', flag: 'fr', name: 'FR' }
  ];

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-bekno-gray-dark hover:bg-bekno-gray transition-colors"
        aria-label="Selecionar idioma"
      >
        <FlagIcon country={currentLanguage.flag as 'br' | 'fr' | 'au'} />
        <span className="text-sm text-bekno-white">{currentLanguage.name}</span>
        <svg 
          className={`w-4 h-4 text-bekno-gray-light transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-bekno-gray-dark rounded-lg shadow-lg border border-bekno-gray z-50 min-w-[140px]">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`w-full flex items-center space-x-3 px-3 py-2 text-left hover:bg-bekno-gray transition-colors first:rounded-t-lg last:rounded-b-lg ${
                locale === language.code ? 'bg-bekno-gray text-bekno-white' : 'text-bekno-gray-light hover:text-bekno-white'
              }`}
            >
              <FlagIcon country={language.flag as 'br' | 'fr' | 'au'} />
              <span className="text-sm">{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}



