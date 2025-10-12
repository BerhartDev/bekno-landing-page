'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/lib/i18n/routing';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => handleLanguageChange('pt')}
        className={`px-2 py-1 text-sm rounded transition-colors ${
          locale === 'pt' 
            ? 'bg-bekno-white text-bekno-black' 
            : 'text-bekno-gray-light hover:text-bekno-white'
        }`}
      >
        PT
      </button>
      <span className="text-bekno-gray-light">|</span>
      <button
        onClick={() => handleLanguageChange('en')}
        className={`px-2 py-1 text-sm rounded transition-colors ${
          locale === 'en' 
            ? 'bg-bekno-white text-bekno-black' 
            : 'text-bekno-gray-light hover:text-bekno-white'
        }`}
      >
        EN
      </button>
    </div>
  );
}



