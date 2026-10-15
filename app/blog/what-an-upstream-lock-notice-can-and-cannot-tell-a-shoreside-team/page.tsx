import type { Metadata } from "next";
import Link from "next/link";
import { businessInfo, siteUrl } from "../../config";

const title = "What An Upstream Lock Notice Can—and Cannot—Tell A Shoreside Team";
const description =
  "A dated USACE lock notice can sharpen a Mississippi River handoff conversation, but its location and scope do not establish a local vessel plan or delivery time.";
const articleUrl = `${siteUrl}/blog/what-an-upstream-lock-notice-can-and-cannot-tell-a-shoreside-team`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: articleUrl },
  openGraph: { type: "article", url: articleUrl, title, description, publishedTime: "2026-10-15", modifiedTime: "2026-10-15", authors: [businessInfo.ownerName], images: ["/six-fold-cover.png"] },
  twitter: { card: "summary_large_image", title, description, images: ["/six-fold-cover.png"] },
};

const articleJsonLd = {
  "@context": "https://schema.org", "@type": "BlogPosting", headline: title, description,
  datePublished: "2026-10-15", dateModified: "2026-10-15", mainEntityOfPage: articleUrl, url: articleUrl,
  image: `${siteUrl}/six-fold-cover.png`, author: { "@type": "Person", name: businessInfo.ownerName },
  publisher: { "@type": "Organization", name: businessInfo.companyName, url: siteUrl, logo: { "@type": "ImageObject", url: `${siteUrl}/favicon.png` } },
};

export default function UpstreamLockNoticeArticle() {
  return (
    <>
      <article>
        <header className="page-hero article-hero"><div className="page-hero-grid" aria-hidden="true" /><div className="shell page-hero-inner"><div className="blog-meta"><time dateTime="2026-10-15">October 15, 2026</time><span>Lock Operations</span><span>4 minute read</span></div><h1>{title}</h1><p className="page-hero-copy">A lock notice can be useful shoreside context when its reach, date, and limits stay attached to the conversation.</p></div></header>
        <section className="section article-section"><div className="shell article-layout"><div className="article-prose">
          <p>A notice about a lock upstream of a planned Mississippi River handoff can matter without answering every question about that handoff. It can identify a specific facility, a specific period, and a reported activity. It does not, by itself, say where a vessel is, whether a particular dock is accessible, or when a pickup or delivery will occur.</p>
          <p>That distinction is especially useful when a notice is being passed from dispatch to a vendor or driver. The practical value is in keeping the official context intact instead of reducing it to a vague statement that the river is “closed” or that a plan has changed everywhere.</p>
          <h2>Read The Facility, River Mile, And Dates Together</h2>
          <p>In its October 6 <a href="https://ndc.ops.usace.army.mil/ords/ntni/print_nav_notice?in_nav_notice_number=215160&amp;in_title_formatting=UB" target="_blank" rel="noreferrer">Notice to Navigation Interests for Lock and Dam 25</a>, the U.S. Army Corps of Engineers identified the facility as Upper Mississippi River mile 241.4. The notice addressed construction of a downstream guide cell, listed prior scheduled closures, said the October 6 closure was canceled because of high river levels, and added a 7 a.m. to 7 p.m. closure for October 13.</p>
          <p>Those details are what make the notice usable: the waterway, river mile, activity, issue date, and stated time window. They also set its boundary. The listed October 13 closure is dated context from a notice issued October 6, not a standing description of river conditions on every later date.</p>
          <h2>An Upstream Notice Is Not A Local Access Answer</h2>
          <p>Lock and Dam 25 is upstream of Alton and the Melvin Price Locks and Dam. A notice for that facility may be relevant to a movement that will pass through it, but relevance is not the same as a schedule. It should not be used to infer the status of another lock, a particular landing, or a vessel&apos;s current location.</p>
          <p>The Corps&apos; <a href="https://www.mvs.usace.army.mil/Missions/Navigation/Locks-and-Dams/Melvin-Price/" target="_blank" rel="noreferrer">Melvin Price Locks and Dam information</a> is a useful reminder that facilities have their own distinct configurations and operating context. When a shoreside plan involves a current condition, the responsible vessel or dispatch contact is the source for the live movement and meeting details.</p>
          <div className="article-callout">Keep the official notice link with the facility name and date. Then ask the operating contact whether it affects this specific handoff.</div>
          <h2>Turn A Notice Into A Better Question</h2>
          <p>Rather than forwarding a notice without context, a shoreside coordinator can share the link and ask a focused question: Does this dated Lock 25 update affect the intended meeting area or timing range for this request? Include the vessel or tow name, requested handoff area, item or pickup details, and a current contact so the operator can answer the actual question.</p>
          <p>That preserves the difference between published information and a commitment. It also gives the operating side a chance to identify any change in the current plan without asking a vendor, driver, or shoreside team to interpret navigation conditions.</p>
          <h2>The Practical Takeaway</h2>
          <p>Official lock notices are valuable planning inputs because they state what agency issued them, where they apply, and when they apply. Use those facts to make the handoff conversation more specific. Do not stretch an upstream, dated notice into a promise about local access, a vessel transit, or a delivery time. For the current status of a movement, confirm directly with the contact managing it and return to the official notice for any later revision.</p>
          <div className="article-byline">Written by <strong>{businessInfo.ownerName}</strong>, owner of Six Fold Solutions LLC.</div>
        </div><aside className="article-aside" aria-label="Request delivery"><p className="eyebrow eyebrow-light">NEED A DELIVERY?</p><h2>Send Six Fold the Details</h2><p>Share the pickup point, handoff location, and timing window so Jason can review the request.</p><Link className="btn btn-primary" href="/request-delivery" scroll={false}>Request Delivery <span aria-hidden="true">-&gt;</span></Link></aside></div></section>
      </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
    </>
  );
}
