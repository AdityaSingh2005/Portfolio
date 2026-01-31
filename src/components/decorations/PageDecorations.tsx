"use client";

import React from "react";

/**
 * Scrollable decorative images (graffiti-style) on left/right.
 * Each decoration is tall and scrolls with the page — its start appears in one
 * section and its end in another, so they feel continuous across sections.
 * Use your own images via src props (e.g. from /public/decorations/).
 */

// Graffiti-style leafy vine SVG — tall so it can span sections
function LeafVineSvg({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 400"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      preserveAspectRatio="xMidYMin meet"
      aria-hidden
    >
      <path d="M60 0 Q20 80 50 120 Q80 160 40 200 Q10 240 55 280 Q90 320 35 360 Q5 400 60 400" />
      <path d="M60 40 Q85 70 70 100 Q55 130 75 160 Q95 190 65 220" />
      <path d="M60 120 Q25 150 45 190 Q65 230 30 270" />
      <path d="M60 200 Q95 230 80 270 Q65 310 90 350" />
      <ellipse cx="50" cy="80" rx="12" ry="18" transform="rotate(-20 50 80)" />
      <ellipse cx="75" cy="140" rx="12" ry="18" transform="rotate(25 75 140)" />
      <ellipse cx="35" cy="220" rx="12" ry="18" transform="rotate(-15 35 220)" />
      <ellipse cx="85" cy="300" rx="12" ry="18" transform="rotate(20 85 300)" />
    </svg>
  );
}

// Graffiti-style cat in basket with rope (right side)
function CatBasketSvg({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 140 220"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      preserveAspectRatio="xMidYMin meet"
      aria-hidden
    >
      <path d="M20 120 L30 180 L110 180 L120 120 Z" />
      <path d="M30 140 L110 140 M40 155 L100 155 M50 170 L90 170" />
      <path d="M70 0 L70 50 Q70 90 70 120" strokeDasharray="4 3" />
      <ellipse cx="70" cy="155" rx="28" ry="22" />
      <circle cx="60" cy="145" r="6" fill="currentColor" />
      <circle cx="80" cy="145" r="6" fill="currentColor" />
      <path d="M55 135 Q50 125 55 120 M85 135 Q90 125 85 120" />
      <path d="M45 160 Q40 165 42 170 M95 160 Q100 165 98 170" />
      <path d="M70 175 Q65 185 70 190 Q75 185 70 175" />
    </svg>
  );
}

// Second vine variant
function LeafVineSvgAlt({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 350"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      preserveAspectRatio="xMidYMin meet"
      aria-hidden
    >
      <path d="M50 0 Q80 60 45 110 Q15 160 55 210 Q85 260 40 310 Q10 350 50 350" />
      <ellipse cx="65" cy="50" rx="10" ry="16" transform="rotate(15 65 50)" />
      <ellipse cx="30" cy="160" rx="10" ry="16" transform="rotate(-25 30 160)" />
      <ellipse cx="70" cy="260" rx="10" ry="16" transform="rotate(10 70 260)" />
    </svg>
  );
}

type TallDecorationProps = {
  src?: string;
  alt?: string;
  children?: React.ReactNode;
  className?: string;
  /** Height of this decoration (e.g. "150vh") so it spans multiple sections */
  height: string;
  /** Top offset (e.g. "0", "80vh") so it starts at different scroll positions */
  top: string;
};

function TallDecoration({
  src,
  alt = "",
  children,
  className = "",
  height,
  top,
}: TallDecorationProps) {
  const wrapperClass = `absolute left-0 w-full px-2 md:px-4 ${className}`;
  const innerClass =
    "text-amber-200/50 w-full select-none dark:text-amber-900/40";

  if (src) {
    return (
      <div
        className={wrapperClass}
        style={{ top, height }}
      >
        <img
          src={src}
          alt={alt}
          className={`h-full w-auto object-contain object-top opacity-80 ${innerClass}`}
          draggable={false}
        />
      </div>
    );
  }
  return (
    <div
      className={wrapperClass}
      style={{ top, height }}
    >
      <div className={`flex h-full w-full items-start justify-center ${innerClass}`}>
        {children}
      </div>
    </div>
  );
}

function TallDecorationRight({
  src,
  alt = "",
  children,
  className = "",
  height,
  top,
}: TallDecorationProps) {
  const wrapperClass = `absolute right-0 w-full px-2 md:px-4 ${className}`;
  const innerClass =
    "text-amber-200/50 w-full select-none dark:text-amber-900/40";

  if (src) {
    return (
      <div
        className={wrapperClass}
        style={{ top, height }}
      >
        <img
          src={src}
          alt={alt}
          className={`h-full w-auto object-contain object-top opacity-80 ${innerClass}`}
          draggable={false}
        />
      </div>
    );
  }
  return (
    <div
      className={wrapperClass}
      style={{ top, height }}
    >
      <div className={`flex h-full w-full items-start justify-center ${innerClass}`}>
        {children}
      </div>
    </div>
  );
}

export default function PageDecorations() {
  return (
    <>
      {/* Left column: full content height, decorations at different top + tall height so they scroll through sections */}
      <div
        className="pointer-events-none absolute left-0 top-0 bottom-0 z-0 w-[140px] md:w-[180px]"
        aria-hidden
      >
        <TallDecoration top="0" height="160vh" className="left-0">
          <LeafVineSvg className="h-full w-auto" />
        </TallDecoration>
        <TallDecoration top="120vh" height="140vh" className="left-0">
          <LeafVineSvgAlt className="h-full w-auto scale-y-90" />
        </TallDecoration>
      </div>

      {/* Right column: same idea — cat/basket + vine that span sections */}
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0 z-0 w-[140px] md:w-[180px]"
        aria-hidden
      >
        <TallDecorationRight top="-15vh" height="130vh">
          <CatBasketSvg className="h-full w-auto" />
        </TallDecorationRight>
        <TallDecorationRight top="75vh" height="150vh">
          <LeafVineSvg className="h-full w-auto -scale-x-100" />
        </TallDecorationRight>
      </div>
    </>
  );
}
