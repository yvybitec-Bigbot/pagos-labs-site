import { asset } from "@/lib/paths";

type Props = {
  variant?: "light" | "dark";
  href?: string;
  className?: string;
};

export function Logo({ variant = "dark", href = "#inicio", className = "" }: Props) {
  const src = asset(variant === "light" ? "/icon-light.png" : "/icon-dark.png");
  const word = variant === "light" ? "text-white" : "text-navy";
  const labs = variant === "light" ? "text-cyan" : "text-navy/70";

  const inner = (
    <>
      <img src={src} alt="" width={36} height={36} className="h-9 w-9" />
      <span className={`flex items-baseline gap-1.5 leading-none ${word}`}>
        <span className="text-[1.15rem] font-extrabold tracking-tight">PAGOS</span>
        <span className={`text-[0.7rem] font-semibold tracking-[0.22em] ${labs}`}>
          LABS
        </span>
      </span>
    </>
  );

  const cls = `inline-flex items-center gap-2.5 ${className}`;

  if (href) {
    return (
      <a href={href} className={cls} aria-label="Pagos Labs, ir al inicio">
        {inner}
      </a>
    );
  }

  return <span className={cls}>{inner}</span>;
}
