"use client";

interface ClockAnimatedProps {
  className?: string;
}

export default function ClockAnimated({ className = "" }: ClockAnimatedProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Clock face */}
      <circle cx="12" cy="12" r="10" />

      {/* Hands (rotating) */}
      <g className="origin-center motion-safe:animate-spin motion-safe:[animation-duration:6s]">
        <line x1="12" y1="12" x2="12" y2="7" />
        <line x1="12" y1="12" x2="16" y2="12" />
      </g>
    </svg>
  );
}
