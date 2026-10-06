import { setRequestLocale } from 'next-intl/server';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import ChecklistSection from '@/components/sections/ChecklistSection';
import Method from '@/components/sections/Method';
import SiteTypes from '@/components/sections/SiteTypes';
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
      <ChecklistSection namespace="exclusivity" />
      <Method />
      <ChecklistSection namespace="commitment" columns={4} />
      <SiteTypes />
      <ChecklistSection namespace="differentiators" />
      <FinalCta />
    </>
  );
}
