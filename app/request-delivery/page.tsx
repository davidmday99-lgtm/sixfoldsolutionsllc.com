import type { Metadata } from "next";
import { PageHero } from "../components/PageHero";
import { DeliveryForm } from "./DeliveryForm";

export const metadata: Metadata = {
  title: "Request a Delivery",
  description:
    "Request vessel supply pickup and delivery service from Six Fold Solutions in the Alton, Illinois Mississippi River region.",
  alternates: { canonical: "/request-delivery" },
};

export default function RequestDeliveryPage() {
  return (
    <>
      <PageHero eyebrow="REQUEST SERVICE" title="Tell Us What Your Vessel Needs">
        <p>
          Share the request details below. The form prepares an email to Six Fold
          with the items, locations, access, and timing in one clear message.
        </p>
      </PageHero>
      <section className="section request-section">
        <div className="shell request-grid">
          <DeliveryForm />
          <aside className="request-aside">
            <p className="eyebrow eyebrow-light">BEFORE YOU SUBMIT</p>
            <h2>Helpful details make coordination easier.</h2>
            <ul>
              <li>Vessel or towboat name</li>
              <li>Exact requested items and quantities</li>
              <li>Pickup business or vendor</li>
              <li>Accessible delivery or meeting point</li>
              <li>Preferred date and timing</li>
              <li>Dock, terminal, or access instructions</li>
            </ul>
            <div className="aside-note">
              <strong>Time-sensitive request?</strong>
              <p>Prepare and send the delivery email so the request can be reviewed. Delivery timing is confirmed only after coordination.</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
