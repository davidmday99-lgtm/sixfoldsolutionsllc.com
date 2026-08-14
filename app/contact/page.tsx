import type { Metadata } from "next";
import Link from "next/link";
import { CTAButton } from "../components/CTAButton";
import { PageHero } from "../components/PageHero";
import { businessInfo } from "../config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Six Fold Solutions LLC in Alton, Illinois about Mississippi River marine delivery service.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="CONTACT SIX FOLD" title="Let’s Talk About Your Delivery Request">
        <p>
          Share the vessel, pickup, delivery point, and requested timing so Six
          Fold can review what is needed.
        </p>
      </PageHero>
      <section className="section contact-section" id="contact-details">
        <div className="shell contact-grid">
          <div>
            <p className="eyebrow">CONTACT DETAILS</p>
            <h2>{businessInfo.companyName}</h2>
            <p className="contact-intro">
              Commercial river vessel delivery support based in Alton, Illinois.
            </p>
            <dl className="contact-list">
              <div>
                <dt>Location</dt>
                <dd>{businessInfo.city}, {businessInfo.stateName}</dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd>
                  {businessInfo.phone ? (
                    <a href={`tel:${businessInfo.phone.replace(/[^+\d]/g, "")}`}>{businessInfo.phone}</a>
                  ) : (
                    <span>To be configured</span>
                  )}
                </dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>
                  {businessInfo.email ? (
                    <a href={`mailto:${businessInfo.email}`}>{businessInfo.email}</a>
                  ) : (
                    <span>To be configured</span>
                  )}
                </dd>
              </div>
            </dl>
          </div>

          <aside className="contact-cta-card">
            <span className="contact-card-number" aria-hidden="true">6F</span>
            <p className="eyebrow eyebrow-light">DELIVERY REQUESTS</p>
            <h2>Have the details ready?</h2>
            <p>
              Use the request form to send vessel, pickup, delivery, timing, and
              item information in one place.
            </p>
            <CTAButton href="/request-delivery">Request Delivery</CTAButton>
            <Link className="text-link-light" href="/services" scroll={false}>
              Review delivery services <span aria-hidden="true">→</span>
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}
