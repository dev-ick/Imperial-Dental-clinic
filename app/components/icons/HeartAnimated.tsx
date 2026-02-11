"use client";

import { Heart } from "lucide-react";

interface HeartAnimatedProps {
  className?: string;
}

export default function HeartAnimated({ className="" }: HeartAnimatedProps) {
  return (
    <div className={className}>
      <Heart
        className="w-full h-full transition-transform duration-300"
        style={{ animation: "heartbeat 1s ease-in-out infinite" }}
      />
      <style jsx>{`
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.2); }
          50% { transform: scale(1); }
          75% { transform: scale(1.2); }
        }

        /* Optional hover effect to slightly enlarge on hover */
        div:hover :global(svg) {
          transform: scale(1.3);
        }
      `}</style>
    </div>
  );
}
