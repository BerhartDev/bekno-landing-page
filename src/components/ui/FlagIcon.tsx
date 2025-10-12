import Image from 'next/image';

interface FlagIconProps {
  country: 'br' | 'fr' | 'au';
  className?: string;
}

export default function FlagIcon({ country, className = '' }: FlagIconProps) {
  const flagImages = {
    br: '/flags/brazil.png',
    fr: '/flags/france.png',
    au: '/flags/australia.png'
  };

  return (
    <Image
      src={flagImages[country]}
      alt={`${country} flag`}
      width={24}
      height={16}
      className={`rounded-sm ${className}`}
    />
  );
}
