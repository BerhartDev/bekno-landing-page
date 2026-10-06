import type { Metadata } from 'next';
import HomeView from '@/views/HomeView';
import { buildPageMetadata } from '@/lib/seo';

type Props = { params: { locale: string } };

export function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  return buildPageMetadata(locale);
}

export default function HomePage({ params: { locale } }: Props) {
  return <HomeView locale={locale} />;
}
