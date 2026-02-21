export function MayanDivider({ className = '', flip = false }: { className?: string; flip?: boolean }) {
  return (
    <div className={`w-full overflow-hidden ${className}`} style={flip ? { transform: 'scaleY(-1)' } : undefined}>
      <svg viewBox="0 0 1200 40" className="w-full h-8 md:h-10" preserveAspectRatio="none">
        <defs>
          <linearGradient id="mayanGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="15%" stopColor="#06B6D4" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#06B6D4" stopOpacity="1" />
            <stop offset="85%" stopColor="#06B6D4" stopOpacity="0.6" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <path
          d="M0 20 L200 20 L220 20 L225 15 L230 15 L230 10 L235 10 L235 5 L245 5 L245 10 L250 10 L250 15 L255 15 L260 15 L260 10 L265 10 L265 5 L275 5 L275 10 L280 10 L280 15 L285 15 L290 20 L350 20 L355 15 L360 15 L360 10 L365 10 L365 5 L375 5 L375 10 L380 10 L380 15 L385 15 L390 20 L450 20 L455 15 L460 15 L460 10 L465 10 L465 5 L475 5 L475 10 L480 10 L480 15 L485 15 L490 20 L550 20 L555 15 L560 15 L565 10 L570 10 L575 5 L600 5 L625 5 L630 10 L635 10 L640 15 L645 15 L650 20 L710 20 L715 15 L720 15 L720 10 L725 10 L725 5 L735 5 L735 10 L740 10 L740 15 L745 15 L750 20 L810 20 L815 15 L820 15 L820 10 L825 10 L825 5 L835 5 L835 10 L840 10 L840 15 L845 15 L850 20 L910 20 L915 15 L920 15 L920 10 L925 10 L925 5 L935 5 L935 10 L940 10 L940 15 L945 15 L950 15 L950 10 L955 10 L955 5 L965 5 L965 10 L970 10 L970 15 L975 15 L980 20 L1200 20"
          fill="none"
          stroke="url(#mayanGrad)"
          strokeWidth="1.5"
        />
        <circle cx="600" cy="5" r="3" fill="#06B6D4" opacity="0.8" />
        <rect x="595" y="18" width="10" height="2" rx="1" fill="#06B6D4" opacity="0.4" />
      </svg>
    </div>
  );
}

export function MayanCornerGlyph({ className = '', position = 'left' }: { className?: string; position?: 'left' | 'right' }) {
  const mirror = position === 'right' ? { transform: 'scaleX(-1)' } : undefined;
  return (
    <svg viewBox="0 0 60 60" className={`w-10 h-10 md:w-12 md:h-12 ${className}`} style={mirror}>
      <path d="M5 5 L25 5 L25 15 L15 15 L15 25 L5 25 Z" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <path d="M30 5 L55 5 L55 25 L45 25 L45 15 L30 15 Z" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <path d="M5 30 L15 30 L15 45 L25 45 L25 55 L5 55 Z" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <rect x="20" y="20" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.15" />
      <rect x="25" y="25" width="10" height="10" fill="currentColor" opacity="0.1" />
    </svg>
  );
}

export function MayanStepPattern({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 40" className={`w-16 h-8 ${className}`}>
      <path d="M0 40 L0 30 L10 30 L10 20 L20 20 L20 10 L30 10 L30 0 L50 0 L50 10 L60 10 L60 20 L70 20 L70 30 L80 30 L80 40" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
    </svg>
  );
}

export function MayanBgPattern({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="mayanBg" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M20 0 L20 10 L10 10 L10 20 L0 20" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.06" />
            <path d="M60 0 L60 10 L70 10 L70 20 L80 20" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.06" />
            <path d="M20 80 L20 70 L10 70 L10 60 L0 60" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.06" />
            <path d="M60 80 L60 70 L70 70 L70 60 L80 60" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.06" />
            <rect x="35" y="35" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.04" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#mayanBg)" />
      </svg>
    </div>
  );
}

export function MayanSerpent({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 30" className={`w-40 h-6 ${className}`}>
      <path
        d="M0 15 Q25 5 50 15 Q75 25 100 15 Q125 5 150 15 Q175 25 200 15"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.2"
      />
      <path
        d="M0 15 Q25 5 50 15 Q75 25 100 15 Q125 5 150 15 Q175 25 200 15"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.1"
        strokeDasharray="4 4"
        transform="translate(0, 3)"
      />
    </svg>
  );
}

export function MayanHeadingDecor({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <MayanCornerGlyph className="text-cyan-500" position="left" />
      <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/40 to-transparent" />
    </div>
  );
}

export function MayanPyramidIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 36" className={`w-8 h-7 ${className}`}>
      <path d="M20 2 L10 12 L14 12 L8 22 L12 22 L4 34 L36 34 L28 22 L32 22 L26 12 L30 12 Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <line x1="20" y1="34" x2="20" y2="28" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <line x1="16" y1="34" x2="16" y2="30" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <line x1="24" y1="34" x2="24" y2="30" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
    </svg>
  );
}
