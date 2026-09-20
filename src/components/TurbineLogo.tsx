import React from 'react';

interface TurbineLogoProps {
  className?: string;
  size?: number;
  animate?: boolean;
  glow?: boolean;
}

export const TurbineLogo: React.FC<TurbineLogoProps> = ({
  className = "w-6 h-6",
  size = 24,
  animate = false,
  glow = false
}) => {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      {glow && (
        <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-md animate-pulse" />
      )}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`relative z-10 transition-transform ${animate ? 'animate-spin-slow' : ''}`}
      >
        <defs>
          <linearGradient id="turbine-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
          <linearGradient id="turbine-grad-soft" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>

        {/* 6 Curved overlapping turbine blades */}
        <path
          d="M50 50 C45 35 30 20 50 10 C62 25 58 40 50 50 Z"
          fill="url(#turbine-grad-1)"
          opacity="0.95"
        />
        <path
          d="M50 50 C62 42 78 35 85 52 C70 58 58 52 50 50 Z"
          fill="url(#turbine-grad-soft)"
          opacity="0.9"
        />
        <path
          d="M50 50 C58 65 65 80 48 88 C40 72 45 58 50 50 Z"
          fill="url(#turbine-grad-1)"
          opacity="0.95"
        />
        <path
          d="M50 50 C38 58 22 65 15 48 C30 42 42 48 50 50 Z"
          fill="url(#turbine-grad-soft)"
          opacity="0.9"
        />
        <path
          d="M50 50 C40 35 25 35 28 20 C42 22 46 36 50 50 Z"
          fill="url(#turbine-grad-1)"
          opacity="0.85"
        />
        <path
          d="M50 50 C60 65 75 65 72 80 C58 78 54 64 50 50 Z"
          fill="url(#turbine-grad-soft)"
          opacity="0.85"
        />
        {/* Center core ring */}
        <circle cx="50" cy="50" r="10" fill="#ffffff" />
        <circle cx="50" cy="50" r="6" fill="#3b82f6" />
      </svg>
    </div>
  );
};
