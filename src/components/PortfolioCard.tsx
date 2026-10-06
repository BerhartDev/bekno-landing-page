import Image from 'next/image';
import { demoDisplayFonts } from '@/lib/demo-fonts';
import { demoHref, demoImage, type PortfolioProject } from '@/lib/portfolio';

interface PortfolioCardProps {
  project: PortfolioProject;
  niche: string;
  summary: string;
  siteType: string;
  open: string;
}

/**
 * Card de projeto conceito. A capa usa as cores e a fonte de título do site;
 * o resto segue a identidade da BEKNO. O link é um <a> comum: o site tem CSS próprio
 * e precisa de uma carga de página inteira.
 */
export default function PortfolioCard({ project, niche, summary, siteType, open }: PortfolioCardProps) {
  const { theme } = project;
  const display = demoDisplayFonts[project.slug];

  return (
    <a href={demoHref(project.slug)} className="group flex h-full flex-col bg-bg">
      <div
        className="relative isolate flex aspect-[4/3] flex-col justify-end overflow-hidden p-6"
        style={{ backgroundColor: theme.bg, color: theme.fg }}
      >
        {project.cover ? (
          <>
            <Image
              src={demoImage(project.cover)}
              alt=""
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="-z-10 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 -z-10"
              style={{ background: `linear-gradient(to top, ${theme.bg} 15%, ${theme.bg}99 50%, transparent)` }}
            />
          </>
        ) : (
          <div
            className="absolute inset-0 -z-10 transition-transform duration-700 group-hover:scale-105"
            style={{
              background: `radial-gradient(circle at 75% 20%, ${theme.accent}66, transparent 55%), radial-gradient(circle at 10% 90%, ${theme.surface}, transparent 60%)`,
            }}
          />
        )}
        <span
          className={`${display?.className ?? ''} text-[clamp(2rem,1.4rem+2vw,2.75rem)] leading-none`}
          style={{ color: theme.fg }}
        >
          {project.client}
        </span>
        <span className="mt-4 flex gap-1.5" aria-hidden="true">
          {[theme.accent, theme.fg, theme.surface].map((color) => (
            <span key={color} className="h-3 w-6" style={{ backgroundColor: color, outline: `1px solid ${theme.line}` }} />
          ))}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 border-t border-line p-6">
        <p className="font-mono text-xs uppercase tracking-[0.04em] text-muted">
          {siteType} · {niche}
        </p>
        <p className="text-sm text-muted">{summary}</p>
        <span className="link mt-auto w-fit pt-2 font-mono text-sm uppercase tracking-[0.04em]">
          {open} <span aria-hidden="true">→</span>
        </span>
      </div>
    </a>
  );
}
