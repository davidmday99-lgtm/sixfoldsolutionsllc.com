"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { businessInfo, navigation } from "../config";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="utility-bar">
        <div className="shell utility-inner">
          <p>Commercial marine delivery • Alton, Illinois</p>
          <p className="utility-contact">
            {businessInfo.phone ? (
              <a href={`tel:${businessInfo.phone.replace(/[^+\d]/g, "")}`}>
                Dispatch: {businessInfo.phone}
              </a>
            ) : (
              "Dispatch contact available soon"
            )}
          </p>
        </div>
      </div>
      <div className="shell nav-inner">
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
          <Image
            className="brand-logo"
            src="/six-fold-logo.png"
            alt="Six Fold Solutions LLC"
            width={2000}
            height={800}
            priority
          />
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
          <Link className="nav-cta" href="/request-delivery">
            Request Delivery <span aria-hidden="true">→</span>
          </Link>
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className={`mobile-nav ${open ? "is-open" : ""}`}
        aria-label="Mobile navigation"
      >
        <div className="shell mobile-nav-inner">
          {navigation.map((item) => (
            <Link href={item.href} key={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link
            className="nav-cta"
            href="/request-delivery"
            onClick={() => setOpen(false)}
          >
            Request Delivery <span aria-hidden="true">→</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
