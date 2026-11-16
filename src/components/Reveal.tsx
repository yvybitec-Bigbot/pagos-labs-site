import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/**
 * Section wrapper. Content stays visible in the static HTML, without JS,
 * and in full-page captures. Kept as a named component so motion can be
 * reintroduced later without touching every section.
 */
export function Reveal({ children, className }: Props) {
  return <div className={className}>{children}</div>;
}
