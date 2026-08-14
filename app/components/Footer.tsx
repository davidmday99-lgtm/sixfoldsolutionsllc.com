import Image from "next/image";
import Link from "next/link";
import { businessInfo, navigation } from "../config";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand-block">
          <Link className="brand brand-footer" href="/" scroll={false}>
            <Image
              className="brand-logo brand-logo-footer"
              src="/six-fold-logo.png"
              alt="Six Fold Solutions LLC"
              width={2000}
              height={800}
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
                <Link href={item.href} scroll={false}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/privacy" scroll={false}>Privacy Policy</Link>
            </li>
            <li>
              <a
                href="https://www.marinetraffic.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="MarineTraffic (opens in a new tab)"
              >
                MarineTraffic
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2>Request Service</h2>
          <p>{businessInfo.city}, {businessInfo.stateName}</p>
          <p><a href={`tel:${businessInfo.phone.replace(/[^+\d]/g, "")}`}>{businessInfo.phone}</a></p>
          <p><a href={`mailto:${businessInfo.email}`}>{businessInfo.email}</a></p>
          <Link className="footer-cta" href="/request-delivery" scroll={false}>
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
