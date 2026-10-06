import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ locale: explicitLocale, requestLocale }) => {
  // Pages pass the locale explicitly or through setRequestLocale (static export, no middleware).
  let locale = explicitLocale ?? (await requestLocale);
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../../locales/${locale}.json`)).default
  };
});
