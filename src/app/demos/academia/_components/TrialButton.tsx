'use client';

import type { ReactNode } from 'react';
import { showDemoNotice } from '@/components/demos/DemoNotice';

export default function TrialButton({ className, children, plan }: { className: string; children: ReactNode; plan?: string }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() =>
        showDemoNotice(
          plan
            ? `Num site real, aqui começaria a matrícula no plano ${plan}.`
            : 'Num site real, a aula experimental seria agendada e confirmada por WhatsApp.',
        )
      }
    >
      {children}
    </button>
  );
}
