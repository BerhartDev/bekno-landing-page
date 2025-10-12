'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import Button from '@/components/ui/Button';

const ContactForm = () => {
  const t = useTranslations('contact.form');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('https://formspree.io/f/mvgagpwg', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        },
        mode: 'no-cors'
      });

      setStatus('success');
      setMessage(t('success'));
      e.currentTarget.reset();
    } catch (error) {
      console.error('Erro no envio via JavaScript:', error);
      return true;
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold font-heading text-bekno-white mb-2">
          Envie sua mensagem
        </h3>
        <p className="text-bekno-gray text-xs">
          Preencha o formulário e entraremos em contato em breve
        </p>
      </div>
      
      <form 
        onSubmit={handleSubmit}
        action="https://formspree.io/f/mvgagpwg"
        method="POST"
        className="space-y-6"
      >
        {/* Honeypot escondido para bloquear bots */}
        <input type="text" name="_gotcha" style={{ display: 'none' }} />
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>         
            <label htmlFor="name" className="block mb-3 text-bekno-white font-medium">{t('name')}</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 rounded-xl bg-bekno-white/10 border border-bekno-white/20 text-bekno-white placeholder-bekno-gray focus:outline-none focus:ring-2 focus:ring-bekno-white focus:border-transparent transition-all duration-300"
              placeholder="Seu nome completo"
            />
          </div>
          <div>
            <label htmlFor="business" className="block mb-3 text-bekno-white font-medium">{t('business')}</label>
            <input
              type="text"
              id="business"
              name="business"
              required
              className="w-full px-4 py-3 rounded-xl bg-bekno-white/10 border border-bekno-white/20 text-bekno-white placeholder-bekno-gray focus:outline-none focus:ring-2 focus:ring-bekno-white focus:border-transparent transition-all duration-300"
              placeholder="Nome da empresa"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="email" className="block mb-3 text-bekno-white font-medium">{t('email')}</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 rounded-xl bg-bekno-white/10 border border-bekno-white/20 text-bekno-white placeholder-bekno-gray focus:outline-none focus:ring-2 focus:ring-bekno-primary focus:border-transparent transition-all duration-300"
            placeholder="seu@email.com"
          />
        </div>
        
        <div>
          <label htmlFor="services" className="block mb-3 text-bekno-white font-medium">{t('services')}</label>
          <select
            id="services"
            name="services"
            required
            className="w-full px-4 py-3 rounded-xl bg-bekno-white/10 border border-bekno-white/20 text-bekno-white focus:outline-none focus:ring-2 focus:ring-bekno-white focus:border-transparent transition-all duration-300"
          >
            <option value="" className="text-bekno-gray">{t('servicesPlaceholder')}</option>
            <option value="website" className="text-bekno-black">{t('servicesOptions.website')}</option>
            <option value="cms" className="text-bekno-black">{t('servicesOptions.cms')}</option>
            <option value="marketing" className="text-bekno-black">{t('servicesOptions.marketing')}</option>
            <option value="ecommerce" className="text-bekno-black">{t('servicesOptions.ecommerce')}</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="message" className="block mb-3 text-bekno-white font-medium">{t('message')}</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="w-full px-4 py-3 rounded-xl bg-bekno-white/10 border border-bekno-white/20 text-bekno-white placeholder-bekno-gray focus:outline-none focus:ring-2 focus:ring-bekno-primary focus:border-transparent transition-all duration-300 resize-none"
            placeholder="Conte-nos sobre seu projeto..."
          ></textarea>
        </div>
        
        {message && (
          <div className={`p-4 rounded-xl border ${
            status === 'success' ? 'bg-green-500/10 border-green-500/20 text-green-400' : 
            status === 'error' ? 'bg-red-500/10 border-red-500/20 text-red-400' : ''
          }`}>
            {message}
          </div>
        )}
        
        <Button 
          type="submit" 
          variant="secondary"
          className="w-full py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-5 h-5 border-2 border-bekno-black border-t-transparent rounded-full animate-spin"></div>
              {t('submitting')}
            </div>
          ) : (
            t('submit')
          )}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm; 