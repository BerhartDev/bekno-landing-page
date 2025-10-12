'use client';

import { useTranslations } from 'next-intl';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Button from '@/components/ui/Button';

export default function Plans() {
  const t = useTranslations('plans');

  const plans = t.raw('items') as Array<{
    name: string;
    description: string;
    price: string;
    features: string[];
    cta: string;
    popular?: boolean;
  }>;

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="plans" className="bg-bekno-black text-bekno-white py-20 px-4">
      <Container>
        <div className="text-center mb-16">
          <Heading level={2} className="text-bekno-white mb-4">{t('title')}</Heading>
          <p className="text-bekno-gray text-base max-w-2xl mx-auto">{t('subtitle')}</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className="relative bg-bekno-black border-2 border-bekno-white/20 rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:border-bekno-white/40 hover:shadow-2xl hover:shadow-bekno-white/10"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-bekno-white text-bekno-black px-4 py-1 rounded-full text-sm font-semibold">
                    Mais Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold font-heading text-bekno-white mb-2">{plan.name}</h3>
                <p className="text-bekno-gray text-xs mb-4">{plan.description}</p>
                <div className="text-bekno-white text-lg font-semibold">{plan.price}</div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg className="w-5 h-5 text-bekno-white mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-bekno-white text-xs">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant="secondary" 
                className="w-full py-3 text-base font-semibold transition-all duration-300 hover:scale-105"
                onClick={scrollToContact}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
