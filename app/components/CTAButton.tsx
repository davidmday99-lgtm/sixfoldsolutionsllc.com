import Link from "next/link";
import { businessInfo } from "../config";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light";
  className?: string;
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
}: CTAButtonProps) {
  const styles = {
    primary: "btn btn-primary",
    secondary: "btn btn-secondary",
    light: "btn btn-light",
  };

  return (
    <Link className={`${styles[variant]} ${className}`} href={href}>
      <span>{children}</span>
      <span aria-hidden="true">→</span>
    </Link>
  );
}

export function CallButton({
  compact = false,
  light = false,
}: {
  compact?: boolean;
  light?: boolean;
}) {
  const href = businessInfo.phone
    ? `tel:${businessInfo.phone.replace(/[^+\d]/g, "")}`
    : "/contact#contact-details";

  return (
    <Link
      className={`${compact ? "call-link-compact" : "btn"} ${
        light ? "btn-light" : "btn-secondary"
      }`}
      href={href}
      aria-label={
        businessInfo.phone
          ? `Call ${businessInfo.companyName} at ${businessInfo.phone}`
          : "View Six Fold Solutions contact information"
      }
    >
      <span aria-hidden="true">{compact ? "Call" : "Call Six Fold"}</span>
      {!compact && <span aria-hidden="true">↗</span>}
    </Link>
  );
}

