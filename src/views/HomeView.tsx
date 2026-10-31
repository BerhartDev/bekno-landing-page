import { setRequestLocale } from 'next-intl/server';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import ChecklistSection from '@/components/sections/ChecklistSection';
import Method from '@/components/sections/Method';
import Process from '@/components/sections/Process';
import SiteTypes from '@/components/sections/SiteTypes';
import Faq from '@/components/sections/Faq';
import FinalCta from '@/components/sections/FinalCta';
import JsonLd from '@/components/seo/JsonLd';
import { homeJsonLd } from '@/lib/seo';

export default async function HomeView({ locale }: { locale: string }) {
  setRequestLocale(locale);
  const jsonLd = await homeJsonLd(locale);

  return (
    <>
      <JsonLd data={jsonLd} />
      <Hero />
      <Services />
      <Portfolio />
      <Method />
      <Process />
      {/*
        TODO [CONFIRMAR] itens que faltam em "included" (src/locales/*.json, nos 4 idiomas):
        - "Você mesmo atualiza textos e fotos": incluir quando confirmado que todo site vem com painel.
        - "Correções sem custo": incluir quando SITE.warrantyDays > 0, com o número de dias no texto
          (mesmo padrão de descriptionResponseTime em ChecklistSection, trocando {h} por SITE.warrantyDays).
      */}
      <ChecklistSection namespace="included" />
      <ChecklistSection namespace="commitment" columns={4} />
      <SiteTypes />
      <ChecklistSection namespace="whyBekno" />
      <Faq id="perguntas" />
      <FinalCta />
    </>
  );
}
