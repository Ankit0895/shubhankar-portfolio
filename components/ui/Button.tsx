import type { ReactNode } from "react";

type ButtonVariant = "solid" | "outline" | "cream" | "soon";
type ButtonSize = "sm" | "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  solid: "bg-ink text-paper border border-ink",
  outline: "bg-transparent text-ink border border-ink",
  cream: "bg-transparent text-accent border border-cream",
  soon: "bg-transparent text-slate border border-line",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-2 text-sm gap-2",
  md: "px-6 py-3 text-base gap-3",
  lg: "px-8 py-4 text-[15px] font-semibold tracking-[0.5px] gap-3",
};

export function Pill({
  href,
  children,
  variant = "solid",
  size = "md",
  icon,
  className = "",
}: {
  href?: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  className?: string;
}) {
  const classes = `inline-flex items-center justify-center rounded-full whitespace-nowrap ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (!href) {
    return (
      <span className={`${classes} cursor-default`}>
        {children}
        {icon}
      </span>
    );
  }

  if (variant === "solid") {
    return (
      <a href={href} className={`${classes} group`}>
        <span className="relative inline-block overflow-hidden">
          <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
            {children}
          </span>
          <span
            aria-hidden
            className="absolute inset-x-0 top-full block transition-transform duration-300 ease-out group-hover:-translate-y-full"
          >
            {children}
          </span>
        </span>
        {icon}
      </a>
    );
  }

  return (
    <a href={href} className={`${classes} transition-opacity hover:opacity-80`}>
      {children}
      {icon}
    </a>
  );
}
