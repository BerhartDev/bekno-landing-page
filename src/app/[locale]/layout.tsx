import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
// Fontes já configuradas no layout raiz
import { routing } from '@/lib/i18n/routing';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import '../globals.css';
import type { Metadata } from 'next';

// Fontes centralizadas em @/lib/fonts.ts

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const messages = await getMessages();
  
  const title = locale === 'pt' 
    ? 'BEKNO - Soluções Digitais para o Seu Negócio'
    : locale === 'fr'
    ? 'BEKNO - Solutions Numériques pour Votre Entreprise'
    : 'BEKNO - Digital Solutions for Your Business';
    
  const description = locale === 'pt'
    ? 'Transforme seu negócio com soluções digitais personalizadas da BEKNO.'
    : locale === 'fr'
    ? 'Transformez votre entreprise avec des solutions numériques personnalisées de BEKNO.'
    : 'Transform your business with personalized digital solutions from BEKNO.';

  return {
    title,
    description,
  };
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div id="top" className="mx-auto max-w-page px-[clamp(1rem,4vw,3rem)]">
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}
