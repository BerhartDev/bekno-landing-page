import { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  title: string;
  intro?: string;
  children: ReactNode;
}

export default function Section({ id, title, intro, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-line py-16 md:py-24">
      <div className="mb-10 grid max-w-[40rem] gap-4 md:mb-14">
        <h2 className="font-mono text-sm font-normal uppercase tracking-[0.04em]">{title}</h2>
        {intro && <p className="text-lg leading-relaxed">{intro}</p>}
      </div>
      {children}
    </section>
  );
}
