import type { Metadata } from "next";
import Link from "next/link";
import { businessInfo, siteUrl } from "../../config";

const title = "What to Include in a Shoreside Delivery Request";
const description =
  "Six practical details that help shoreside pickup and delivery requests move smoothly for barges, towboats, vessels, and marine crews.";
const articleUrl = `${siteUrl}/blog/what-to-include-in-a-shoreside-delivery-request`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: articleUrl },
  openGraph: {
    type: "article",
    url: articleUrl,
    title,
    description,
    publishedTime: "2026-08-13",
    authors: [businessInfo.ownerName],
    images: ["/og-v2.png"],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: title,
  description,
  datePublished: "2026-08-13",
  dateModified: "2026-08-13",
  mainEntityOfPage: articleUrl,
  image: `${siteUrl}/og-v2.png`,
  author: { "@type": "Person", name: businessInfo.ownerName },
  publisher: { "@type": "Organization", name: businessInfo.companyName },
};

export default function DeliveryRequestArticle() {
  return (
    <>
      <article>
        <header className="page-hero article-hero">
          <div className="page-hero-grid" aria-hidden="true" />
          <div className="shell page-hero-inner">
            <div className="blog-meta">
              <time dateTime="2026-08-13">August 13, 2026</time>
              <span>Operations</span>
              <span>6 minute read</span>
            </div>
            <h1>{title}</h1>
            <p className="page-hero-copy">
              Clear information at the start helps a local pickup and vessel
              handoff stay on course.
            </p>
          </div>
        </header>

        <section className="section article-section">
          <div className="shell article-layout">
            <div className="article-prose">
              <p>
                Shoreside delivery can be a simple way to get provisions,
                parts, tools, and other requested items to a commercial vessel.
                The process works best when the person handling the pickup has
                a complete picture of what is needed, where it is coming from,
                and how the final handoff should happen.
              </p>

              <h2>When Time Matters, Clarity Wins</h2>
              <p>
                River operations are constantly moving. Crew schedules change,
                vendors have different pickup procedures, and not every dock or
                terminal has the same access rules. A short but complete request
                gives the delivery provider what they need to confirm the job,
                identify questions early, and coordinate an accessible meeting
                point.
              </p>
              <p>
                Before making a request, gather the following six details. They
                can prevent extra calls and help everyone work from the same
                plan.
              </p>

              <h2>Six Details to Include</h2>

              <h3>1. Vessel or tow name</h3>
              <p>
                Start with the name of the vessel, towboat, barge operation, or
                company receiving the delivery. If there is a unit number or
                other identifier the driver will need, include that too.
              </p>

              <h3>2. A specific item list</h3>
              <p>
                List the item, quantity, size, model, or part number whenever
                possible. For groceries and provisions, note whether reasonable
                substitutions are acceptable. For parts or equipment, confirm
                specifications before the pickup begins.
              </p>

              <h3>3. Vendor and order information</h3>
              <p>
                Provide the business name, street address, pickup contact, order
                number, and whether the items have already been paid for. If
                several locations are involved, list them in the preferred
                pickup order.
              </p>

              <h3>4. The delivery point and access instructions</h3>
              <p>
                Name the agreed dock, terminal, landing, or shoreside meeting
                point. Include gate instructions, site contacts, parking or
                check-in requirements, and any known restrictions. Delivery
                arrangements should always use a safe, legal, and accessible
                handoff location.
              </p>

              <h3>5. Timing and operational constraints</h3>
              <p>
                Share the requested delivery window and any schedule factors
                that could affect it. If the need is urgent, say so immediately.
                Availability, vendor hours, distance, access, and current
                conditions all play a part in confirming realistic timing.
              </p>

              <h3>6. A reachable contact</h3>
              <p>
                Give the name and phone number of someone who can answer
                questions during pickup and delivery. A direct contact is
                especially important if the vessel position, access point, or
                handoff time may change.
              </p>

              <div className="article-callout">
                A complete request should answer four questions: What are we
                picking up? Where is it? Where is it going? Who can confirm the
                handoff?
              </div>

              <h2>Confirm Scope Before the Pickup</h2>
              <p>
                Every request is different. Item size and weight, purchase
                requirements, travel distance, vendor timing, and site access
                can all affect whether and how a delivery can be completed.
                Confirming those details before the driver heads out protects
                the schedule and helps avoid surprises at the delivery point.
              </p>

              <h2>A Local Shoreside Contact</h2>
              <p>
                Six Fold Solutions LLC supports barges, towboats, vessels, and
                marine crews in the Mississippi River region surrounding Alton,
                Illinois. Jason Thompson provides one point of contact for
                coordinated local pickups and agreed shoreside deliveries.
              </p>
              <p>
                If you have an upcoming need, send the details you already have.
                Six Fold can review the request, ask any necessary questions,
                and confirm current availability.
              </p>

              <div className="article-byline">
                Written by <strong>{businessInfo.ownerName}</strong>, owner of
                Six Fold Solutions LLC.
              </div>
            </div>

            <aside className="article-aside" aria-label="Request delivery">
              <p className="eyebrow eyebrow-light">NEED A DELIVERY?</p>
              <h2>Send Six Fold the Details</h2>
              <p>
                Tell Jason what you need picked up, where it needs to go, and
                when you need it.
              </p>
              <Link className="btn btn-primary" href="/request-delivery">
                Request Delivery <span aria-hidden="true">-&gt;</span>
              </Link>
            </aside>
          </div>
        </section>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
    </>
  );
}
