import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import ChecklistSection from '@/components/sections/ChecklistSection';
import Method from '@/components/sections/Method';
import SiteTypes from '@/components/sections/SiteTypes';
import FinalCta from '@/components/sections/FinalCta';
import JsonLd from '@/components/seo/JsonLd';
import { buildPageMetadata, homeJsonLd } from '@/lib/seo';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return buildPageMetadata(locale);
}

export default async function HomePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
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
