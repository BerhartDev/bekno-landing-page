import { ReactNode } from 'react';

interface HeadingProps {
  children: ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

export default function Heading({ children, level, className = '' }: HeadingProps) {
  const levelClasses = {
    1: 'text-5xl md:text-7xl mb-6',
    2: 'text-3xl md:text-4xl mb-6',
    3: 'text-2xl mb-4',
    4: 'text-xl mb-3',
    5: 'text-lg mb-2',
    6: 'text-base mb-2'
  };

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag className={`font-bold tracking-[-0.035em] ${levelClasses[level]} ${className}`}>
      {children}
    </Tag>
  );
}
