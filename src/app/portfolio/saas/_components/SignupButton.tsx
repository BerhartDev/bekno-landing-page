'use client';

import type { ReactNode } from 'react';
import { showDemoNotice } from '@/components/demos/DemoNotice';

export default function SignupButton({ className, children }: { className: string; children: ReactNode }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => showDemoNotice('Num site real, aqui abriria o cadastro do teste grátis.')}
    >
      {children}
    </button>
  );
}
