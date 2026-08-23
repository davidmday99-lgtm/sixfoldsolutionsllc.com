import type { Metadata } from "next";
import Link from "next/link";
import { businessInfo, siteUrl } from "../../config";

const title = "Three Official Checks Before You Set a River Delivery Window";
const description =
  "A practical guide to the river forecasts, navigation notices, and survey updates that can change a Mississippi River delivery plan.";
const articleUrl = `${siteUrl}/blog/three-official-checks-before-you-set-a-river-delivery-window`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: articleUrl },
  openGraph: {
    type: "article",
    url: articleUrl,
    title,
    description,
    publishedTime: "2026-08-20",
    authors: [businessInfo.ownerName],
    images: ["/six-fold-cover.png"],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: title,
  description,
  datePublished: "2026-08-20",
  dateModified: "2026-08-20",
  mainEntityOfPage: articleUrl,
  image: `${siteUrl}/six-fold-cover.png`,
  author: { "@type": "Person", name: businessInfo.ownerName },
  publisher: {
    "@type": "Organization",
    name: businessInfo.companyName,
    url: siteUrl,
  },
};

export default function RiverDeliveryWindowArticle() {
  return (
    <>
      <article>
        <header className="page-hero article-hero">
          <div className="page-hero-grid" aria-hidden="true" />
          <div className="shell page-hero-inner">
            <div className="blog-meta">
              <time dateTime="2026-08-20">August 20, 2026</time>
              <span>Planning</span>
              <span>5 minute read</span>
            </div>
            <h1>{title}</h1>
            <p className="page-hero-copy">
              When river levels, channel work, or notices start moving, a delivery plan can move with them.
            </p>
          </div>
        </header>

        <section className="section article-section">
          <div className="shell article-layout">
            <div className="article-prose">
              <p>
                A river delivery window can look straightforward in the morning and feel very different by
                the time a driver is heading toward the dock. Vessel position changes, meeting points shift,
                and river conditions can affect when a handoff is realistic.
              </p>
              <p>
                That is especially true in late summer, when dispatchers and crews may be watching both local
                pool conditions near Alton and downstream conditions on the larger Mississippi system. Before
                you lock in a pickup time or shoreside handoff, it helps to check three official sources.
              </p>

              <h2>Why This Matters Right Now</h2>
              <p>
                Recent public data shows how quickly conditions can change. In National Weather Service
                guidance published on August 15, 2026, the{" "}
                <a
                  href="https://preview-forecast.weather.gov/product.php?issuedby=MIS&product=RVF&site=BOU"
                  target="_blank"
                  rel="noreferrer"
                >
                  Alton 2SE - Melvin Price L&amp;D river forecast
                </a>{" "}
                showed the tailwater stage climbing from 6.6 feet to the mid-14 foot range before easing
                back down in the following days. Around the same period, the U.S. Army Corps of Engineers
                St. Louis District posted{" "}
                <a
                  href="https://www.mvs.usace.army.mil/Missions/Navigation/Surveys/Dredge/"
                  target="_blank"
                  rel="noreferrer"
                >
                  new dredge survey updates for Middle Mississippi reaches and the Melvin Price Pool
                </a>
                , including surveys uploaded on August 19, 2026.
              </p>
              <p>
                Those updates do not tell you whether a local delivery can or cannot happen on their own.
                They do show why timing, access, and vessel location should be confirmed against current river
                information instead of treated as fixed.
              </p>

              <h2>1. Check The River Forecast For The Exact Reach</h2>
              <p>
                Start with the forecast that matches the lock, pool, or meeting area tied to the handoff.
                For Alton-area operations, the Melvin Price gauge is a logical first stop. For trips that
                depend on downstream movement, the National Weather Service also maintains{" "}
                <a
                  href="https://www.weather.gov/lmrfc/obsfcst_mississippi"
                  target="_blank"
                  rel="noreferrer"
                >
                  Lower Mississippi and Lower Ohio forecast summaries
                </a>{" "}
                that are updated regularly.
              </p>
              <p>
                The point is not to turn a delivery request into a hydrology exercise. It is to confirm
                whether the timing you have in mind still matches the river conditions the crew is actually
                working in.
              </p>

              <h2>2. Check USACE Navigation Notices And Survey Updates</h2>
              <p>
                River forecasts are only part of the picture. Navigation planning can also change because of
                channel maintenance, dredging, or lock impacts. The U.S. Army Corps of Engineers keeps the{" "}
                <a
                  href="https://ndc.ops.usace.army.mil/ords/r/ntni/notices/navigation-notices"
                  target="_blank"
                  rel="noreferrer"
                >
                  Notice to Navigation Interests system
                </a>{" "}
                for current notices, and the St. Louis District posts both{" "}
                <a
                  href="https://www.mvs.usace.army.mil/Missions/Navigation/Surveys/Channel-Patrol/"
                  target="_blank"
                  rel="noreferrer"
                >
                  channel patrol surveys
                </a>{" "}
                and{" "}
                <a
                  href="https://www.mvs.usace.army.mil/Missions/Navigation/Surveys/Dredge/"
                  target="_blank"
                  rel="noreferrer"
                >
                  dredge surveys
                </a>{" "}
                for its Mississippi River reaches.
              </p>
              <p>
                For shoreside logistics, those postings are useful because they can flag areas where schedules
                or transit assumptions deserve another look before someone promises a narrow handoff window.
              </p>

              <h2>3. Check Coast Guard And Port Safety Notices</h2>
              <p>
                The Coast Guard&apos;s navigation products are another practical check before a delivery window is
                finalized. The{" "}
                <a
                  href="https://www.navcen.uscg.gov/local-notices-to-mariners-by-cg-district"
                  target="_blank"
                  rel="noreferrer"
                >
                  Local Notices to Mariners by Coast Guard district
                </a>{" "}
                and the broader{" "}
                <a
                  href="https://cms-prod.navcen.uscg.gov/msi"
                  target="_blank"
                  rel="noreferrer"
                >
                  Maritime Safety Information products
                </a>{" "}
                page can surface restrictions, hazards, and bulletin traffic that affect planning. Port and
                terminal operators may also publish their own local notices when access, hours, or operating
                conditions change.
              </p>

              <div className="article-callout">
                A good delivery request answers two timing questions up front: where will the handoff happen,
                and what official source should everyone be checking if conditions change?
              </div>

              <h2>What To Share With Your Delivery Contact</h2>
              <p>
                Once you have checked the current picture, pass along the basics in one message: vessel or tow
                name, the expected meeting point, the best contact number, the requested handoff window, and
                any note about the river reach or lock the crew is working around. That gives the local pickup
                contact a cleaner starting point and makes follow-up easier if the schedule shifts.
              </p>

              <h2>Keep The Window Realistic</h2>
              <p>
                On the Mississippi, the most useful delivery window is usually the one that leaves room for
                current conditions instead of pretending they are static. A quick check of the forecast,
                notices, and surveys can prevent unnecessary back-and-forth and help everyone work from the
                same operating picture.
              </p>

              <p>
                Six Fold Solutions LLC supports agreed shoreside pickups and deliveries for commercial river
                operations in the Alton, Illinois area. If you already know the items, vendor, meeting point,
                and best timing window, send those details first so the request can be reviewed against
                current availability.
              </p>

              <div className="article-byline">
                Written by <strong>{businessInfo.ownerName}</strong>, owner of Six Fold Solutions LLC.
              </div>
            </div>

            <aside className="article-aside" aria-label="Request delivery">
              <p className="eyebrow eyebrow-light">NEED A DELIVERY?</p>
              <h2>Send Six Fold the Details</h2>
              <p>
                Share the pickup point, handoff location, and timing window so Jason can review the request.
              </p>
              <Link className="btn btn-primary" href="/request-delivery" scroll={false}>
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
