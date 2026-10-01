import type { Metadata } from "next";
import Link from "next/link";
import { businessInfo, siteUrl } from "../../config";

const title = "What A River Gauge Can—and Cannot—Tell A Shoreside Team";
const description =
  "A Mississippi River gauge is useful planning context for a shoreside handoff, but its stage reading does not establish dock access, channel conditions, or a vessel schedule.";
const articleUrl = `${siteUrl}/blog/what-a-river-gauge-can-and-cannot-tell-a-shoreside-team`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: articleUrl },
  openGraph: { type: "article", url: articleUrl, title, description, publishedTime: "2026-10-01", modifiedTime: "2026-10-01", authors: [businessInfo.ownerName], images: ["/six-fold-cover.png"] },
  twitter: { card: "summary_large_image", title, description, images: ["/six-fold-cover.png"] },
};

const articleJsonLd = {
  "@context": "https://schema.org", "@type": "BlogPosting", headline: title, description,
  datePublished: "2026-10-01", dateModified: "2026-10-01", mainEntityOfPage: articleUrl, url: articleUrl,
  image: `${siteUrl}/six-fold-cover.png`, author: { "@type": "Person", name: businessInfo.ownerName },
  publisher: { "@type": "Organization", name: businessInfo.companyName, url: siteUrl, logo: { "@type": "ImageObject", url: `${siteUrl}/favicon.png` } },
};

export default function RiverGaugeArticle() {
  return (
    <>
      <article>
        <header className="page-hero article-hero"><div className="page-hero-grid" aria-hidden="true" /><div className="shell page-hero-inner"><div className="blog-meta"><time dateTime="2026-10-01">October 1, 2026</time><span>River Conditions</span><span>4 minute read</span></div><h1>{title}</h1><p className="page-hero-copy">A gauge number can make a handoff conversation more informed without answering the access or timing question by itself.</p></div></header>
        <section className="section article-section"><div className="shell article-layout"><div className="article-prose">
          <p>A river gauge is one of the first numbers people reach for when a Mississippi River handoff is being discussed. It is useful because it gives the team a dated observation at a named location. It becomes less useful when it is treated as a shorthand for everything else: a dock&apos;s approach, a vessel&apos;s current plan, or a promised delivery time.</p>
          <p>The National Weather Service defines <a href="https://forecast.weather.gov/glossary.php?word=STAGE" target="_blank" rel="noreferrer">river stage</a> as the level of the water surface above an established datum at a given location. That definition is important. A stage is tied to a particular gauge and reference point; it is not a universal depth measurement for every facility, reach, or vessel movement nearby.</p>
          <h2>Start With The Place And The Time</h2>
          <p>The NWS St. Louis <a href="https://forecast.weather.gov/product.php?issuedby=lsx&amp;product=RVA&amp;site=lsx" target="_blank" rel="noreferrer">River Summary</a> reports separate observations for Alton, Mel Price Lock and Dam, St. Louis, and other points. On September 30, for example, it listed Alton at 14.3 feet, Mel Price at 11.3 feet, and St. Louis at 13.5 feet. Those figures are useful current context precisely because they name different locations and include a 24-hour change.</p>
          <p>They do not turn into a site-specific answer simply because a facility is in the same general area. A practical note should preserve the gauge name, the issuance date, and the official link. That keeps the observation traceable and makes it clear that a later update can change the context.</p>
          <h2>A Gauge Is Not A Channel Survey</h2>
          <p>USACE&apos;s St. Louis District describes <a href="https://www.mvs.usace.army.mil/Missions/Navigation/Surveys/Channel-Patrol/" target="_blank" rel="noreferrer">channel-patrol surveys</a> as lines of depth soundings used to assess probable low-water depths across a broad area and identify locations that may need more detailed review. That is a different kind of information from a gauge observation. One reports water level at a point; the other examines conditions along surveyed lines, on stated dates.</p>
          <p>The distinction is even clearer in the District&apos;s <a href="https://www.mvs.usace.army.mil/Missions/Navigation/Surveys/Dredge/" target="_blank" rel="noreferrer">dredge-survey guidance</a>. It explains that detailed surveys cover specific sections and uses reference planes to compare information between locations. Those dated products can add useful context, but neither a gauge nor a survey alone establishes a current vessel transit, a dock approach, or a delivery appointment.</p>
          <div className="article-callout">Keep the gauge reading as dated context. Confirm the actual meeting point and timing with the vessel or dispatch contact responsible for the movement.</div>
          <h2>Make The Handoff Message More Specific</h2>
          <p>When river conditions may matter, a clean shoreside request can include the vessel or tow name, intended meeting area, item and pickup details, a workable time range, and one current contact. If a gauge reading has prompted the conversation, add the official source and issuance date rather than drawing a conclusion from the number.</p>
          <p>That gives the operating side a precise question to answer: whether the current plan has changed for this handoff. It also avoids asking a driver, vendor, or shoreside coordinator to interpret navigation conditions or make a commitment that belongs with the people managing the movement.</p>
          <h2>The Practical Takeaway</h2>
          <p>River gauges are valuable because they give a shared, current point of reference. Use them for what they are: location-specific water-level observations. Pair them with any relevant official notices or dated survey context, then confirm the live access and timing details directly with the vessel&apos;s operating contact. That approach keeps a river delivery conversation factual, useful, and ready for change.</p>
          <div className="article-byline">Written by <strong>{businessInfo.ownerName}</strong>, owner of Six Fold Solutions LLC.</div>
        </div><aside className="article-aside" aria-label="Request delivery"><p className="eyebrow eyebrow-light">NEED A DELIVERY?</p><h2>Send Six Fold the Details</h2><p>Share the pickup point, handoff location, and timing window so Jason can review the request.</p><Link className="btn btn-primary" href="/request-delivery" scroll={false}>Request Delivery <span aria-hidden="true">-&gt;</span></Link></aside></div></section>
      </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
    </>
  );
}
