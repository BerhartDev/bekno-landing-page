'use client';

export default function AboutIllustration() {
  return (
    <div className="relative w-full h-full">
      <svg width="800" height="600" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        {/* Background Elements */}
        <rect width="800" height="600" fill="#F5F5F5"/>
        <circle cx="400" cy="300" r="250" fill="#E5E5E5"/>
        
        {/* Main Illustration */}
        <g transform="translate(200, 150)">
          {/* Computer Screen */}
          <rect x="0" y="0" width="400" height="300" rx="20" fill="#000000"/>
          <rect x="20" y="20" width="360" height="260" rx="10" fill="#FFFFFF"/>
          
          {/* Code Lines */}
          <g fill="#000000">
            <rect x="40" y="40" width="200" height="10" rx="5"/>
            <rect x="40" y="60" width="150" height="10" rx="5"/>
            <rect x="40" y="80" width="180" height="10" rx="5"/>
            <rect x="40" y="100" width="160" height="10" rx="5"/>
            <rect x="40" y="120" width="140" height="10" rx="5"/>
            <rect x="40" y="140" width="170" height="10" rx="5"/>
            <rect x="40" y="160" width="190" height="10" rx="5"/>
            <rect x="40" y="180" width="130" height="10" rx="5"/>
          </g>
          
          {/* Decorative Elements */}
          <circle cx="350" cy="50" r="20" fill="#FF6B6B"/>
          <circle cx="350" cy="100" r="20" fill="#4ECDC4"/>
          <circle cx="350" cy="150" r="20" fill="#45B7D1"/>
        </g>
      </svg>
    </div>
  );
} 