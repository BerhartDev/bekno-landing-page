'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Section from '@/components/ui/Section';
import { serviceImages, type ServiceImageId } from '@/lib/service-images';

type ServiceItem = {
  id: ServiceImageId;
  service: string;
  title: string;
  description: string;
  imageAlt: string;
};

export default function Features() {
  const t = useTranslations('features');
  const items = t.raw('items') as ServiceItem[];

  const choose = (service: string) => {
    window.dispatchEvent(new CustomEvent('select-service', { detail: service }));
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section id="services" title={t('title')} intro={t('subtitle')}>
      <ul className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li key={item.id} className="flex flex-col bg-bg">
            <div className="photo">
              <Image
                src={serviceImages[item.id]}
                alt={item.imageAlt}
                width={1400}
                height={1050}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col gap-4 border-t border-line p-6 md:p-8">
              <h3 className="text-xl font-semibold tracking-[-0.02em]">{item.title}</h3>
              <p className="text-sm text-muted">{item.description}</p>
              <button
                type="button"
                className="link mt-auto w-fit font-mono text-sm uppercase tracking-[0.04em]"
                onClick={() => choose(item.service)}
              >
                {t('cta')}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
