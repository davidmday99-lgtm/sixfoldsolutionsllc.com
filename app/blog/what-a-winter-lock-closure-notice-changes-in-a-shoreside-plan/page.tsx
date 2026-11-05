import type { Metadata } from "next";
import Link from "next/link";
import { businessInfo, siteUrl } from "../../config";

const title = "What A Winter Lock Closure Notice Changes In A Shoreside Plan";
const description =
  "How an advance USACE Lock 19 closure notice can give a Mississippi River handoff clearer planning context without becoming a vessel schedule or navigation instruction.";
const articleUrl = `${siteUrl}/blog/what-a-winter-lock-closure-notice-changes-in-a-shoreside-plan`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: articleUrl },
  openGraph: { type: "article", url: articleUrl, title, description, publishedTime: "2026-11-05", modifiedTime: "2026-11-05", authors: [businessInfo.ownerName], images: ["/six-fold-cover.png"] },
  twitter: { card: "summary_large_image", title, description, images: ["/six-fold-cover.png"] },
};

const articleJsonLd = {
  "@context": "https://schema.org", "@type": "BlogPosting", headline: title, description,
  datePublished: "2026-11-05", dateModified: "2026-11-05", mainEntityOfPage: articleUrl, url: articleUrl,
  image: `${siteUrl}/six-fold-cover.png`, author: { "@type": "Person", name: businessInfo.ownerName },
  publisher: { "@type": "Organization", name: businessInfo.companyName, url: siteUrl, logo: { "@type": "ImageObject", url: `${siteUrl}/favicon.png` } },
};

export default function WinterLockClosureArticle() {
  return (
    <>
      <article>
        <header className="page-hero article-hero"><div className="page-hero-grid" aria-hidden="true" /><div className="shell page-hero-inner"><div className="blog-meta"><time dateTime="2026-11-05">November 5, 2026</time><span>Lock Operations</span><span>4 minute read</span></div><h1>{title}</h1><p className="page-hero-copy">An advance closure notice gives a request a dated operating context. It does not supply a vessel plan.</p></div></header>
        <section className="section article-section"><div className="shell article-layout"><div className="article-prose">
          <p>A lock closure notice posted ahead of winter work can be important to a Mississippi River handoff well before the first work day. Its useful role is narrow: it identifies the named facility, the official work window, and the source that must be checked again as the date approaches. It does not establish a vessel&apos;s location, an available landing, a transit plan, or a delivery time.</p>
          <p>The U.S. Army Corps of Engineers&apos; Rock Island District currently lists <a href="https://ndc.ops.usace.army.mil/ords/ntni/print_nav_notice?in_nav_notice_number=214949&amp;in_title_formatting=UB" target="_blank" rel="noreferrer">a Lock and Dam 19 notice at Upper Mississippi River mile 364.2</a>. The notice says daily navigation closures are planned from 7:00 AM to 7:00 PM from December 5 through December 14, 2026, followed by a full closure from 11:00 AM December 15, 2026 through 11:00 AM March 14, 2027. It identifies work on the upstream river-wall nose pier and a bulkhead recess, and it notes that weather and project complexity create a risk that the end date could extend.</p>
          <h2>Separate The Work Window From The Handoff Window</h2>
          <p>A notice&apos;s effective dates belong in a planning conversation, especially where an upstream or downstream movement may connect to the named facility. They should not be copied into a delivery request as though they answer when a specific tow will arrive or whether a particular handoff can occur. The Corps&apos; <a href="https://ndc.ops.usace.army.mil/ords/f?p=107:1" target="_blank" rel="noreferrer">Notices to Navigation Interests</a> service describes its notices as information about events affecting waterway navigation, including maintenance projects, hazards, and restrictions.</p>
          <p>The distinction matters here because the official item provides more than one time period and explicitly flags uncertainty around the planned end date. A shoreside team can retain the source link, Lock 19, river mile 364.2, and the published dates as context. The party coordinating a particular movement can then confirm the current status and any relevant operating details through the proper real-time channels.</p>
          <div className="article-callout">An advance closure notice is a reason to start the conversation early, not a substitute for the current answer on a particular movement.</div>
          <h2>Make The Request Easy To Recheck</h2>
          <p>A useful handoff request keeps the operational basics alongside the public context: vessel or tow name, intended meeting area, item or vendor information, timing range, and a current contact. If the Lock 19 notice is relevant, add the official link and date it was reviewed. That helps the next person distinguish the published closure window from a plan that still needs confirmation.</p>
          <p>Plain wording is enough: “USACE Lock 19 notice 214949, reviewed November 5, 2026, included as planning context.” It avoids turning a public notice into an unsupported commitment, while preserving enough detail to find an amendment or later update. The Corps says its notice page removes notices seven days after the latest amendment&apos;s end date, another reason to keep the official link rather than depend on a forwarded summary.</p>
          <h2>Plan For Change Without Guessing</h2>
          <p>Winter work, river conditions, and a particular movement&apos;s schedule can each change independently. The Lock 19 notice is useful because it gives the affected facility and the currently published sequence of dates. It is not a reason to infer a route, an arrival, or a service outcome. For a handoff tied to that context, confirm the details with the people managing the movement and check the official notice again before relying on older information.</p>
          <p>The practical takeaway is simple: keep an advance lock notice attached to the request as dated context, state the specific handoff details separately, and let the current official source and operating contacts control the live answer.</p>
          <div className="article-byline">Written by <strong>{businessInfo.ownerName}</strong>, owner of Six Fold Solutions LLC.</div>
        </div><aside className="article-aside" aria-label="Request delivery"><p className="eyebrow eyebrow-light">NEED A DELIVERY?</p><h2>Send Six Fold the Details</h2><p>Share the pickup point, handoff location, and timing window so Jason can review the request.</p><Link className="btn btn-primary" href="/request-delivery" scroll={false}>Request Delivery <span aria-hidden="true">-&gt;</span></Link></aside></div></section>
      </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
    </>
  );
}
