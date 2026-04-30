import React from 'react';
import { cn } from '@/src/lib/utils';

interface LogoProps {
  className?: string;
  light?: boolean;
}

export default function Logo({ className, light = false }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="relative w-12 h-12 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Arrow Swoosh */}
          <path 
            d="M20 50C25 25 75 25 85 40" 
            stroke={light ? "#ffffff" : "#D32F2F"} 
            strokeWidth="8" 
            strokeLinecap="round" 
            fill="none" 
          />
          {/* Arrow Head */}
          <path 
            d="M82 40L92 45L88 33Z" 
            fill={light ? "#ffffff" : "#D32F2F"} 
          />
          {/* Main "A" overlap styling */}
          <text 
            x="10" 
            y="70" 
            fill={light ? "#ffffff" : "#D32F2F"} 
            style={{ font: 'black 48px sans-serif', fontWeight: 900 }}
          >
            A
          </text>
        </svg>
      </div>
      <div className="flex flex-col -gap-1">
        <span className={cn(
          "text-2xl font-display font-black tracking-tighter uppercase leading-none",
          light ? "text-white" : "text-slate-900"
        )}>
          ARROW
        </span>
        <span className={cn(
          "text-[10px] font-bold tracking-[0.3em] uppercase",
          light ? "text-white/80" : "text-brand-green"
        )}>
          COMPANY
        </span>
      </div>
    </div>
  );
}
