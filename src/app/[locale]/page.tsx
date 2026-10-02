import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Method from '@/components/sections/Method';
import Contact from '@/components/sections/Contact';
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
      <Features />
      <Method />
      <Contact />
    </>
  );
}
