import type { Metadata } from "next";
import Link from "next/link";
import { businessInfo, siteUrl } from "../../config";

const title = "What An Active Dredge Notice Means For A Mississippi River Handoff";
const description =
  "A current dredging notice can give a shoreside handoff useful reach-and-date context without becoming a vessel schedule, access answer, or navigation instruction.";
const articleUrl = `${siteUrl}/blog/what-an-active-dredge-notice-means-for-a-mississippi-river-handoff`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: articleUrl },
  openGraph: { type: "article", url: articleUrl, title, description, publishedTime: "2026-10-29", modifiedTime: "2026-10-29", authors: [businessInfo.ownerName], images: ["/six-fold-cover.png"] },
  twitter: { card: "summary_large_image", title, description, images: ["/six-fold-cover.png"] },
};

const articleJsonLd = {
  "@context": "https://schema.org", "@type": "BlogPosting", headline: title, description,
  datePublished: "2026-10-29", dateModified: "2026-10-29", mainEntityOfPage: articleUrl, url: articleUrl,
  image: `${siteUrl}/six-fold-cover.png`, author: { "@type": "Person", name: businessInfo.ownerName },
  publisher: { "@type": "Organization", name: businessInfo.companyName, url: siteUrl, logo: { "@type": "ImageObject", url: `${siteUrl}/favicon.png` } },
};

export default function ActiveDredgeNoticeArticle() {
  return (
    <>
      <article>
        <header className="page-hero article-hero"><div className="page-hero-grid" aria-hidden="true" /><div className="shell page-hero-inner"><div className="blog-meta"><time dateTime="2026-10-29">October 29, 2026</time><span>River Operations</span><span>4 minute read</span></div><h1>{title}</h1><p className="page-hero-copy">An active official notice is useful planning context when its river mile, date, and limits stay attached to the request.</p></div></header>
        <section className="section article-section"><div className="shell article-layout"><div className="article-prose">
          <p>A dredging notice can be immediately relevant to a Mississippi River handoff, but only in the reach and time period it names. For shoreside teams, its value is not a prediction. It is a clear prompt to keep a current request specific and to verify movement details with the people managing that movement.</p>
          <p>On October 26, the U.S. Army Corps of Engineers&apos; Notices to Navigation Interests listing added a St. Louis District notice for <a href="https://ndc.ops.usace.army.mil/ords/ntni/print_nav_notice?in_nav_notice_number=215399&amp;in_title_formatting=UB" target="_blank" rel="noreferrer">channel maintenance by USACE Dredge Potter at Upper Mississippi River mile 184.1</a>, with an effective period shown as October 26 through November 1. That is useful, traceable context for a conversation tied to that reach. It is not a statement about a particular vessel&apos;s position, dock access, passage, or delivery time.</p>
          <h2>Keep The Reach And Effective Window Together</h2>
          <p>River notices identify events that affect navigation, including maintenance projects, hazards, and restrictions, according to the Corps&apos; <a href="https://ndc.ops.usace.army.mil/ords/f?p=107:1" target="_blank" rel="noreferrer">Notices to Navigation Interests</a> service. The important planning details are the notice&apos;s official link, the named river mile or facility, its issue date, and its effective window. Detached from those details, a forwarded note can easily be mistaken for a system-wide or permanent condition.</p>
          <p>For a pickup or delivery request, a concise note can preserve the context: “USACE notice 215399, Upper Mississippi River mile 184.1, effective October 26–November 1, shared for planning context.” That lets the next person retrieve the current official item and see whether it has been revised, superseded, or removed after its end date.</p>
          <div className="article-callout">A dated dredge notice can inform the question. The operating contact provides the current answer for a particular movement or handoff.</div>
          <h2>Use The Notice To Ask A Better Question</h2>
          <p>When a handoff is associated with the named reach, the notice can sit alongside the details that make the request actionable: vessel or tow name, intended meeting area, item or vendor information, timing range, and a current contact. That gives the operating team a shared starting point without asking a public notice to do more than it says.</p>
          <p>It can support a question such as: “Does this current USACE notice affect the timing range for this specific handoff?” It should not be restated as a promise that a vessel will arrive at a particular time, that a landing is available, or that a transit can occur in a certain way. Those are real-time operational questions for the party coordinating the movement and the applicable authorities.</p>
          <h2>Why The Revision Path Matters</h2>
          <p>The Corps explains that its notice page is for navigation and policy notices issued by districts with a navigation mission, and that notices are removed seven days after the end date on the latest amendment. That lifecycle is a practical reminder to retain the source link instead of relying on a screenshot or an old summary. The original source is where a later amendment or replacement can be found.</p>
          <p>The practical takeaway is simple: treat a current dredge notice as precise planning context, not a schedule. Keep its reach and dates attached, bring the specific handoff details to the operating contact, and check the official notice again before treating older information as current.</p>
          <div className="article-byline">Written by <strong>{businessInfo.ownerName}</strong>, owner of Six Fold Solutions LLC.</div>
        </div><aside className="article-aside" aria-label="Request delivery"><p className="eyebrow eyebrow-light">NEED A DELIVERY?</p><h2>Send Six Fold the Details</h2><p>Share the pickup point, handoff location, and timing window so Jason can review the request.</p><Link className="btn btn-primary" href="/request-delivery" scroll={false}>Request Delivery <span aria-hidden="true">-&gt;</span></Link></aside></div></section>
      </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
    </>
  );
}
