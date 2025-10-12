'use client';

import { useTranslations } from 'next-intl';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
  const t = useTranslations('contact');

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      text: t('email'),
      href: `mailto:${t('email')}`
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      text: t('phone'),
      href: `tel:${t('phone')}`
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      text: t('location'),
      href: null
    }
  ];

  return (
    <section id="contact" className="bg-bekno-black text-bekno-white py-20 px-4">
      <Container>
        <div className="text-center mb-16">
          <Heading level={2} className="text-bekno-white mb-4">{t('title')}</Heading>
          <p className="text-bekno-gray text-base max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Informações de Contato */}
          <div className="space-y-8">
            <div className="bg-bekno-black border-2 border-bekno-white/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold font-heading mb-8 text-bekno-white">
                Vamos conversar sobre seu projeto
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-bekno-white/10 rounded-xl flex items-center justify-center group-hover:bg-bekno-white/20 transition-colors duration-300">
                      <div className="text-bekno-white">
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      {item.href ? (
                        <a 
                          href={item.href}
                          className="text-bekno-white hover:text-bekno-gray transition-colors duration-300 text-base font-medium"
                        >
                          {item.text}
                        </a>
                      ) : (
                        <span className="text-bekno-white text-base font-medium">
                          {item.text}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-bekno-white/5 rounded-xl border border-bekno-white/20">
                <p className="text-bekno-gray text-xs leading-relaxed">
                  <strong className="text-bekno-white">Resposta rápida:</strong> Respondemos em até 24 horas durante dias úteis. 
                  Para projetos urgentes, entre em contato via WhatsApp.
                </p>
              </div>
            </div>
          </div>
          
          {/* Formulário */}
          <div className="bg-bekno-black border-2 border-bekno-white/20 rounded-2xl p-8">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
