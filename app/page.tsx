import Image from "next/image";
import { CallButton, CTAButton } from "./components/CTAButton";
import { ServiceAreaVisual } from "./components/ServiceAreaVisual";

const services = [
  {
    number: "01",
    title: "Vessel & Crew Supplies",
    copy: "Requested everyday supplies and operational necessities delivered to an agreed access point.",
  },
  {
    number: "02",
    title: "Food & Provisions",
    copy: "Groceries, prepared food, beverages, and other provisions picked up for vessels and crews.",
  },
  {
    number: "03",
    title: "Parts & Equipment",
    copy: "Tools, replacement parts, equipment, and operational supplies from local vendors.",
  },
  {
    number: "04",
    title: "Local Pickup & Delivery",
    copy: "Coordinated pickup from local stores, suppliers, restaurants, and businesses.",
  },
  {
    number: "05",
    title: "Urgent Delivery Requests",
    copy: "Contact Six Fold to discuss time-sensitive needs and current service availability.",
  },
];

const features = [
  {
    title: "Local Knowledge",
    copy: "Based in the Alton area with familiarity with the surrounding Mississippi River region.",
  },
  {
    title: "Dependable Service",
    copy: "Clear communication and reliable follow-through from request to delivery.",
  },
  {
    title: "One Point of Contact",
    copy: "Simple coordination for local pickups and vessel deliveries.",
  },
  {
    title: "Veteran Owned",
    copy: "Built around service, responsibility, and accountability.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-image-wrap" aria-hidden="true">
          <Image
            src="/og.png"
            alt=""
            fill
            priority
            sizes="(max-width: 760px) 100vw, 60vw"
            className="hero-image"
          />
          <div className="hero-image-overlay" />
        </div>
        <div className="shell hero-inner">
          <div className="hero-copy">
            <p className="eyebrow eyebrow-light">MISSISSIPPI RIVER • ALTON, IL</p>
            <h1>River Delivery.<br /><em>Done Right.</em></h1>
            <p className="hero-lead">
              Dependable shoreside delivery for barges, towboats and marine
              crews on the Mississippi River.
            </p>
            <p className="hero-support">
              Based in Alton, Illinois, Six Fold Solutions LLC helps keep river
              operations moving by delivering requested supplies, provisions,
              parts and other essential items to vessels and crews.
            </p>
            <div className="button-row">
              <CTAButton href="/request-delivery">Request a Delivery</CTAButton>
              <CallButton light />
            </div>
          </div>
        </div>
        <div className="trust-strip">
          <div className="shell trust-inner">
            <span>Veteran Owned</span><i />
            <span>Alton, Illinois</span><i />
            <span>Serving the Mississippi River</span>
          </div>
        </div>
      </section>

      <section className="section services-preview">
        <div className="shell">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">SHORESIDE LOGISTICS</p>
              <h2>What We Deliver</h2>
            </div>
            <p>
              Practical local support for the supplies, provisions, parts, and
              pickups your vessel operation needs.
            </p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <span className="card-number">{service.number}</span>
                <div className="service-card-rule" />
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
              </article>
            ))}
          </div>
          <div className="inline-link-wrap">
            <CTAButton href="/services" variant="secondary">View All Services</CTAButton>
          </div>
        </div>
      </section>

      <section className="section how-section">
        <div className="shell">
          <div className="section-heading center-heading">
            <p className="eyebrow">HOW IT WORKS</p>
            <h2>Simple. Fast. Dependable.</h2>
          </div>
          <ol className="steps-grid">
            <li>
              <span>1</span>
              <h3>Tell Us What You Need</h3>
              <p>
                Call or submit a request with the vessel name, requested items,
                pickup location, and delivery point.
              </p>
            </li>
            <li>
              <span>2</span>
              <h3>We Handle the Pickup</h3>
              <p>
                Six Fold Solutions coordinates the local pickup or purchase as
                agreed.
              </p>
            </li>
            <li>
              <span>3</span>
              <h3>We Bring It To You</h3>
              <p>
                Delivery is made to the agreed accessible dock, terminal,
                landing, or meeting point.
              </p>
            </li>
          </ol>
          <div className="center-action">
            <CTAButton href="/request-delivery">Request Delivery</CTAButton>
          </div>
        </div>
      </section>

      <section className="veteran-section">
        <div className="shell veteran-grid">
          <div className="veteran-badge" aria-hidden="true">
            <span>USMC</span>
            <strong>VETERAN<br />OWNED</strong>
            <i />
            <small>ALTON, ILLINOIS</small>
          </div>
          <div>
            <p className="eyebrow eyebrow-light">OWNERSHIP & VALUES</p>
            <h2>Veteran Owned.<br /><em>Mission Focused.</em></h2>
            <p>
              Six Fold Solutions LLC is owned and operated by Jason Thompson, a
              United States Marine Corps veteran. Reliability, accountability and
              follow-through are at the center of the way Six Fold serves its
              customers.
            </p>
            <CTAButton href="/about" variant="light">Meet Six Fold</CTAButton>
          </div>
        </div>
      </section>

      <section className="section why-section">
        <div className="shell">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">WHY SIX FOLD</p>
              <h2>Built to Follow Through</h2>
            </div>
            <p>
              Straightforward service for commercial river operators who need
              a dependable local partner on shore.
            </p>
          </div>
          <div className="feature-grid">
            {features.map((feature, index) => (
              <article className="feature-card" key={feature.title}>
                <span aria-hidden="true">0{index + 1}</span>
                <h3>{feature.title}</h3>
                <p>{feature.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section area-section">
        <div className="shell area-grid">
          <div>
            <p className="eyebrow">SERVICE AREA</p>
            <h2>Serving the Mississippi River from Alton, Illinois</h2>
            <p>
              Six Fold Solutions supports marine customers operating in the
              surrounding Mississippi River region. Every request is reviewed
              based on pickup needs, delivery access, location, and current
              availability.
            </p>
            <p className="area-note">
              <strong>Outside our normal area?</strong> Contact us. We may still
              be able to help.
            </p>
            <CTAButton href="/service-area" variant="secondary">Explore Service Area</CTAButton>
          </div>
          <ServiceAreaVisual />
        </div>
      </section>

      <section className="final-cta">
        <div className="shell final-cta-inner">
          <div>
            <p className="eyebrow eyebrow-light">READY WHEN YOU ARE</p>
            <h2>Need Something Delivered<br />to Your Vessel?</h2>
          </div>
          <div className="button-row">
            <CTAButton href="/request-delivery">Request Delivery</CTAButton>
            <CallButton light />
          </div>
        </div>
      </section>
    </>
  );
}
