'use client';

import { useTranslations } from 'next-intl';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';

export default function Testimonials() {
  const t = useTranslations('testimonials');

  const testimonials = t.raw('items') as Array<{
    text: string;
    author: string;
    role: string;
  }>;

  const stars = Array.from({ length: 5 }, (_, i) => (
    <svg key={i} className="w-5 h-5 text-bekno-black" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  ));

  return (
    <section className="bg-bekno-white text-bekno-black py-20 px-4">
      <Container>
        <div className="text-center mb-16">
          <Heading level={2} className="text-bekno-black mb-4">{t('title')}</Heading>
          <p className="text-bekno-gray text-base max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="relative bg-bekno-white border-2 border-bekno-gray/20 rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:border-bekno-black/40 hover:shadow-2xl hover:shadow-bekno-black/10 group"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-bekno-black rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-bekno-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 1.905 1.5 1.905 2.021 0 1.49-1.254 2.381-2.937 2.381-1.249 0-2.225-.388-2.999-1.001zM17 13.011c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-1.905-1.5-1.905-2.021 0-1.49 1.254-2.381 2.937-2.381 1.249 0 2.225.388 2.999 1.001z"/>
                  </svg>
                </div>
              </div>
              
              {/* Stars */}
              <div className="flex gap-1 mb-6 mt-4">
                {stars}
              </div>
              
              {/* Testimonial Text */}
              <blockquote className="text-bekno-gray text-sm leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </blockquote>
              
              {/* Author Info */}
              <div className="border-t border-bekno-gray/20 pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-bekno-black/10 rounded-full flex items-center justify-center">
                    <span className="text-bekno-black font-bold text-lg">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold font-heading text-bekno-black text-base">{testimonial.author}</p>
                    <p className="text-bekno-gray text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-bekno-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-bekno-gray text-base mb-6">
            Quer ser nosso próximo cliente satisfeito?
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center gap-2 bg-bekno-black text-bekno-white px-8 py-4 rounded-xl font-semibold hover:bg-bekno-gray transition-colors duration-300 hover:scale-105"
          >
            <span>Começar meu projeto</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </Container>
    </section>
  );
}
