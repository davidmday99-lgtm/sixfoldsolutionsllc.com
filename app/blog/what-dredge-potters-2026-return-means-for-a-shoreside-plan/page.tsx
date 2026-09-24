import type { Metadata } from "next";
import Link from "next/link";
import { businessInfo, siteUrl } from "../../config";

const title = "What Dredge Potter’s 2026 Return Means For A Shoreside Plan";
const description =
  "USACE’s 2026 Dredge Potter update is useful Mississippi River planning context—but it is not a vessel schedule, a channel assurance, or a delivery appointment.";
const articleUrl = `${siteUrl}/blog/what-dredge-potters-2026-return-means-for-a-shoreside-plan`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: articleUrl },
  openGraph: { type: "article", url: articleUrl, title, description, publishedTime: "2026-09-24", modifiedTime: "2026-09-24", authors: [businessInfo.ownerName], images: ["/six-fold-cover.png"] },
  twitter: { card: "summary_large_image", title, description, images: ["/six-fold-cover.png"] },
};

const articleJsonLd = {
  "@context": "https://schema.org", "@type": "BlogPosting", headline: title, description,
  datePublished: "2026-09-24", dateModified: "2026-09-24", mainEntityOfPage: articleUrl, url: articleUrl,
  image: `${siteUrl}/six-fold-cover.png`, author: { "@type": "Person", name: businessInfo.ownerName },
  publisher: { "@type": "Organization", name: businessInfo.companyName, url: siteUrl, logo: { "@type": "ImageObject", url: `${siteUrl}/favicon.png` } },
};

export default function DredgePotterArticle() {
  return (
    <>
      <article>
        <header className="page-hero article-hero"><div className="page-hero-grid" aria-hidden="true" /><div className="shell page-hero-inner"><div className="blog-meta"><time dateTime="2026-09-24">September 24, 2026</time><span>River Operations</span><span>4 minute read</span></div><h1>{title}</h1><p className="page-hero-copy">A seasonal dredging update can improve the questions around a river handoff without answering them for the crew or the delivery team.</p></div></header>
        <section className="section article-section"><div className="shell article-layout"><div className="article-prose">
          <p>For a shoreside team, a dredge update is the kind of river news that should make a delivery conversation more specific. It should not become a shortcut for predicting transit, access, or an arrival time. The useful distinction is between a public update on channel-maintenance work and the current plan for one vessel.</p>
          <p>On August 28, the U.S. Army Corps of Engineers&apos; St. Louis District reported that <a href="https://www.mvs.usace.army.mil/Media/News-Stories/Article/4586006/dredge-potter-returns-for-2026-dredging-season/" target="_blank" rel="noreferrer">Dredge Potter had returned to service for the 2026 season</a> after routine dry-dock maintenance and had begun work on the Mississippi and Illinois rivers. The Corps explains that currents move and deposit sand, creating shallow areas that can reduce navigation-channel depth. That is valuable context for commercial river operations; it is not a statement that every reach has the same condition or that a particular tow will meet a particular handoff window.</p>
          <h2>What The Announcement Actually Establishes</h2>
          <p>The Corps announcement establishes that its St. Louis District dredge is back in seasonal operation and identifies the reason dredging matters: sediment can change the channel. For someone arranging a pickup or delivery, that is a reason to keep the vessel contact, meeting area, and time range current. It is not enough information to decide that a delivery will be early, late, or unaffected.</p>
          <p>Dredging is one part of a wider operating picture. A vessel&apos;s location, itinerary, lock activity, weather, traffic, crew decisions, and later official notices may all matter to its actual plan. The crew or dispatcher responsible for that movement remains the right source for the current timing and access details.</p>
          <h2>Do Not Turn A Dredge Update Into A Depth Reading</h2>
          <p>A news release about seasonal work is not a survey. The St. Louis District&apos;s <a href="https://www.mvs.usace.army.mil/Missions/Navigation/Surveys/Dredge/" target="_blank" rel="noreferrer">dredge-survey page</a> describes its posted surveys as dated information for specific areas and explains that post-dredge surveys are used to confirm whether a problematic area has been removed. Even those postings are snapshots tied to their survey dates and locations, not a promise about a future transit or a shoreside delivery.</p>
          <p>That difference helps keep a handoff message honest. If someone references dredging, keep the official link and date alongside the actual request. Do not replace the vessel&apos;s reported plan with a conclusion drawn from a district-wide update.</p>
          <div className="article-callout">A seasonal dredging update belongs in the planning file as context. The crew or dispatcher&apos;s current itinerary remains the source for a delivery window.</div>
          <h2>Use The Context To Improve The Request</h2>
          <p>A clean message can name the vessel or tow, the intended meeting area, the pickup and item details, a workable time range, and the best contact for a change. If the route may be affected by a current river update, include the official source as context and ask the vessel side whether it changes the plan.</p>
          <p>This does not ask a driver, vendor, or shoreside contact to interpret navigation conditions. It gives the people closest to the movement a precise reason to confirm their current plan, while everyone else works from the same traceable source.</p>
          <h2>The Practical Takeaway</h2>
          <p>Dredge Potter&apos;s return is a timely reminder that river channels are maintained in response to changing conditions. For a Mississippi River delivery team, the practical value is better coordination: preserve the official update, verify whether it is relevant to the route, and confirm the live handoff details directly with the vessel&apos;s operating contact. That is more useful than treating a broad maintenance update as a schedule.</p>
          <div className="article-byline">Written by <strong>{businessInfo.ownerName}</strong>, owner of Six Fold Solutions LLC.</div>
        </div><aside className="article-aside" aria-label="Request delivery"><p className="eyebrow eyebrow-light">NEED A DELIVERY?</p><h2>Send Six Fold the Details</h2><p>Share the pickup point, handoff location, and timing window so Jason can review the request.</p><Link className="btn btn-primary" href="/request-delivery" scroll={false}>Request Delivery <span aria-hidden="true">-&gt;</span></Link></aside></div></section>
      </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
    </>
  );
}
