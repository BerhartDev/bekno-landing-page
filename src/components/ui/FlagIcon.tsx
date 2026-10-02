interface FlagIconProps {
  country: 'br' | 'fr' | 'au';
  className?: string;
}

export default function FlagIcon({ country, className = '' }: FlagIconProps) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  
  const flagImages = {
    br: `${basePath}/flags/brazil.png`,
    fr: `${basePath}/flags/france.png`,
    au: `${basePath}/flags/australia.png`
  };

  return (
    <img
      src={flagImages[country]}
      alt={`${country} flag`}
      width={24}
      height={16}
      className={`rounded-sm ${className}`}
    />
  );
}
