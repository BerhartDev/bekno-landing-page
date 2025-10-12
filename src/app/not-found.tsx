import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-bekno-black text-bekno-white flex items-center justify-center px-4">
      <div className="text-center max-w-4xl mx-auto">
        {/* Icon */}
        <div className="w-24 h-24 bg-bekno-white rounded-full mx-auto mb-8 flex items-center justify-center">
          <svg className="w-12 h-12 text-bekno-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 text-bekno-white">
          404
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-bekno-gray-light mb-8">
          Página não encontrada
        </p>

        {/* Back Button */}
        <div className="mb-8">
          <Link href="/" className="inline-block px-6 py-3 bg-bekno-white text-bekno-black rounded-lg hover:bg-bekno-gray-light transition-colors font-medium">
            Voltar ao Início
          </Link>
        </div>

        {/* Description */}
        <p className="text-lg text-bekno-gray-light mb-12 max-w-2xl mx-auto">
          A página que você está procurando não existe ou foi movida. Que tal voltar ao início e explorar nossos serviços?
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link href="/#contact" className="inline-block px-6 py-3 bg-bekno-black text-bekno-white rounded-lg hover:bg-bekno-gray transition-colors font-medium border border-bekno-white">
            Entrar em Contato
          </Link>
        </div>
      </div>
    </div>
  );
}
