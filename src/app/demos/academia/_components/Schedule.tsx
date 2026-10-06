'use client';

import { useState } from 'react';

type Session = { time: string; name: string; coach: string; level: 1 | 2 | 3 };

const WEEK: { day: string; sessions: Session[] }[] = [
  { day: 'Seg', sessions: [
    { time: '06:30', name: 'Funcional', coach: 'Lia', level: 2 },
    { time: '12:15', name: 'Boxe técnico', coach: 'Caio', level: 1 },
    { time: '18:30', name: 'LPO', coach: 'Téo', level: 3 },
    { time: '20:00', name: 'Boxe sparring', coach: 'Caio', level: 3 },
  ] },
  { day: 'Ter', sessions: [
    { time: '07:00', name: 'Mobilidade', coach: 'Lia', level: 1 },
    { time: '18:00', name: 'Força em turma', coach: 'Téo', level: 2 },
    { time: '19:30', name: 'Funcional HIIT', coach: 'Nina', level: 3 },
  ] },
  { day: 'Qua', sessions: [
    { time: '06:30', name: 'Funcional', coach: 'Lia', level: 2 },
    { time: '12:15', name: 'Boxe técnico', coach: 'Caio', level: 1 },
    { time: '19:00', name: 'LPO', coach: 'Téo', level: 3 },
  ] },
  { day: 'Qui', sessions: [
    { time: '07:00', name: 'Mobilidade', coach: 'Lia', level: 1 },
    { time: '18:00', name: 'Força em turma', coach: 'Téo', level: 2 },
    { time: '19:30', name: 'Boxe condicionamento', coach: 'Caio', level: 2 },
  ] },
  { day: 'Sex', sessions: [
    { time: '06:30', name: 'Funcional HIIT', coach: 'Nina', level: 3 },
    { time: '18:30', name: 'Boxe sparring', coach: 'Caio', level: 3 },
  ] },
  { day: 'Sáb', sessions: [
    { time: '09:00', name: 'Treinão Forja', coach: 'Equipe', level: 2 },
    { time: '10:30', name: 'Mobilidade', coach: 'Lia', level: 1 },
  ] },
];

export default function Schedule() {
  const [active, setActive] = useState(0);
  const day = WEEK[active];

  return (
    <div>
      <div role="tablist" aria-label="Dias da semana" className="grid grid-cols-6 border border-d-line">
        {WEEK.map((item, index) => (
          <button
            key={item.day}
            role="tab"
            type="button"
            aria-selected={active === index}
            onClick={() => setActive(index)}
            className={`h-14 font-display text-xl uppercase transition-colors md:text-2xl ${
              active === index ? 'bg-d-accent text-d-accent-fg' : 'hover:bg-d-surface'
            } ${index > 0 ? 'border-l border-d-line' : ''}`}
          >
            {item.day}
          </button>
        ))}
      </div>
      <ul role="tabpanel" className="divide-y divide-d-line border-x border-b border-d-line">
        {day.sessions.map((session) => (
          <li key={session.time + session.name} className="grid grid-cols-[4.5rem_1fr_auto] items-center gap-4 px-4 py-5 md:grid-cols-[7rem_1fr_8rem_auto] md:px-6">
            <span className="font-display text-2xl text-d-accent md:text-3xl">{session.time}</span>
            <span>
              <span className="block font-semibold uppercase tracking-wide">{session.name}</span>
              <span className="block text-sm text-d-muted md:hidden">com {session.coach}</span>
            </span>
            <span className="hidden text-sm text-d-muted md:block">com {session.coach}</span>
            <span className="flex gap-1" aria-label={`Intensidade ${session.level} de 3`}>
              {[1, 2, 3].map((level) => (
                <span key={level} className={`h-4 w-1.5 ${level <= session.level ? 'bg-d-accent' : 'bg-d-line'}`} />
              ))}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
