'use client';

import { useTranslations } from 'next-intl';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Button from '@/components/ui/Button';

export default function Plans() {
  const t = useTranslations('plans');

  const plans = t.raw('items') as Array<{
    name: string;
    features: string[];
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
        <Heading level={2} className="text-center text-bekno-white">{t('title')}</Heading>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="border border-bekno-white p-8 rounded-lg hover:bg-bekno-white hover:text-bekno-black transition-colors duration-300">
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
              <Button 
                variant="primary" 
                className="w-full"
                onClick={scrollToContact}
              >
                {t('cta')}
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
