interface BrandLogoProps {
  size?: "sm" | "md";
}

export default function BrandLogo({ size = "md" }: BrandLogoProps) {
  const boxSize = size === "sm" ? "h-7 w-7 text-xs" : "h-8 w-8 text-sm";
  const textSize = size === "sm" ? "text-base" : "text-lg";

  return (
    <a href="#home" className="flex items-center gap-2" aria-label="Dev Stack home">
      <span
        className={`brand-gradient-bg flex ${boxSize} shrink-0 items-center justify-center rounded-lg font-bold text-white`}
      >
        DS
      </span>
      <span className={`${textSize} font-extrabold tracking-tight text-ink`}>
        Dev <span className="brand-gradient-text">Stack</span>
      </span>
    </a>
  );
}