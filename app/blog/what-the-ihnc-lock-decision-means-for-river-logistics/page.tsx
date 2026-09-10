import type { Metadata } from "next";
import Link from "next/link";
import { businessInfo, siteUrl } from "../../config";

const title = "What the IHNC Lock Decision Means for River Logistics";
const description =
  "The September 2026 IHNC Lock replacement decision advances a key river connection. Here is what changed, what comes next, and why shoreside teams should care.";
const articleUrl = `${siteUrl}/blog/what-the-ihnc-lock-decision-means-for-river-logistics`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: articleUrl },
  openGraph: {
    type: "article",
    url: articleUrl,
    title,
    description,
    publishedTime: "2026-09-10",
    modifiedTime: "2026-09-10",
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
  datePublished: "2026-09-10",
  dateModified: "2026-09-10",
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

export default function IhncLockDecisionArticle() {
  return (
    <>
      <article>
        <header className="page-hero article-hero">
          <div className="page-hero-grid" aria-hidden="true" />
          <div className="shell page-hero-inner">
            <div className="blog-meta">
              <time dateTime="2026-09-10">September 10, 2026</time>
              <span>River Infrastructure</span>
              <span>4 minute read</span>
            </div>
            <h1>{title}</h1>
            <p className="page-hero-copy">
              A major lock replacement has cleared an important review milestone. Here is what
              that changes today and what still lies ahead.
            </p>
          </div>
        </header>

        <section className="section article-section">
          <div className="shell article-layout">
            <div className="article-prose">
              <p>
                River infrastructure news can travel faster than the work itself. A lock replacement
                announcement reaches a dispatcher, gets forwarded to a vendor, and soon someone is asking
                whether transit times will improve on the next trip. The useful first question is more
                specific: which stage has the project actually reached?
              </p>
              <p>
                In a <a href="https://www.mvn.usace.army.mil/Media/News-Releases/Article/4587604/record-of-decision-signed-for-ihnc-lock-replacement/" target="_blank" rel="noreferrer">September 1, 2026 announcement about the IHNC Lock replacement</a>,
                the U.S. Army Corps of Engineers New Orleans District reported that the Record of Decision
                had been signed. The Corps says environmental review is complete and engineering and design
                will proceed. It also says construction still requires additional congressional funding and
                authorization. That distinction matters when turning a promising headline into a planning note.
              </p>

              <h2>A Connection Worth Watching</h2>
              <p>
                The Corps identifies the Inner Harbor Navigation Canal Lock as the only direct connection
                between the Gulf Intracoastal Waterway and the Mississippi River east of New Orleans.
                Its recommended replacement is a shallow-draft chamber measuring 900 feet by 110 feet,
                about 2,400 feet north of the existing lock. The plan also includes bridge work, flood risk
                management features, and measures addressing traffic, access, and community impacts.
              </p>
              <p>
                This is relevant well beyond the neighborhood around the lock. For people supporting a
                vessel whose itinerary includes that connection, the project belongs on the long-term
                infrastructure watch list. For an Alton delivery request, its immediate relevance depends
                on the vessel&apos;s actual route. A New Orleans project announcement alone cannot establish
                a change to a Mississippi River handoff farther upstream.
              </p>

              <h2>Why Chamber Size Matters</h2>
              <p>
                The <a href="https://www.mvn.usace.army.mil/About/Projects/IHNC-Lock-Replacement/" target="_blank" rel="noreferrer">Corps&apos; IHNC Lock project overview and supporting documents</a>
                explain the underlying problem. The existing lock dates to 1923. Aging equipment has
                increased maintenance demands, while larger barge tows may need to be divided into smaller
                groups for passage and reassembled afterward. The overview says that process can take up
                to 16 hours. That is an explanation of a potential operating burden, not a published wait
                time for a particular vessel today.
              </p>
              <p>
                The proposed replacement aims to improve vessel transit times. But a planned chamber
                and an operating chamber are different stages of a project. A supplier arranging a pickup
                still needs the vessel contact&apos;s current estimate; projected infrastructure benefits do
                not provide a usable arrival time.
              </p>

              <div className="article-callout">
                The September announcement advances the project into engineering and design.
                It does not announce a construction start or a new lock opening.
              </div>

              <h2>Keep the Project Note Useful</h2>
              <p>
                A short internal note can keep the news from becoming an unsupported scheduling assumption.
                Record the source and publication date, the milestone reached, and the next unresolved
                step. For this announcement, that means a signed decision, design work ahead, and additional
                congressional action needed before construction. Keep that note separate from the vessel&apos;s
                current ETA so a forwarded message retains its meaning.
              </p>
              <p>
                As the project develops, look for dated Corps updates about funding, design, construction,
                and any announced effects on navigation or landside access. The project page collects the
                decision and supporting reports, but also contains older study-stage descriptions. Use the
                dated September announcement for this milestone rather than treating every paragraph on
                the overview as a fresh status report.
              </p>

              <h2>Bring It Back to the Handoff</h2>
              <p>
                Consider a parts pickup for a tow with a later New Orleans connection. The lock news may
                be worth sharing with the dispatcher, but the pickup decision still rests on the agreed
                vendor location, current vessel contact, and confirmed handoff window. If the itinerary
                changes, update those details directly. There is no need to turn an infrastructure milestone
                into a guessed delay or an earlier appointment.
              </p>
              <p>
                For shoreside teams, the value of following this project is a clearer understanding of an
                important river connection and the work proposed for it. Keep the long-term improvement in
                view while building each delivery around information the vessel side can confirm now.
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
