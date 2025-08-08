export default function Logo({ width = 40, height = 40, className = "" }) {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background circle with gradient */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#10b981" floodOpacity="0.3"/>
        </filter>
      </defs>
      
      {/* Main background */}
      <rect 
        width="40" 
        height="40" 
        rx="8" 
        fill="url(#logoGradient)" 
        filter="url(#shadow)"
      />
      
      {/* Lightning bolt */}
      <path 
        d="M24 8L16 20H22L18 32L26 20H20L24 8Z" 
        fill="white" 
        stroke="white" 
        strokeWidth="0.5"
      />
      
      {/* Small electrical spark effects */}
      <circle cx="12" cy="12" r="1" fill="white" opacity="0.8" />
      <circle cx="30" cy="14" r="0.8" fill="white" opacity="0.6" />
      <circle cx="28" cy="28" r="1.2" fill="white" opacity="0.7" />
      <circle cx="14" cy="30" r="0.6" fill="white" opacity="0.5" />
    </svg>
  );
}

// Alternative text-based logo
export function TextLogo({ className = "" }) {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <Logo width={32} height={32} />
      <div>
        <div className="text-lg font-bold text-gray-900 dark:text-white leading-none">
          Tipu Electrics
        </div>
        <div className="text-xs text-gray-600 dark:text-gray-400 leading-none">
          Licensed Contractor
        </div>
      </div>
    </div>
  );
}