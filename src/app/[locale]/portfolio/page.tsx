import { useTranslations } from 'next-intl';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Button from '@/components/ui/Button';
import { Link } from '@/lib/i18n/routing';

export default function PortfolioPage() {
  const t = useTranslations('portfolio');

  return (
    <div className="min-h-screen bg-bekno-black text-bekno-white">
      {/* Main Content */}
      <main className="min-h-screen flex items-center justify-center px-4">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            {/* Icon */}
            <div className="w-24 h-24 bg-bekno-white rounded-full mx-auto mb-8 flex items-center justify-center">
              <svg className="w-12 h-12 text-bekno-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>

            {/* Title */}
            <Heading level={1} className="text-bekno-white mb-6">
              {t('title')}
            </Heading>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-bekno-gray-light mb-8">
              {t('subtitle')}
            </p>

            {/* Back Button */}
            <div className="mb-8">
              <Link href="/">
                <Button variant="secondary">
                  {t('ctaBack')}
                </Button>
              </Link>
            </div>

            {/* Description */}
            <p className="text-lg text-bekno-gray-light mb-12 max-w-2xl mx-auto">
              {t('description')}
            </p>

            {/* CTA Button */}
            <div className="flex justify-center">
              <Link href="/#contact">
                <Button variant="primary">
                  {t('ctaContact')}
                </Button>
              </Link>
            </div>

          </div>
        </Container>
      </main>

      {/* Footer */}
      <footer className="bg-bekno-black text-bekno-white py-8 text-center">
        <p className="text-sm text-bekno-gray-light">
          © 2025 BEKNO - Todos os direitos reservados
        </p>
      </footer>
    </div>
  );
}
