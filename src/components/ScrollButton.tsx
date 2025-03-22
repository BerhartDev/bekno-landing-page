'use client';

interface ScrollButtonProps {
  sectionId: string;
  className?: string;
  children: React.ReactNode;
}

export default function ScrollButton({ sectionId, className, children }: ScrollButtonProps) {
  const scrollToSection = () => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={scrollToSection}
      className={className}
    >
      {children}
    </button>
  );
} 