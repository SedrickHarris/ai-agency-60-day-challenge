import Link from "next/link";
import type { ReactNode } from "react";

type CtaLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function CtaLink({
  href,
  children,
  variant = "primary",
  className = "",
}: CtaLinkProps) {
  return (
    <Link className={`button button--${variant} ${className}`.trim()} href={href}>
      <span>{children}</span>
      <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
        <path d="M4 10h11m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    </Link>
  );
}