import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Inter, Roboto, Poppins } from "next/font/google";
import { routing } from '@/lib/i18n/routing';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import '../globals.css';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"], variable: "--font-roboto" });
const poppins = Poppins({ weight: ["400", "500", "600", "700"], subsets: ["latin"], variable: "--font-poppins" });

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
    : 'BEKNO - Digital Solutions for Your Business';
    
  const description = locale === 'pt'
    ? 'Transforme seu negócio com soluções digitais personalizadas da BEKNO.'
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
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </NextIntlClientProvider>
  );
}
