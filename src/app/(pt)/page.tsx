import type { Metadata } from 'next';
import HomeView from '@/views/HomeView';
import { routing } from '@/lib/i18n/routing';
import { buildPageMetadata } from '@/lib/seo';

export function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata(routing.defaultLocale);
}

export default function HomePage() {
  return <HomeView locale={routing.defaultLocale} />;
}
