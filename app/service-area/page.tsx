import type { Metadata } from "next";
import { CTAButton } from "../components/CTAButton";
import { PageHero } from "../components/PageHero";
import { ServiceAreaVisual } from "../components/ServiceAreaVisual";

export const metadata: Metadata = {
  title: "Mississippi River Service Area",
  description:
    "Marine and vessel delivery support from Alton, Illinois, including an arranged Wood River delivery point at Upper Mississippi River Mile 198.",
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
              One established delivery point is in Wood River at Upper
              Mississippi River Mile 198. Every delivery is scheduled in advance
              so vessel, timing, facility access, and handoff details can be
              confirmed before arrival.
            </p>
            <div className="delivery-location-card">
              <p className="eyebrow">WOOD RIVER DROP-OFF LOCATION</p>
              <h3>Upper Mississippi River • Mile 198</h3>
              <address>
                150 N. Amoco Cutoff<br />
                Wood River, IL 62095
              </address>
              <p>
                Delivery access and timing must be arranged and confirmed for
                each request.
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=150+N.+Amoco+Cutoff%2C+Wood+River%2C+IL+62095"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open location in Google Maps <span aria-hidden="true">-&gt;</span>
              </a>
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
            Do not arrive at the Wood River location until access and timing have
            been confirmed.
          </p>
        </div>
      </section>
    </>
  );
}

