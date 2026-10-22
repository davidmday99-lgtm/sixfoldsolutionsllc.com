import type { Metadata } from "next";
import Link from "next/link";
import { businessInfo, siteUrl } from "../../config";

const title = "Why A Source Timestamp Belongs In A Mississippi River Delivery Request";
const description =
  "A source, location, and timestamp keep river information useful in a shoreside delivery conversation without turning it into a vessel schedule or access promise.";
const articleUrl = `${siteUrl}/blog/why-a-source-timestamp-belongs-in-a-mississippi-river-delivery-request`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: articleUrl },
  openGraph: { type: "article", url: articleUrl, title, description, publishedTime: "2026-10-22", modifiedTime: "2026-10-22", authors: [businessInfo.ownerName], images: ["/six-fold-cover.png"] },
  twitter: { card: "summary_large_image", title, description, images: ["/six-fold-cover.png"] },
};

const articleJsonLd = {
  "@context": "https://schema.org", "@type": "BlogPosting", headline: title, description,
  datePublished: "2026-10-22", dateModified: "2026-10-22", mainEntityOfPage: articleUrl, url: articleUrl,
  image: `${siteUrl}/six-fold-cover.png`, author: { "@type": "Person", name: businessInfo.ownerName },
  publisher: { "@type": "Organization", name: businessInfo.companyName, url: siteUrl, logo: { "@type": "ImageObject", url: `${siteUrl}/favicon.png` } },
};

export default function SourceTimestampArticle() {
  return (
    <>
      <article>
        <header className="page-hero article-hero"><div className="page-hero-grid" aria-hidden="true" /><div className="shell page-hero-inner"><div className="blog-meta"><time dateTime="2026-10-22">October 22, 2026</time><span>Operations Planning</span><span>4 minute read</span></div><h1>{title}</h1><p className="page-hero-copy">A time-stamped official source gives a shoreside handoff useful context without being mistaken for a live operating answer.</p></div></header>
        <section className="section article-section"><div className="shell article-layout"><div className="article-prose">
          <p>River information travels quickly in a delivery conversation: a forecast screenshot, a notice link, a survey PDF, or a message that conditions have changed. The most useful version of that information keeps three things attached—where it applies, when it was issued or observed, and the official source. Without those details, a correct update can become an unclear instruction.</p>
          <p>For a Mississippi River shoreside pickup or delivery request, that distinction keeps the operating conversation focused. Published information can give a vessel team, dispatcher, vendor, or driver shared context. It does not establish a vessel&apos;s location, a landing&apos;s access, or a promised handoff time.</p>
          <h2>Every Official Product Has A Scope</h2>
          <p>The National Weather Service defines <a href="https://forecast.weather.gov/glossary.php?word=STAGE" target="_blank" rel="noreferrer">river stage</a> as the water-surface level above an established datum at a given location. That makes a stage valuable when it stays connected to its gauge name and observation or forecast time. It does not make a gauge reading a dock-access answer or a delivery schedule.</p>
          <p>The same principle applies to navigation information. The <a href="https://www.mvs.usace.army.mil/Missions/Navigation/Status-Reports/" target="_blank" rel="noreferrer">U.S. Army Corps of Engineers St. Louis District status report</a> is a weekly briefing that brings together items such as navigation notices, problem areas, dredge status, channel-marker status, stages, forecasts, and reported risks. Those categories are useful context, but each has its own date, reach, and purpose.</p>
          <div className="article-callout">Keep the official link, the named location, and the date or time with the handoff request. Then confirm the live movement details with the contact managing that movement.</div>
          <h2>Make The Information Easy To Verify</h2>
          <p>A short note is often enough: “USACE St. Louis status report, dated [date], for [reach], shared for planning context.” If the item is a river stage, include the gauge name and observation time. If it is a notice, retain the facility or river mile and the stated effective window. This gives the next person a direct path back to the source instead of asking them to interpret a detached number or forwarded summary.</p>
          <p>The Coast Guard explains that its <a href="https://www.uscg.mil/Homeport/Marine-Safety-Information-Bulletins/" target="_blank" rel="noreferrer">Marine Safety Information Bulletins</a> and related notice channels are used for real-time updates, notifications, and messages. That is another reason to keep the original source visible: later notices, cancellations, or revisions may change the earlier context.</p>
          <h2>Separate Planning Context From The Handoff Commitment</h2>
          <p>Once the source context is clear, the request can move to the details only the operating contact can confirm: the vessel or tow name, intended meeting area, pickup or item information, timing range, and a current contact. Those details invite a practical answer about the particular request without asking a shoreside team to make a navigation judgment.</p>
          <p>For example, a dated river update can support a question such as: “Does this source affect the timing range for this specific handoff?” It should not be restated as a claim that a vessel will arrive at a particular time or that a location is available.</p>
          <h2>The Practical Takeaway</h2>
          <p>Source, location, and timestamp are small details that make river information more useful. They protect the boundary between a public update and a real-time operating decision, help each person verify what they received, and make the next conversation more specific. For a current movement, access question, or timing commitment, confirm directly with the party managing it and return to the official source for the latest revision.</p>
          <div className="article-byline">Written by <strong>{businessInfo.ownerName}</strong>, owner of Six Fold Solutions LLC.</div>
        </div><aside className="article-aside" aria-label="Request delivery"><p className="eyebrow eyebrow-light">NEED A DELIVERY?</p><h2>Send Six Fold the Details</h2><p>Share the pickup point, handoff location, and timing window so Jason can review the request.</p><Link className="btn btn-primary" href="/request-delivery" scroll={false}>Request Delivery <span aria-hidden="true">-&gt;</span></Link></aside></div></section>
      </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
    </>
  );
}
