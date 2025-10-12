'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/lib/i18n/routing';
import LanguageSwitcher from './LanguageSwitcher';

export default function Footer() {
  const t = useTranslations('footer');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-bekno-black text-bekno-white py-16 px-4 border-t border-bekno-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo e Descrição */}
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-bekno-white hover:text-bekno-gray transition-colors duration-300 mb-4 inline-block">
              BEKNO
            </Link>
            <p className="text-bekno-gray text-sm leading-relaxed max-w-md">
              Soluções digitais completas para impulsionar seu negócio. 
              Desenvolvemos sites, sistemas e campanhas digitais sob medida.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-bekno-white font-semibold mb-4">Links Rápidos</h3>
            <nav className="space-y-3">
              <Link 
                href="#about" 
                className="block text-bekno-gray hover:text-bekno-white transition-colors duration-300 text-sm"
                onClick={() => scrollToSection('about')}
              >
                Sobre Nós
              </Link>
              <Link 
                href="#services" 
                className="block text-bekno-gray hover:text-bekno-white transition-colors duration-300 text-sm"
                onClick={() => scrollToSection('services')}
              >
                Serviços
              </Link>
              <Link 
                href="#plans" 
                className="block text-bekno-gray hover:text-bekno-white transition-colors duration-300 text-sm"
                onClick={() => scrollToSection('plans')}
              >
                Planos
              </Link>
              <Link 
                href="#contact" 
                className="block text-bekno-gray hover:text-bekno-white transition-colors duration-300 text-sm"
                onClick={() => scrollToSection('contact')}
              >
                Contato
              </Link>
            </nav>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-bekno-white font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <a 
                href="mailto:bernardoknob@gmail.com"
                className="block text-bekno-gray hover:text-bekno-white transition-colors duration-300 text-sm"
              >
                bernardoknob@gmail.com
              </a>
              <a 
                href="tel:+5522988071682"
                className="block text-bekno-gray hover:text-bekno-white transition-colors duration-300 text-sm"
              >
                +55 22 98807-1682
              </a>
              <p className="text-bekno-gray text-sm">
                Ipanema, RJ
              </p>
            </div>
          </div>
        </div>

        {/* Linha Divisória */}
        <div className="border-t border-bekno-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-bekno-gray text-sm">
              {t('copyright')}
            </p>
            <div className="flex items-center gap-4">
              <LanguageSwitcher />
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center gap-2 text-bekno-gray hover:text-bekno-white transition-colors duration-300 text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                Voltar ao topo
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}



