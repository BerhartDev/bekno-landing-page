import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-bekno-black text-bekno-white py-8 text-center">
      <p className="text-sm text-bekno-gray-light">
        {t('copyright')}
      </p>
    </footer>
  );
}



