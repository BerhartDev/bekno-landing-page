import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="mx-auto flex min-h-screen max-w-page flex-col justify-center px-[clamp(1rem,4vw,3rem)] py-16">
      <p className="font-mono text-sm uppercase tracking-[0.04em] text-muted">404</p>
      <h1 className="mt-4 max-w-[14ch] text-[clamp(2.5rem,1.6rem+4.2vw,5.25rem)] font-bold leading-[1.02] tracking-[-0.035em]">
        Página não encontrada
      </h1>
      <p className="mt-6 max-w-[68ch] text-lg text-muted">
        A página que você está procurando não existe ou foi movida.
      </p>
      <div className="mt-8">
        <Link href="/" className="cta">
          Voltar ao início
          <span className="arrow" aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}
