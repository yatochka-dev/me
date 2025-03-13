"use client";

interface AnimatedMenuIconProps {
  isMenuOpen: boolean;
  className?: string;
  strokeWidth?: number;
  size?: number;
  color?: string;
}

export function AnimatedMenuIcon({
  isMenuOpen,
  // className,
  strokeWidth = 2,
  size = 24,
  color = "currentColor",
}: AnimatedMenuIconProps) {
  return (
    <div
      style={{
        width: size,
        height: size,
        position: "relative",
      }}
    >
      {/* Top line */}
      <div
        className="absolute left-0 right-0 transition-transform duration-300 ease-in-out"
        style={{
          height: strokeWidth,
          backgroundColor: color,
          borderRadius: strokeWidth,
          top: size * 0.25 - strokeWidth / 2,
          transform: isMenuOpen
            ? `translateY(${size * 0.25}px) rotate(45deg)`
            : "translateY(0) rotate(0)",
          transformOrigin: "center",
        }}
      />

      {/* Middle line */}
      <div
        className="absolute left-0 right-0 transition-all duration-300 ease-in-out"
        style={{
          height: strokeWidth,
          backgroundColor: color,
          borderRadius: strokeWidth,
          top: size * 0.5 - strokeWidth / 2,
          opacity: isMenuOpen ? 0 : 1,
          transform: isMenuOpen ? "scaleX(0)" : "scaleX(1)",
          transformOrigin: "center",
        }}
      />

      {/* Bottom line */}
      <div
        className="absolute left-0 right-0 transition-transform duration-300 ease-in-out"
        style={{
          height: strokeWidth,
          backgroundColor: color,
          borderRadius: strokeWidth,
          top: size * 0.75 - strokeWidth / 2,
          transform: isMenuOpen
            ? `translateY(-${size * 0.25}px) rotate(-45deg)`
            : "translateY(0) rotate(0)",
          transformOrigin: "center",
        }}
      />
    </div>
  );
}
