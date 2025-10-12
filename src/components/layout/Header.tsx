'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/lib/i18n/routing';
import Button from '@/components/ui/Button';
import LanguageSwitcher from './LanguageSwitcher';
import { fontClasses } from '@/lib/fonts';

export default function Header() {
  const t = useTranslations('navigation');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-bekno-black/95 backdrop-blur-sm text-bekno-white py-4 px-4 sticky top-0 z-50 border-b border-bekno-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className={`text-2xl font-bold ${fontClasses.title} hover:text-bekno-gray transition-colors duration-300`}>
          BEKNO
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            href="#about" 
            className="text-bekno-white hover:text-bekno-gray transition-colors duration-300 font-medium"
            onClick={() => scrollToSection('about')}
          >
            {t('about')}
          </Link>
          <Link 
            href="#services" 
            className="text-bekno-white hover:text-bekno-gray transition-colors duration-300 font-medium"
            onClick={() => scrollToSection('services')}
          >
            {t('services')}
          </Link>
          <Link 
            href="#plans" 
            className="text-bekno-white hover:text-bekno-gray transition-colors duration-300 font-medium"
            onClick={() => scrollToSection('plans')}
          >
            {t('plans')}
          </Link>
          <Link 
            href="#contact" 
            className="text-bekno-white hover:text-bekno-gray transition-colors duration-300 font-medium"
            onClick={() => scrollToSection('contact')}
          >
            {t('contact')}
          </Link>
        </nav>
        
        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <LanguageSwitcher />
          <Button 
            variant="secondary" 
            size="sm"
            className="hover:scale-105 transition-transform duration-300"
            onClick={() => scrollToSection('contact')}
          >
            Solicitar Orçamento
          </Button>
        </div>

        {/* Mobile Actions */}
        <div className="md:hidden flex items-center space-x-3">
          <LanguageSwitcher />
          <button
            className="flex items-center justify-center w-10 h-10 rounded-lg bg-bekno-white/10 hover:bg-bekno-white/20 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-bekno-black/95 backdrop-blur-sm border-b border-bekno-white/10">
          <nav className="px-4 py-6 space-y-4">
            <Link 
              href="#about" 
              className="block text-bekno-white hover:text-bekno-gray transition-colors duration-300 font-medium py-2"
              onClick={() => scrollToSection('about')}
            >
              {t('about')}
            </Link>
            <Link 
              href="#services" 
              className="block text-bekno-white hover:text-bekno-gray transition-colors duration-300 font-medium py-2"
              onClick={() => scrollToSection('services')}
            >
              {t('services')}
            </Link>
            <Link 
              href="#plans" 
              className="block text-bekno-white hover:text-bekno-gray transition-colors duration-300 font-medium py-2"
              onClick={() => scrollToSection('plans')}
            >
              {t('plans')}
            </Link>
            <Link 
              href="#contact" 
              className="block text-bekno-white hover:text-bekno-gray transition-colors duration-300 font-medium py-2"
              onClick={() => scrollToSection('contact')}
            >
              {t('contact')}
            </Link>
            <div className="pt-4 border-t border-bekno-white/10 flex justify-center">
              <Button 
                variant="secondary" 
                size="sm"
                onClick={() => scrollToSection('contact')}
              >
                Solicitar Orçamento
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
