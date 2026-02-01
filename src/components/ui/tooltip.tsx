"use client";

import React, { useState, useRef, useEffect } from "react";

interface TooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  position?: "top" | "bottom";
  className?: string;
}

export default function Tooltip({
  children,
  content,
  position = "top",
  className = "",
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [tooltipStyle, setTooltipStyle] = useState<React.CSSProperties>({});
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible && triggerRef.current && tooltipRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();

      // Center horizontally on the trigger element
      let x = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;

      // Position above or below based on position prop
      let y =
        position === "top"
          ? triggerRect.top - tooltipRect.height - 12
          : triggerRect.bottom + 12;

      // Keep tooltip within viewport horizontally
      const padding = 16;
      if (x < padding) x = padding;
      if (x + tooltipRect.width > window.innerWidth - padding) {
        x = window.innerWidth - tooltipRect.width - padding;
      }

      // If tooltip goes above viewport, show below
      if (y < padding && position === "top") {
        y = triggerRect.bottom + 12;
      }

      setTooltipStyle({
        left: x,
        top: y,
      });
    }
  }, [isVisible, position]);

  return (
    <div
      ref={triggerRef}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      className={className}
      style={{ display: 'contents' }}
    >
      {children}

      {isVisible && (
        <div
          ref={tooltipRef}
          className="fixed z-50 pointer-events-none animate-fade-in"
          style={tooltipStyle}
        >
          <div className="bg-gray-900 text-white px-4 py-3 rounded-lg shadow-xl max-w-xs backdrop-blur-sm border border-gray-700">
            {content}
          </div>
        </div>
      )}
    </div>
  );
}
