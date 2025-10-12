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

  return (
    <section className="bg-bekno-bg-light py-20 px-4">
      <Container>
        <Heading level={2} className="text-center text-bekno-black">{t('title')}</Heading>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <svg className="w-8 h-8 text-bekno-gray mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 1.905 1.5 1.905 2.021 0 1.49-1.254 2.381-2.937 2.381-1.249 0-2.225-.388-2.999-1.001zM17 13.011c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-1.905-1.5-1.905-2.021 0-1.49 1.254-2.381 2.937-2.381 1.249 0 2.225.388 2.999 1.001z"/>
              </svg>
              <p className="text-bekno-gray mb-4">
                "{testimonial.text}"
              </p>
              <p className="font-bold text-bekno-black">{testimonial.author}</p>
              <p className="text-bekno-gray-light">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
