'use client'

import { fontVariables } from '@/lib/fonts';
import './globals.css';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="pt" className={fontVariables}>
      <body className="font-sans antialiased">
        <div className="mx-auto flex min-h-screen max-w-page flex-col justify-center px-[clamp(1rem,4vw,3rem)] py-16">
          <p className="font-mono text-sm uppercase tracking-[0.04em] text-muted">Erro</p>
          <h1 className="mt-4 text-4xl font-bold tracking-[-0.035em]">Algo deu errado.</h1>
          <button type="button" onClick={reset} className="cta mt-8 w-fit">
            Tentar novamente
            <span className="arrow" aria-hidden="true">→</span>
          </button>
        </div>
      </body>
    </html>
  )
}
