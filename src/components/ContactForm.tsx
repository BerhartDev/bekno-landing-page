'use client';

import React, { useState } from 'react';

const ContactForm = () => {
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
      setMessage('Mensagem enviada com sucesso!');
      e.currentTarget.reset();
    } catch (error) {
      console.error('Erro no envio via JavaScript:', error);
      return true;
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      action="https://formspree.io/f/mvgagpwg"
      method="POST"
      className="space-y-4"
    >
      {/* Honeypot escondido para bloquear bots */}
      <input type="text" name="_gotcha" style={{ display: 'none' }} />
      
      <div>         
        <label htmlFor="name" className="block mb-2">Nome</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-2 rounded-lg bg-white text-bekno-black"
        />
      </div>
      <div>
        <label htmlFor="business" className="block mb-2">Negócio</label>
        <input
          type="text"
          id="business"
          name="business"
          required
          className="w-full px-4 py-2 rounded-lg bg-white text-bekno-black"
        />
      </div>
      <div>
        <label htmlFor="email" className="block mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-2 rounded-lg bg-white text-bekno-black"
        />
      </div>
      <div>
        <label htmlFor="services" className="block mb-2">Serviços de Interesse</label>
        <select
          id="services"
          name="services"
          required
          className="w-full px-4 py-2 rounded-lg bg-white text-bekno-black"
        >
          <option value="">Selecione um serviço</option>
          <option value="website">Website</option>
          <option value="marketing">Marketing Digital</option>
          <option value="ecommerce">E-commerce</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block mb-2">Observações</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full px-4 py-2 rounded-lg bg-white text-bekno-black"
        ></textarea>
      </div>
      {message && (
        <div className={`p-4 rounded-lg ${
          status === 'success' ? 'bg-green-100 text-green-700' : 
          status === 'error' ? 'bg-red-100 text-red-700' : ''
        }`}>
          {message}
        </div>
      )}
      <button 
        type="submit" 
        className="btn-primary w-full"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Enviando...' : 'Solicitar Orçamento'}
      </button>
    </form>
  );
};

export default ContactForm; 