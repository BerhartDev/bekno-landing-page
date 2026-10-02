import type { Metadata } from 'next';
import JsonLd from '@/components/seo/JsonLd';
import { buildPageMetadata, projectsJsonLd } from '@/lib/seo';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return buildPageMetadata(locale, '/projetos');
}

export default async function ProjectsLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const jsonLd = await projectsJsonLd(locale);

  return (
    <>
      <JsonLd data={jsonLd} />
      {children}
    </>
  );
}
