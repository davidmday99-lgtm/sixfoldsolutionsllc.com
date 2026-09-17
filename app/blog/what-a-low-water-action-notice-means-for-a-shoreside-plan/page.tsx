import type { Metadata } from "next";
import Link from "next/link";
import { businessInfo, siteUrl } from "../../config";

const title = "What A Low Water Action Notice Means For A Shoreside Plan";
const description =
  "A current Coast Guard Low Water Action notice is important planning context for Mississippi River operations—but it is not a delivery appointment or a route instruction.";
const articleUrl = `${siteUrl}/blog/what-a-low-water-action-notice-means-for-a-shoreside-plan`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: articleUrl },
  openGraph: { type: "article", url: articleUrl, title, description, publishedTime: "2026-09-17", modifiedTime: "2026-09-17", authors: [businessInfo.ownerName], images: ["/six-fold-cover.png"] },
  twitter: { card: "summary_large_image", title, description, images: ["/six-fold-cover.png"] },
};

const articleJsonLd = {
  "@context": "https://schema.org", "@type": "BlogPosting", headline: title, description,
  datePublished: "2026-09-17", dateModified: "2026-09-17", mainEntityOfPage: articleUrl, url: articleUrl,
  image: `${siteUrl}/six-fold-cover.png`, author: { "@type": "Person", name: businessInfo.ownerName },
  publisher: { "@type": "Organization", name: businessInfo.companyName, url: siteUrl, logo: { "@type": "ImageObject", url: `${siteUrl}/favicon.png` } },
};

export default function LowWaterActionArticle() {
  return (
    <>
      <article>
        <header className="page-hero article-hero"><div className="page-hero-grid" aria-hidden="true" /><div className="shell page-hero-inner"><div className="blog-meta"><time dateTime="2026-09-17">September 17, 2026</time><span>River Conditions</span><span>4 minute read</span></div><h1>{title}</h1><p className="page-hero-copy">A Low Water Action notice is a reason to sharpen the conversation—not a reason to turn a public update into a promised handoff time.</p></div></header>
        <section className="section article-section"><div className="shell article-layout"><div className="article-prose">
          <p>River status language can sound more final than it is. A notice arrives, someone forwards it to a vendor or driver, and a general operating update becomes shorthand for a specific delivery outcome. The better approach is to preserve what the notice actually says, where it applies, and when it was issued.</p>
          <p>On September 15, 2026, the Coast Guard&apos;s Upper Mississippi broadcast notice <a href="https://www.navcen.uscg.gov/broadcast-notice-to-mariners-message?guid=69915939" target="_blank" rel="noreferrer">SEC UMR BNM 0210-26</a> listed the Washington and Jefferson reaches in Low Water Action. That is timely operating context for traffic using those reaches. It is not, on its own, a published arrival time, a statement about every river mile, or a direction for a particular vessel.</p>
          <h2>Start With The Reach And Date</h2>
          <p>The location is the first useful detail. A notice tied to named reaches should stay tied to those reaches when it is passed along. A shoreside team near Alton may be supporting a vessel whose route includes that area, but the notice does not automatically describe conditions at the handoff point. Ask the vessel side whether the notice affects the actual itinerary before changing a pickup plan around it.</p>
          <p>The date matters just as much. Notices can be replaced, canceled, or supplemented. Treat the dated notice as a snapshot and retain its direct link. That makes it clear whether everyone is discussing the same official update instead of an older forwarded summary.</p>
          <h2>Pair A Notice With Local Context</h2>
          <p>A navigation notice and a gauge observation answer different questions. The National Weather Service&apos;s <a href="https://forecast.weather.gov/product.php?issuedby=lsx&amp;product=RVA&amp;site=lsx" target="_blank" rel="noreferrer">September 15 St. Louis River Summary</a> reported Alton at 19.4 feet, Mel Price Lock and Dam at 4.0 feet, and St. Louis at 1.4 feet. Those are dated observations from the listed report, not a transit prediction. Together with the Coast Guard notice, they give a delivery coordinator better context to request an updated vessel ETA and meeting location.</p>
          <p>There is no formula that turns those public sources into a local handoff time. The crew or dispatcher responsible for the movement remains the source for the current plan. For the shoreside side of the job, the public information is most useful when it prompts a cleaner, earlier confirmation.</p>
          <div className="article-callout">Keep a Low Water Action notice attached to its official source, date, and named reach—then confirm the vessel&apos;s current plan directly before setting a delivery window.</div>
          <h2>Keep The Handoff Message Simple</h2>
          <p>A practical update does not need to interpret the notice. Name the vessel or tow, identify the intended meeting area, include the pickup and item details, and ask for the current time range and best contact for changes. If the route uses the reach named in the notice, include the link and issuance date as context rather than recasting it as a delay.</p>
          <p>This leaves room for the people closest to the movement to confirm what has changed. It also helps the vendor, driver, and vessel contact work from one short, traceable message instead of several competing assumptions.</p>
          <h2>The Practical Takeaway</h2>
          <p>The September Low Water Action posting is worth watching because it identifies current conditions in specific Upper Mississippi reaches. For a shoreside delivery, its value is a prompt to reconfirm the itinerary and window—not a substitute for either. Keep the public source in the file, keep the vessel contact in the loop, and let the current operational plan determine the handoff.</p>
          <div className="article-byline">Written by <strong>{businessInfo.ownerName}</strong>, owner of Six Fold Solutions LLC.</div>
        </div><aside className="article-aside" aria-label="Request delivery"><p className="eyebrow eyebrow-light">NEED A DELIVERY?</p><h2>Send Six Fold the Details</h2><p>Share the pickup point, handoff location, and timing window so Jason can review the request.</p><Link className="btn btn-primary" href="/request-delivery" scroll={false}>Request Delivery <span aria-hidden="true">-&gt;</span></Link></aside></div></section>
      </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
    </>
  );
}
