import type { Metadata } from "next";
import Link from "next/link";
import { businessInfo, siteUrl } from "../../config";

const title = "What a Canceled Lock Closure Still Tells a Shoreside Delivery Team";
const description =
  "How recent Locks 27 and St. Louis reach updates can help a Mississippi River delivery team confirm timing without turning one notice into a promise.";
const articleUrl = `${siteUrl}/blog/what-a-canceled-lock-closure-still-tells-a-shoreside-delivery-team`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: articleUrl },
  openGraph: {
    type: "article",
    url: articleUrl,
    title,
    description,
    publishedTime: "2026-08-27",
    modifiedTime: "2026-08-27",
    authors: [businessInfo.ownerName],
    images: ["/six-fold-cover.png"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/six-fold-cover.png"],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: title,
  description,
  datePublished: "2026-08-27",
  dateModified: "2026-08-27",
  mainEntityOfPage: articleUrl,
  url: articleUrl,
  image: `${siteUrl}/six-fold-cover.png`,
  author: {
    "@type": "Person",
    name: businessInfo.ownerName,
  },
  publisher: {
    "@type": "Organization",
    name: businessInfo.companyName,
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/favicon.png`,
    },
  },
};

export default function LockClosureArticle() {
  return (
    <>
      <article>
        <header className="page-hero article-hero">
          <div className="page-hero-grid" aria-hidden="true" />
          <div className="shell page-hero-inner">
            <div className="blog-meta">
              <time dateTime="2026-08-27">August 27, 2026</time>
              <span>Lock Operations</span>
              <span>5 minute read</span>
            </div>
            <h1>{title}</h1>
            <p className="page-hero-copy">
              A canceled lock notice is still useful context when you are trying to pin down a realistic
              Mississippi River handoff window.
            </p>
          </div>
        </header>

        <section className="section article-section">
          <div className="shell article-layout">
            <div className="article-prose">
              <p>
                A shoreside delivery request often depends on one practical question: will the vessel still
                be where everyone expected it to be? Around the St. Louis and Alton reach, that answer can
                shift when river levels change or when lock maintenance plans change with them.
              </p>
              <p>
                That happened recently at Locks 27. In a St. Louis District{" "}
                <a
                  href="https://ndc.ops.usace.army.mil/ords/ntni/print_nav_notice?in_nav_notice_number=214904&in_title_formatting=UB"
                  target="_blank"
                  rel="noreferrer"
                >
                  Notice to Navigation Interests dated August 14, 2026
                </a>
                , the Corps said a planned August 17 closure of the main lock at mile 185.5 was canceled due
                to rising river levels, while the 600-foot auxiliary lock remained available for vessel
                transit. For a delivery team, that kind of notice does not answer every schedule question,
                but it does tell you the operating picture changed.
              </p>

              <h2>Why A Canceled Notice Still Matters</h2>
              <p>
                It is easy to read a cancellation and assume conditions are back to normal. That is usually
                too simple. A canceled maintenance window can mean the original plan no longer matches what
                the river is doing. If your delivery depends on a vessel&apos;s arrival time, crew transfer point,
                or lock sequence, that change is a cue to confirm the handoff details again.
              </p>
              <p>
                The National Weather Service&apos;s St. Louis office showed the same shift in public river data. Its{" "}
                <a
                  href="https://forecast.weather.gov/product.php?format=CI&glossary=1&issuedby=LSX&product=RVS&site=UNR&version=31"
                  target="_blank"
                  rel="noreferrer"
                >
                  August 19, 2026 hydrologic statement
                </a>{" "}
                listed the Mel Price Lock and Dam stage at 11.3 feet that day after higher readings earlier
                in the week, and its{" "}
                <a
                  href="https://marine.weather.gov/product.php?issuedby=LSX&product=RVA&site=HNX"
                  target="_blank"
                  rel="noreferrer"
                >
                  August 22, 2026 river summary
                </a>{" "}
                showed the Mel Price gauge down to 9.1 feet and Alton at 16.9 feet. Those source dates matter
                because they show how quickly a planning picture can change within a few days.
              </p>

              <h2>Use The Notice As A Recheck Trigger</h2>
              <p>
                For shoreside logistics, the useful move is not to over-interpret the notice. The useful move
                is to treat it as a recheck trigger. Confirm the vessel or tow name, the intended handoff
                point, the latest timing window, and whether the crew expects any change in access or sequence
                because of conditions at or above the lock.
              </p>
              <p>
                That keeps the conversation operational. You are not trying to read the river better than the
                people moving on it. You are making sure the pickup plan still matches the current operating
                conditions reflected in official updates.
              </p>

              <h2>Check Current Lock Status Too</h2>
              <p>
                The Corps also maintains its{" "}
                <a
                  href="https://ndc.ops.usace.army.mil/ords/r/lpms/corps-locks/home"
                  target="_blank"
                  rel="noreferrer"
                >
                  Corps Locks reporting hub
                </a>
                , which says its lock status report is updated every 15 minutes. That tool does not replace a
                direct confirmation from the vessel or local contact, but it can help a delivery coordinator
                see whether a lock is currently reporting an operating condition that deserves another call or
                text before someone heads to the dock.
              </p>

              <div className="article-callout">
                A canceled closure notice is not the end of the story. It is a signal to check the latest
                stage, status, and handoff details before you lock in a narrow delivery window.
              </div>

              <h2>What To Pass Along In One Message</h2>
              <p>
                When conditions have shifted, a short update can save time: identify the vessel or tow, the
                planned pickup and handoff points, the target time range, and the best contact for changes.
                If you are referencing an official update, include the source and date so everyone is working
                from the same information.
              </p>

              <h2>The Practical Takeaway</h2>
              <p>
                On the Mississippi, a canceled lock closure can still be useful planning information because
                it tells you the river and the operating plan are moving together. That does not mean a
                delivery is off or on by itself. It means the cleanest next step is a timely confirmation with
                the people coordinating the handoff.
              </p>
              <p>
                Six Fold Solutions LLC supports agreed shoreside pickups and deliveries for commercial river
                operations in the Alton, Illinois area. Share the item list, pickup point, vessel or tow
                name, meeting location, and current timing window so the request can be reviewed against
                availability.
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
