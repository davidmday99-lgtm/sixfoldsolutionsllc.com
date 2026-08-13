import type { Metadata } from "next";
import { CTAButton } from "../components/CTAButton";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = {
  title: "Marine Delivery Services",
  description:
    "Vessel supplies, crew provisions, parts, equipment, and local pickup support for commercial river vessels around Alton, Illinois.",
};

const services = [
  {
    number: "01",
    title: "Vessel & Crew Supplies",
    intro: "Everyday items that help keep crews supported and vessels supplied.",
    copy: "Six Fold Solutions can coordinate pickup and delivery of requested everyday supplies and operational necessities to an agreed accessible meeting point.",
    examples: ["Personal and crew necessities", "Cleaning and general supplies", "Requested operational items"],
  },
  {
    number: "02",
    title: "Food & Provisions",
    intro: "Local provision pickup shaped around the needs of your crew.",
    copy: "We pick up and deliver requested groceries, prepared food, beverages, and other provisions from local businesses as agreed.",
    examples: ["Groceries and beverages", "Prepared meals", "Requested crew provisions"],
  },
  {
    number: "03",
    title: "Parts & Equipment",
    intro: "A practical local link between your vessel and area suppliers.",
    copy: "Six Fold can pick up requested tools, replacement parts, equipment, and operational supplies from local vendors and bring them to an agreed delivery point.",
    examples: ["Replacement parts", "Tools and equipment", "Operational supplies"],
  },
  {
    number: "04",
    title: "Local Pickup & Delivery",
    intro: "Straightforward coordination across the Alton area.",
    copy: "Pickup can be coordinated from local stores, vendors, suppliers, restaurants, and other businesses serving your request.",
    examples: ["Store and vendor pickup", "Restaurant pickup", "Supplier coordination"],
  },
  {
    number: "05",
    title: "Time-Sensitive Requests",
    intro: "When timing matters, start with a clear conversation.",
    copy: "Customers can contact Six Fold Solutions regarding urgent delivery needs. Availability, timing, access, and request details are confirmed before service is agreed.",
    examples: ["Current availability review", "Pickup and access coordination", "Clear timing expectations"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="MARINE LOGISTICS" title="Delivery Support That Keeps River Operations Moving">
        <p>
          From crew provisions to replacement parts, Six Fold Solutions provides
          practical shoreside pickup and delivery support for commercial river vessels.
        </p>
      </PageHero>
      <section className="section page-intro-section">
        <div className="shell narrow-intro">
          <p className="eyebrow">WHAT WE DO</p>
          <h2>Local support. Clear coordination. Dependable follow-through.</h2>
          <p>
            Every delivery request is different. We confirm the requested items,
            pickup location, accessible delivery point, and expected timing before
            the work is agreed.
          </p>
        </div>
      </section>
      <section className="service-detail-list">
        <div className="shell">
          {services.map((service) => (
            <article className="service-detail" key={service.number}>
              <span className="detail-number">{service.number}</span>
              <div>
                <h2>{service.title}</h2>
                <p className="detail-intro">{service.intro}</p>
              </div>
              <div>
                <p>{service.copy}</p>
                <ul className="check-list">
                  {service.examples.map((example) => <li key={example}>{example}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="inline-cta">
        <div className="shell inline-cta-inner">
          <div>
            <p className="eyebrow eyebrow-light">HAVE A SPECIFIC REQUEST?</p>
            <h2>Tell us what your vessel needs.</h2>
          </div>
          <CTAButton href="/request-delivery">Request Delivery</CTAButton>
        </div>
      </section>
    </>
  );
}

