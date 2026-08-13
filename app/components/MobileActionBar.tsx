import Link from "next/link";
import { businessInfo } from "../config";

export function MobileActionBar() {
  const callHref = businessInfo.phone
    ? `tel:${businessInfo.phone.replace(/[^+\d]/g, "")}`
    : "/contact#contact-details";

  return (
    <nav className="mobile-action-bar" aria-label="Quick actions">
      <Link href={callHref}>Call</Link>
      <Link href="/request-delivery">Request Delivery</Link>
    </nav>
  );
}

