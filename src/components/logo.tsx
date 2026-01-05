
import { cn } from "@/lib/utils";

export function AppLogo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={cn("w-16 h-16", className)}
    >
      <defs>
        <linearGradient id="swoosh-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "hsl(var(--primary))", stopOpacity: 0.8 }} />
          <stop offset="100%" style={{ stopColor: "hsl(var(--accent))", stopOpacity: 1 }} />
        </linearGradient>
         <linearGradient id="bowl-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: "hsl(var(--primary))", stopOpacity: 0.2 }} />
          <stop offset="100%" style={{ stopColor: "hsl(var(--primary))", stopOpacity: 0.05 }} />
        </linearGradient>
      </defs>
      
      {/* Outer Circle */}
      <circle cx="50" cy="35" r="28" fill="none" stroke="hsl(var(--primary))" strokeWidth="3" opacity="0.6"/>

      {/* Toilet Base */}
      <path d="M 30 95 Q 50 100 70 95 L 75 60 Q 50 70 25 60 Z" fill="hsl(var(--primary))" fillOpacity="0.7"/>
      <rect x="22" y="55" width="56" height="8" rx="2" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="1" />

      {/* Toilet Bowl with Gradient */}
      <path d="M 25 60 C 25 45, 75 45, 75 60" fill="url(#bowl-gradient)" />
      
      {/* Circuit pattern */}
      <g stroke="hsl(var(--primary))" strokeWidth="0.7" fill="none" opacity="0.7">
        <path d="M40 52 L 45 48 L 50 52 L 55 48 L 60 52"/>
        <path d="M45 48 L 48 44"/>
        <path d="M55 48 L 52 44"/>
        <circle cx="40" cy="52" r="1.5" fill="hsl(var(--primary))" stroke="none"/>
        <circle cx="45" cy="48" r="1.5" fill="hsl(var(--primary))" stroke="none"/>
        <circle cx="50" cy="52" r="1.5" fill="hsl(var(--primary))" stroke="none"/>
        <circle cx="55" cy="48" r="1.5" fill="hsl(var(--primary))" stroke="none"/>
        <circle cx="60" cy="52" r="1.5" fill="hsl(var(--primary))" stroke="none"/>
        <circle cx="48" cy="44" r="1.5" fill="hsl(var(--primary))" stroke="none"/>
        <circle cx="52" cy="44" r="1.5" fill="hsl(var(--primary))" stroke="none"/>
      </g>
      
      {/* Health Cross */}
      <g fill="hsl(var(--primary))" opacity="0.9">
        <rect x="45" y="20" width="10" height="30" rx="2"/>
        <rect x="35" y="30" width="30" height="10" rx="2"/>
      </g>
      
      {/* Swoosh */}
      <path 
        d="M 32 38 Q 50 28 68 38" 
        fill="none" 
        stroke="url(#swoosh-gradient)" 
        strokeWidth="4" 
        strokeLinecap="round"
      />

      {/* Signal Waves */}
      <g fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="2.5" strokeLinecap="round" opacity="0.5">
          <path d="M 20 70 A 20 20 0 0 1 20 85" />
          <path d="M 15 65 A 25 25 0 0 1 15 90" />
          <path d="M 80 70 A 20 20 0 0 0 80 85" />
          <path d="M 85 65 A 25 25 0 0 0 85 90" />
      </g>
    </svg>
  );
}
