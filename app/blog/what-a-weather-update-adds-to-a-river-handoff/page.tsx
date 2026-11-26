import type { Metadata } from "next";
import Link from "next/link";
import { businessInfo, siteUrl } from "../../config";

const title = "What A Weather Update Adds To A River Handoff";
const description =
  "Why a current weather update belongs beside a Mississippi River shoreside request—without becoming a vessel schedule, access answer, or navigation instruction.";
const articleUrl = `${siteUrl}/blog/what-a-weather-update-adds-to-a-river-handoff`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: articleUrl },
  openGraph: { type: "article", url: articleUrl, title, description, publishedTime: "2026-11-26", modifiedTime: "2026-11-26", authors: [businessInfo.ownerName], images: ["/six-fold-cover.png"] },
  twitter: { card: "summary_large_image", title, description, images: ["/six-fold-cover.png"] },
};

const articleJsonLd = {
  "@context": "https://schema.org", "@type": "BlogPosting", headline: title, description,
  datePublished: "2026-11-26", dateModified: "2026-11-26", mainEntityOfPage: articleUrl, url: articleUrl,
  image: `${siteUrl}/six-fold-cover.png`, author: { "@type": "Person", name: businessInfo.ownerName },
  publisher: { "@type": "Organization", name: businessInfo.companyName, url: siteUrl, logo: { "@type": "ImageObject", url: `${siteUrl}/favicon.png` } },
};

export default function WeatherUpdateRiverHandoffArticle() {
  return (
    <>
      <article>
        <header className="page-hero article-hero"><div className="page-hero-grid" aria-hidden="true" /><div className="shell page-hero-inner"><div className="blog-meta"><time dateTime="2026-11-26">November 26, 2026</time><span>Operations Planning</span><span>4 minute read</span></div><h1>{title}</h1><p className="page-hero-copy">A weather update can sharpen a shoreside conversation. It does not answer the live river question by itself.</p></div></header>
        <section className="section article-section"><div className="shell article-layout"><div className="article-prose">
          <p>Commercial river work depends on information that changes at different speeds. A weather update may affect the practical context around a pickup or handoff while river stage, navigation notices, vessel availability, and site access remain separate questions. Keeping those sources separate makes a request easier to understand and recheck.</p>
          <p>On November 26, 2026, the <a href="https://forecast.weather.gov/product.php?format=CI&amp;glossary=0&amp;issuedby=LSX&amp;product=AFD&amp;site=LSX&amp;version=1" target="_blank" rel="noreferrer">National Weather Service St. Louis Area Forecast Discussion</a> described snow transitioning to rain across the region, with gusts in the 20–25 mph range. That is useful, dated context for a shoreside team. It is not a statement about a particular landing, a tow&apos;s movement, or whether a delivery can occur.</p>
          <h2>Weather Context Is Its Own Line Item</h2>
          <p>When weather is relevant to a request, retain the source link, the issue time, and the location the forecast covers. Those details make the reference traceable. They also help everyone avoid treating an old forecast headline as a current condition.</p>
          <p>The weather source belongs alongside, rather than inside, the handoff details. The handoff itself still needs the vessel or tow name, intended meeting area, timing range, item or vendor information, and a current contact. Those are the details that let the right people compare the request with the live situation.</p>
          <div className="article-callout">A forecast can provide planning context. It does not confirm access, a vessel schedule, or a delivery time.</div>
          <h2>One Local Forecast Does Not Describe The Whole Movement</h2>
          <p>A National Weather Service discussion is issued for a forecast area and reflects the information available at its publication time. It may help a shoreside team recognize that conditions around the St. Louis area are changing, but it does not replace location-specific updates farther upriver or downriver. It also does not replace the official navigation sources used for river conditions.</p>
          <p>For the river side of the conversation, Six Fold&apos;s <Link href="/river-watch" scroll={false}>River Watch</Link> points to the National Weather Service river summary, USACE navigation notices and channel resources, Coast Guard notices, and survey information. Each source serves a different purpose; none should be stretched into a commitment that it does not make.</p>
          <h2>Keep The Follow-Up Easy</h2>
          <p>A concise message can preserve both the current source and the operational request: note that an official weather update was reviewed, link it, record the time, and state the handoff range separately. If the forecast changes or the movement is still ahead, the source can be checked again without guessing which version informed the earlier conversation.</p>
          <p>That approach is practical because it creates a shared reference while respecting the limits of the information. The current weather update may matter to planning. Live operating decisions, navigation, access, and vessel timing remain with the appropriate current authorities and operating contacts.</p>
          <div className="article-byline">Written by <strong>{businessInfo.ownerName}</strong>, owner of Six Fold Solutions LLC.</div>
        </div><aside className="article-aside" aria-label="Request delivery"><p className="eyebrow eyebrow-light">NEED A DELIVERY?</p><h2>Send Six Fold the Details</h2><p>Share the pickup point, handoff location, and timing window so Jason can review the request.</p><Link className="btn btn-primary" href="/request-delivery" scroll={false}>Request Delivery <span aria-hidden="true">-&gt;</span></Link></aside></div></section>
      </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
    </>
  );
}
