import Image from "next/image";
import Link from "next/link";
import { businessInfo, navigation } from "../config";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand-block">
          <Link className="brand brand-footer" href="/">
            <Image
              className="brand-logo brand-logo-footer"
              src="/six-fold-logo.webp"
              alt="Six Fold Solutions LLC"
              width={282}
              height={175}
            />
          </Link>
          <p>
            Mississippi River marine delivery services for barges, towboats,
            vessels, and crews in the surrounding Alton region.
          </p>
          <span className="veteran-label">Veteran Owned &amp; Operated</span>
        </div>

        <div>
          <h2>Company</h2>
          <ul className="footer-links">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2>Request Service</h2>
          <p>{businessInfo.city}, {businessInfo.stateName}</p>
          <p><a href={`tel:${businessInfo.phone.replace(/[^+\d]/g, "")}`}>{businessInfo.phone}</a></p>
          <p><a href={`mailto:${businessInfo.email}`}>{businessInfo.email}</a></p>
          <Link className="footer-cta" href="/request-delivery">
            Start a delivery request <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
      <div className="shell footer-bottom">
        <p>© {new Date().getFullYear()} {businessInfo.companyName}</p>
        <p>Alton, Illinois</p>
      </div>
    </footer>
  );
}
