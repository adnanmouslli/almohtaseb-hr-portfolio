import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ShiftIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
      <path d="M3 12h1.5M19.5 12H21M12 3v1.5M12 19.5V21" />
    </svg>
  );
}

export function KpiIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 3v18h18" />
      <path d="M7 15l3-3 3 3 5-5" />
      <path d="M18 10h3v3" />
    </svg>
  );
}

export function RecruitmentIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="10" cy="8" r="3.5" />
      <path d="M3.5 20c.8-3.2 3.4-5.2 6.5-5.2s5.7 2 6.5 5.2" />
      <path d="M18 4l3 3m0-3l-3 3" />
    </svg>
  );
}

export function BranchIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="9" width="7" height="11" rx="1.5" />
      <rect x="14" y="4" width="7" height="16" rx="1.5" />
      <path d="M6 13h1M6 16h1M17 8h1M17 12h1M17 16h1" />
    </svg>
  );
}

export function TransactionIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h13l-3-3M20 17H7l3 3" />
      <circle cx="18" cy="7" r="2" />
      <circle cx="6" cy="17" r="2" />
    </svg>
  );
}

export function PayrollIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M6 9h1M6 15h1M17 9h1M17 15h1" />
    </svg>
  );
}

export function NotificationIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 9a6 6 0 1 1 12 0v4l1.5 3h-15L6 13V9z" />
      <path d="M10 19a2 2 0 0 0 4 0" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12l5 5L20 6" />
    </svg>
  );
}

export function FingerprintIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6.5 15.5c.7-3 .5-5.5.5-6a5 5 0 0 1 10 0c0 2.5-.2 5-1 7.5" />
      <path d="M9 19c1-2 1.5-4.5 1.5-6a1.5 1.5 0 0 1 3 0c0 1.5-.3 3-1 4.5" />
      <path d="M4 11c.3-2 1.5-3.8 3-5" />
      <path d="M20 10c-.3-1.5-1-3-2-4" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function LightningIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z" />
    </svg>
  );
}

export function SparklesIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3z" />
      <path d="M19 15l.8 1.8L21.5 17.5l-1.7.7L19 20l-.8-1.8L16.5 17.5l1.7-.7L19 15z" />
    </svg>
  );
}

export function ArrowIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M14 5l-7 7 7 7" />
      <path d="M7 12h14" />
    </svg>
  );
}
