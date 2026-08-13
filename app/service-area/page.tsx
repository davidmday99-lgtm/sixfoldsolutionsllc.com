import type { Metadata } from "next";
import { CTAButton } from "../components/CTAButton";
import { PageHero } from "../components/PageHero";
import { ServiceAreaVisual } from "../components/ServiceAreaVisual";

export const metadata: Metadata = {
  title: "Mississippi River Service Area",
  description:
    "Marine and vessel delivery support from Alton, Illinois for customers in the surrounding Mississippi River region.",
};

export default function ServiceAreaPage() {
  return (
    <>
      <PageHero eyebrow="SERVICE AREA" title="Mississippi River Delivery Service from Alton, Illinois">
        <p>
          Six Fold Solutions serves vessels and crews operating in the
          surrounding Mississippi River area, with each request reviewed for
          location, access, and current availability.
        </p>
      </PageHero>
      <section className="section service-area-page">
        <div className="shell area-page-grid">
          <ServiceAreaVisual />
          <div>
            <p className="eyebrow">CENTERED IN ALTON</p>
            <h2>Local shoreside support for working river vessels.</h2>
            <p>
              Our Alton base provides a practical starting point for serving
              commercial marine customers in the surrounding Mississippi River
              region. We coordinate local pickup and delivery to agreed accessible
              docks, terminals, landings, or meeting points.
            </p>
            <p>
              Exact service locations depend on the details of the request. This
              page is ready to be expanded with confirmed cities, terminals, docks,
              and service zones as the business defines them.
            </p>
            <div className="area-callout">
              <strong>Outside our normal area?</strong>
              <span>Contact us. We may still be able to help.</span>
            </div>
            <CTAButton href="/request-delivery">Check Your Request</CTAButton>
          </div>
        </div>
      </section>
      <section className="access-section">
        <div className="shell access-grid">
          <div>
            <p className="eyebrow eyebrow-light">DELIVERY ACCESS</p>
            <h2>Every delivery point is confirmed before service.</h2>
          </div>
          <p>
            Provide the vessel name, dock or terminal details, desired meeting
            point, requested timing, and any relevant access instructions. Six
            Fold will review the information and coordinate the agreed handoff.
          </p>
        </div>
      </section>
    </>
  );
}

