'use client';

import { useState } from 'react';
import { AREAS } from '../_data';

export default function Areas() {
  const [active, setActive] = useState(AREAS[0].id);
  const area = AREAS.find((item) => item.id === active) ?? AREAS[0];

  return (
    <div className="grid gap-8 md:grid-cols-[18rem_1fr] md:gap-12">
      <div role="tablist" aria-label="Áreas de atuação" aria-orientation="vertical" className="flex gap-2 overflow-x-auto md:flex-col md:overflow-visible">
        {AREAS.map((item, index) => (
          <button
            key={item.id}
            role="tab"
            type="button"
            id={`tab-${item.id}`}
            aria-selected={active === item.id}
            aria-controls="area-panel"
            onClick={() => setActive(item.id)}
            className={`flex shrink-0 items-baseline gap-3 border-l-2 px-4 py-3 text-left transition-colors md:shrink ${
              active === item.id ? 'border-d-accent bg-d-surface text-d-fg' : 'border-transparent text-d-muted hover:text-d-fg'
            }`}
          >
            <span className="font-display text-sm text-d-accent">{String(index + 1).padStart(2, '0')}</span>
            <span className="whitespace-nowrap font-display text-xl md:whitespace-normal">{item.name}</span>
          </button>
        ))}
      </div>
      <div id="area-panel" role="tabpanel" aria-labelledby={`tab-${area.id}`} className="border border-d-line p-8 md:p-10">
        <h3 className="font-display text-4xl md:text-5xl">{area.name}</h3>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-d-muted">{area.summary}</p>
        <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
          {area.services.map((service) => (
            <li key={service} className="flex gap-3">
              <span className="mt-2.5 h-px w-4 shrink-0 bg-d-accent" aria-hidden="true" />
              {service}
            </li>
          ))}
        </ul>
        <p className="mt-10 border-t border-d-line pt-6 text-sm text-d-muted">
          <span className="font-semibold uppercase tracking-[0.15em] text-d-accent">Casos típicos · </span>
          {area.cases}
        </p>
      </div>
    </div>
  );
}
