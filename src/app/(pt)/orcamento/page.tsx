import type { Metadata } from 'next';
import QuoteView from '@/views/QuoteView';
import { routing } from '@/lib/i18n/routing';
import { buildPageMetadata } from '@/lib/seo';

export function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata(routing.defaultLocale, '/orcamento');
}

export default function QuotePage() {
  return <QuoteView locale={routing.defaultLocale} />;
}
