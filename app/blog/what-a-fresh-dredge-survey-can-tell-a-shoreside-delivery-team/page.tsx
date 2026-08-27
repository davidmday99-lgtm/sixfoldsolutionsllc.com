import type { Metadata } from "next";
import Link from "next/link";
import { businessInfo, siteUrl } from "../../config";

const title = "What a Fresh Dredge Survey Can Tell a Shoreside Delivery Team";
const description =
  "How current USACE survey updates can help a Mississippi River shoreside delivery team ask better timing questions without treating a survey as a schedule.";
const articleUrl = `${siteUrl}/blog/what-a-fresh-dredge-survey-can-tell-a-shoreside-delivery-team`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: articleUrl },
  openGraph: {
    type: "article",
    url: articleUrl,
    title,
    description,
    publishedTime: "2026-08-26",
    authors: [businessInfo.ownerName],
    images: ["/six-fold-cover.png"],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: title,
  description,
  datePublished: "2026-08-26",
  dateModified: "2026-08-26",
  mainEntityOfPage: articleUrl,
  image: `${siteUrl}/six-fold-cover.png`,
  author: { "@type": "Person", name: businessInfo.ownerName },
  publisher: {
    "@type": "Organization",
    name: businessInfo.companyName,
    url: siteUrl,
  },
};

export default function DredgeSurveyArticle() {
  return (
    <>
      <article>
        <header className="page-hero article-hero">
          <div className="page-hero-grid" aria-hidden="true" />
          <div className="shell page-hero-inner">
            <div className="blog-meta">
              <time dateTime="2026-08-26">August 26, 2026</time>
              <span>River Conditions</span>
              <span>5 minute read</span>
            </div>
            <h1>{title}</h1>
            <p className="page-hero-copy">
              A survey can be a useful planning signal, but it is not a promise about a vessel&apos;s timing.
            </p>
          </div>
        </header>

        <section className="section article-section">
          <div className="shell article-layout">
            <div className="article-prose">
              <p>
                On a working river, a conversation about a delivery can start with a straightforward question:
                where will the vessel be? The answer depends on more than a map pin. It can depend on the
                current channel picture, the crew&apos;s transit plan, and conditions that are changing well away
                from the final handoff point.
              </p>
              <p>
                That is why a fresh survey is worth noticing. The U.S. Army Corps of Engineers St. Louis
                District publishes <a href="https://www.mvs.usace.army.mil/Missions/Navigation/Surveys/Dredge/" target="_blank" rel="noreferrer">dredge survey updates</a>{" "}
                for the Middle Mississippi River and nearby pools. Its recent listings include multiple
                August 2026 surveys, with new Middle Mississippi entries uploaded as late as August 20.
                For a shoreside delivery team, those postings are context: they show that the channel is
                being measured in particular reaches, not that a delivery time has been set.
              </p>

              <h2>A Survey Is A Snapshot Of A Reach</h2>
              <p>
                USACE describes a post-dredge survey as a check completed after work in a specific location.
                The St. Louis District&apos;s survey pages also distinguish between channel patrol surveys and
                more detailed surveys used around potential problem areas. In practical terms, each posting
                is tied to a place and a date. It is useful for asking whether a route or meeting estimate
                needs another confirmation, especially when the survey is recent and the operation is tied
                to that reach.
              </p>
              <p>
                It is not a substitute for the vessel operator&apos;s navigation decisions, dispatch updates, or
                official notices. A delivery coordinator should not read a depth graphic and turn it into an
                arrival commitment. The value is in having a better question ready when the crew calls.
              </p>

              <h2>Check The Date Before Drawing A Conclusion</h2>
              <p>
                The date is often the first detail that matters. A listing can show when the reach was
                surveyed and when the information was uploaded. Recent activity is useful context; an older
                survey may simply be less representative of today&apos;s conditions. The St. Louis District&apos;s{" "}
                <a href="https://www.mvs.usace.army.mil/Missions/Navigation/Surveys/Channel-Patrol/" target="_blank" rel="noreferrer"> channel patrol survey page</a>{" "}
                explains that patrol lines are used to identify areas that may warrant a more detailed look.
              </p>
              <p>
                That difference matters to people arranging a pickup. A current survey can explain why a
                crew&apos;s estimated meeting point or timing has changed. It cannot, by itself, answer whether
                the handoff can happen at a specific minute.
              </p>

              <h2>Use It To Improve The Delivery Conversation</h2>
              <p>
                A good shoreside request keeps the river context practical. If the delivery depends on a
                particular reach, share the vessel or tow name, intended handoff area, requested time range,
                and a contact who can confirm changes. Then ask whether the crew has a current location or
                revised expectation. That gives everyone a common reference without asking a driver or vendor
                to infer vessel timing from a survey page.
              </p>

              <div className="article-callout">
                A fresh survey is most useful when it leads to a clearer question: has anything changed that
                affects where or when the handoff should happen?
              </div>

              <h2>Keep Official Notices In The Loop</h2>
              <p>
                Surveys are only one source. The Corps&apos;s <a href="https://ndc.ops.usace.army.mil/ords/r/ntni/notices/navigation-notices" target="_blank" rel="noreferrer">Notice to Navigation Interests system</a>{" "}
                publishes navigation notices, while the Coast Guard provides <a href="https://www.navcen.uscg.gov/local-notices-to-mariners-by-cg-district" target="_blank" rel="noreferrer">Local Notices to Mariners by district</a>.
                Those are the places to look for current notices that may affect a planned movement. For a
                delivery request, they are a reason to leave room for confirmation, not a reason to make an
                unsupported promise about access or timing.
              </p>

              <h2>The Takeaway For Shoreside Logistics</h2>
              <p>
                The recent USACE survey activity is a useful reminder that river information has a timestamp.
                When a handoff is near a surveyed reach, use that fact to confirm the plan with the people
                operating the vessel. A small amount of current context can make the request cleaner, reduce
                avoidable back-and-forth, and help the delivery team stay ready for a realistic window.
              </p>
              <p>
                Six Fold Solutions LLC supports agreed shoreside pickups and deliveries for commercial river
                operations in the Alton, Illinois area. Share the item list, vendor, vessel or tow name,
                meeting point, and timing range so the request can be reviewed against current availability.
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
