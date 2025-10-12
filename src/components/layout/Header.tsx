'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/lib/i18n/routing';
import Button from '@/components/ui/Button';
import LanguageSwitcher from './LanguageSwitcher';
import { fontClasses } from '@/lib/fonts';

export default function Header() {
  const t = useTranslations('navigation');

  return (
    <header className="bg-bekno-black text-bekno-white py-4 px-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className={`text-2xl ${fontClasses.title}`}>
          BEKNO
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#about" className="hover:text-bekno-gray-light transition-colors">
            {t('about')}
          </Link>
          <Link href="#services" className="hover:text-bekno-gray-light transition-colors">
            {t('services')}
          </Link>
          <Link href="#plans" className="hover:text-bekno-gray-light transition-colors">
            {t('plans')}
          </Link>
          <Link href="#contact" className="hover:text-bekno-gray-light transition-colors">
            {t('contact')}
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          <Button 
            variant="secondary" 
            size="sm"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            {t('contact')}
          </Button>
        </div>
      </div>
    </header>
  );
}
