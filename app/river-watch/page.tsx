import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "River Watch | Official Navigation & River Conditions",
  description:
    "A practical source hub for Mississippi River stages, forecasts, navigation notices, channel conditions, and survey updates near Alton, Illinois.",
  alternates: { canonical: "/river-watch" },
  openGraph: {
    title: "River Watch | Official Navigation & River Conditions",
    description:
      "Official sources for Mississippi River stages, forecasts, navigation notices, channel conditions, and survey updates near Alton, Illinois.",
    url: "/river-watch",
  },
};

const sources = [
  {
    label: "River Stage & Forecast",
    title: "National Weather Service St. Louis River Summary",
    description:
      "Observed stages, 24-hour changes, and forecast information for Mississippi River points including Alton and Melvin Price Lock and Dam.",
    href: "https://forecast.weather.gov/product.php?issuedby=lsx&product=RVA&site=lsx",
    cadence: "Updated by NWS",
  },
  {
    label: "Channel Conditions",
    title: "USACE St. Louis Weekly Status Report",
    description:
      "A weekly overview of channel conditions, dredge status, marker status, stages, forecasts, navigation notices, and reported risks.",
    href: "https://www.mvs.usace.army.mil/Missions/Navigation/Status-Reports/",
    cadence: "Weekly",
  },
  {
    label: "Navigation Notices",
    title: "USACE Notices to Navigation Interests",
    description:
      "Active Corps notices for maintenance projects, hazards, restrictions, and other events affecting waterway navigation.",
    href: "https://ndc.ops.usace.army.mil/ords/f?p=107:1",
    cadence: "Change-driven",
  },
  {
    label: "Coast Guard Updates",
    title: "Broadcast Notices to Mariners",
    description:
      "Searchable Coast Guard notices for navigation hazards and events, with District 8 coverage for the inland river system.",
    href: "https://www.navcen.uscg.gov/broadcast-notice-to-mariners",
    cadence: "Change-driven",
  },
  {
    label: "Survey Updates",
    title: "USACE E-Hydro Survey Map",
    description:
      "USACE's map-based archive for available hydrographic surveys. A survey is a dated snapshot, not a vessel arrival schedule or navigation instruction.",
    href: "https://www.arcgis.com/apps/dashboards/4b8f2ba307684cf597617bf1b6d2f85d",
    cadence: "As posted",
  },
] as const;

const dailyChecks = [
  { date: "November 12, 2026", time: "6:29 AM CST", summary: "The latest accessible NWS St. Louis River Summary was issued November 11 at 7:00 AM CST and reports Alton 17.1 feet (down 1.1), Mel Price 10.3 feet (unchanged), and St. Louis 12.7 feet (down 0.2). USACE St. Louis status and E-Hydro survey pages, USACE Notices to Navigation Interests, and Coast Guard Broadcast Notices to Mariners were reviewed. The USACE status page and Coast Guard listing returned access restrictions; no newer Alton/Melvin Price local item was confirmed in the accessible official listings. These are dated planning context; official sources control.", source: "NWS St. Louis River Summary", href: "https://forecast.weather.gov/product.php?issuedby=lsx&product=RVA&site=lsx" },
  { date: "November 10, 2026", time: "6:35 AM CST", summary: "The latest NWS St. Louis River Summary available during this morning review was issued November 9 at 7:00 AM CST and reports Alton 18.6 feet (up 0.2), Mel Price 10.3 feet (up 0.6), and St. Louis 12.8 feet (up 2.1). USACE St. Louis status and E-Hydro survey pages, USACE Notices to Navigation Interests, and Coast Guard Broadcast Notices to Mariners were reviewed. No newer Alton/Melvin Price local item was confirmed in the accessible USACE notice listing; the USACE status page and Coast Guard listing returned access restrictions. These are dated planning context; official sources control.", source: "NWS St. Louis River Summary", href: "https://forecast.weather.gov/product.php?issuedby=lsx&product=RVA&site=lsx" },
  { date: "November 9, 2026", time: "6:28 AM CST", summary: "The latest NWS St. Louis River Summary available during this morning review was issued November 8 at 7:00 AM CST and reports Alton 18.4 feet (down 0.1), Mel Price 9.6 feet (up 1.0), and St. Louis 10.7 feet (up 1.7). USACE St. Louis status and E-Hydro survey pages, USACE Notices to Navigation Interests, and Coast Guard Broadcast Notices to Mariners were reviewed. The accessible USACE notice listing includes a November 4 amendment placing Dredge Potter work at Upper Mississippi River miles 174-166; no newer Alton/Melvin Price local item was confirmed in the accessible official listings. The USACE status page and Coast Guard listing returned access restrictions. These are dated planning context; official sources control.", source: "NWS St. Louis River Summary", href: "https://forecast.weather.gov/product.php?issuedby=lsx&product=RVA&site=lsx" },
  { date: "November 8, 2026", time: "6:29 AM CST", summary: "No material newer official local condition update was confirmed during this morning review. The latest NWS St. Louis River Summary available was issued November 7 at 7:00 AM CST and reports Alton 18.4 feet (down 0.7), Mel Price 8.6 feet (up 1.4), and St. Louis 9.0 feet (up 3.4). USACE St. Louis status and E-Hydro survey pages, USACE Notices to Navigation Interests, and Coast Guard Broadcast Notices to Mariners were reviewed. The USACE status page and Coast Guard listing returned access restrictions; the E-Hydro dashboard loaded, and no newer Alton/Melvin Price local item was confirmed in the accessible official listings. These are dated planning context; official sources control.", source: "NWS St. Louis River Summary", href: "https://forecast.weather.gov/product.php?issuedby=lsx&product=RVA&site=lsx" },
  { date: "November 7, 2026", time: "6:32 AM CST", summary: "No material newer official local condition update was confirmed during this morning review. The latest NWS St. Louis River Summary available was issued November 6 at 7:00 AM CST and reports Alton 19.1 feet (up 0.6), Mel Price 7.2 feet (up 1.0), and St. Louis 5.7 feet (up 0.4). USACE St. Louis status and E-Hydro survey pages, USACE Notices to Navigation Interests, and Coast Guard Broadcast Notices to Mariners were reviewed. The USACE status page and Coast Guard listing returned access restrictions; the accessible USACE notice listing did not show a current Alton/Melvin Price item. These are dated planning context; official sources control.", source: "NWS St. Louis River Summary", href: "https://forecast.weather.gov/product.php?issuedby=lsx&product=RVA&site=lsx" },
  { date: "November 6, 2026", time: "6:36 AM CST", summary: "No material newer official local condition update was confirmed during this morning review. The latest NWS St. Louis River Summary available was issued November 5 at 7:01 AM CST and reports Alton 18.6 feet (down 0.4), Mel Price 6.2 feet (up 0.4), and St. Louis 5.2 feet (up 0.6). USACE St. Louis status and E-Hydro survey pages, USACE Notices to Navigation Interests, and Coast Guard Broadcast Notices to Mariners were reviewed. The USACE status page and Coast Guard listing returned access restrictions; no newer Alton/Melvin Price local item was confirmed in the accessible official listings. These are dated planning context; official sources control.", source: "NWS St. Louis River Summary", href: "https://forecast.weather.gov/product.php?issuedby=lsx&product=RVA&site=lsx" },
  { date: "November 5, 2026", time: "6:33 AM CST", summary: "No material newer official local condition update was confirmed during this morning review. The latest NWS St. Louis River Summary available was issued November 4 at 7:01 AM CST and reports Alton 19.0 feet (down 0.2), Mel Price 5.8 feet (up 0.5), and St. Louis 4.6 feet (up 1.1). Separately, the USACE listing carries a future Lock 19 notice for Upper Mississippi River mile 364.2: daily December 5-14 closures, followed by a listed December 15-March 14 closure. That is advance planning context for work tied to the named facility, not a local access or vessel schedule answer. Official sources control.", source: "USACE Lock 19 notice", href: "https://ndc.ops.usace.army.mil/ords/ntni/print_nav_notice?in_nav_notice_number=214949&in_title_formatting=UB" },
  { date: "November 4, 2026", time: "6:28 AM CST", summary: "The latest NWS St. Louis River Summary available during this morning review was issued November 3 at 7:01 AM CST and reports Alton 19.2 feet (down 0.1), Mel Price 5.3 feet (up 0.4), and St. Louis 3.5 feet (up 0.5). USACE St. Louis status and E-Hydro survey pages, USACE Notices to Navigation Interests, and Coast Guard Broadcast Notices to Mariners were reviewed. The USACE notice listing showed Notice 215138-2 for Melvin Price with an October 28 end date; no newer Alton/Melvin Price local item was confirmed in the accessible official listings. These are dated planning context; official sources control.", source: "NWS St. Louis River Summary", href: "https://forecast.weather.gov/product.php?issuedby=lsx&product=RVA&site=lsx" },
  { date: "November 3, 2026", time: "6:29 AM CST", summary: "The latest NWS St. Louis River Summary available during this morning review was issued November 2 at 7:01 AM CST and reports Alton 19.4 feet (up 0.1), Mel Price 4.9 feet (up 0.2), and St. Louis 3.1 feet (up 0.4). USACE St. Louis status and E-Hydro survey pages, USACE Notices to Navigation Interests, and Coast Guard Broadcast Notices to Mariners were reviewed. The USACE status and Coast Guard pages returned access restrictions, and no newer Alton/Melvin Price local item was confirmed in the accessible official listings. These are dated planning context; official sources control.", source: "NWS St. Louis River Summary", href: "https://forecast.weather.gov/product.php?issuedby=lsx&product=RVA&site=lsx" },
  { date: "November 2, 2026", time: "6:29 AM CST", summary: "The latest NWS St. Louis River Summary available during this morning review was issued November 1 at 7:01 AM CST and reports Alton 19.3 feet (up 0.4), Mel Price 4.7 feet (down 0.4), and St. Louis 2.7 feet (down 0.6). USACE St. Louis status and E-Hydro survey pages, USACE Notices to Navigation Interests, and Coast Guard Broadcast Notices to Mariners were reviewed. The status and Coast Guard listings returned access restrictions, and no newer Alton/Melvin Price local item was confirmed in the accessible official listings. These are dated planning context; official sources control.", source: "NWS St. Louis River Summary", href: "https://forecast.weather.gov/product.php?issuedby=lsx&product=RVA&site=lsx" },
  { date: "November 1, 2026", time: "6:26 AM CST", summary: "The latest NWS St. Louis River Summary available during this morning review was issued October 31 at 9:01 AM CDT and reports Alton 18.9 feet (up 0.5), Mel Price 5.1 feet (down 0.6), and St. Louis 3.3 feet (down 1.4). The official USACE notice table continues to list Notice 215138-1, dated October 21 and listed until further notice, for channel-maintenance dredging and an auxiliary-lock closure at Melvin Price Locks and Dam (Upper Mississippi River Mile 200.5). USACE status and survey pages were reviewed; no newer local item was confirmed in the accessible official listings, and the Coast Guard notice listing returned an access restriction. These are dated planning context; official sources control.", source: "NWS St. Louis River Summary", href: "https://forecast.weather.gov/product.php?issuedby=lsx&product=RVA&site=lsx" },
  { date: "October 31, 2026", time: "6:27 AM CDT", summary: "The NWS River Summary issued October 30 at 9:01 AM CDT reports Alton 18.3 feet (down 0.4), Mel Price 5.7 feet (down 0.4), and St. Louis 4.7 feet (down 0.6). The USACE notice table and E-Hydro survey dashboard were reviewed; the USACE St. Louis status page and Coast Guard notice listing returned access restrictions during this review, so no newer local item was confirmed there. These are dated planning context; official sources control.", source: "NWS St. Louis River Summary", href: "https://forecast.weather.gov/product.php?issuedby=lsx&product=RVA&site=lsx" },
  { date: "October 30, 2026", time: "6:28 AM CDT", summary: "No material newer official local condition update was confirmed during this morning review. The latest NWS St. Louis River Summary remains the October 29, 9:01 AM CDT issuance: Alton 18.7 feet (down 0.7), Mel Price 6.1 feet (up 0.9), and St. Louis 5.3 feet (up 1.6). The official USACE notice listing continues to show Notice 215138-1, dated October 21 and listed until further notice, for channel-maintenance dredging and an auxiliary-lock closure at Melvin Price Locks and Dam (Upper Mississippi River Mile 200.5). USACE status and survey pages and Coast Guard listings did not yield a newer local item during this review. These are dated planning context; official sources control.", source: "NWS St. Louis River Summary", href: "https://forecast.weather.gov/product.php?issuedby=lsx&product=RVA&site=lsx" },
  { date: "October 29, 2026", time: "4:12 PM CDT", summary: "The NWS River Summary issued October 29 at 9:01 AM CDT reports Alton 18.7 feet (down 0.7), Mel Price 6.1 feet (up 0.9), and St. Louis 5.3 feet (up 1.6). The official USACE notice listing also shows Notice 215138-1, dated October 21 and listed until further notice, for channel-maintenance dredging and an auxiliary-lock closure at Melvin Price Locks and Dam (Upper Mississippi River Mile 200.5). USACE status and survey pages and Coast Guard listings were unavailable during this review. These are dated planning context; official sources control.", source: "USACE Notices to Navigation Interests", href: "https://ndc.ops.usace.army.mil/ords/f?p=107:1" },
] as const;

const reviewedSources = [
  { name: "NWS St. Louis River Summary", detail: "Reviewed November 12, 2026 at 6:29 AM CST. The latest accessible summary was issued November 11 at 7:00 AM CST." },
  { name: "USACE St. Louis status and E-Hydro survey pages", detail: "Reviewed November 12, 2026 at 6:29 AM CST; the status page returned an access restriction and the E-Hydro dashboard was reviewed." },
  { name: "USACE Notices to Navigation Interests", detail: "Reviewed November 12, 2026 at 6:29 AM CST; no newer Alton/Melvin Price local item was confirmed in the accessible listing." },
  { name: "Coast Guard Broadcast Notices to Mariners", detail: "Checked November 12, 2026 at 6:29 AM CST; the listing returned an access restriction and no newer Alton/Melvin Price local item was confirmed." },
] as const;

export default function RiverWatchPage() {
  return (
    <>
      <section className="page-hero river-watch-hero">
        <div className="page-hero-grid" aria-hidden="true" />
        <div className="shell page-hero-inner">
          <p className="eyebrow eyebrow-light">OFFICIAL RIVER INFORMATION</p>
          <h1>River Watch</h1>
          <p className="page-hero-copy">
            A practical starting point for current Mississippi River information near Alton, Illinois.
          </p>
        </div>
      </section>

      <section className="section river-watch-intro">
        <div className="shell split-heading">
          <div>
            <p className="eyebrow">CHECK THE SOURCE</p>
            <h2>Current information changes on its own schedule.</h2>
          </div>
          <p>
            River conditions, channel activity, and notices can change independently. This page points to
            the official sources that crews, dispatchers, and shoreside teams can check before confirming a
            handoff window or discussing a current condition.
          </p>
        </div>

        <div className="shell river-watch-grid">
          {sources.map((source) => (
            <article className="river-watch-card" key={source.title}>
              <div className="river-watch-card-meta">
                <span>{source.label}</span>
                <span>{source.cadence}</span>
              </div>
              <h3>{source.title}</h3>
              <p>{source.description}</p>
              <a href={source.href} target="_blank" rel="noopener noreferrer">
                Open official source <span aria-hidden="true">-&gt;</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="river-watch-note">
        <div className="shell river-watch-note-grid">
          <div>
            <p className="eyebrow eyebrow-light">DAILY WATCH NOTES</p>
            <h2>Short updates. Clear sources.</h2>
          </div>
          <div>
            <p>
              <strong>Daily check: November 12, 2026 at 6:29 AM CST.</strong> The latest accessible NWS River Summary was issued November 11 at 7:00 AM CST and reports Alton 17.1 feet (down 1.1), Mel Price 10.3 feet (unchanged), and St. Louis 12.7 feet (down 0.2). Those are point-specific observations, not a forecast or an access answer. For future planning context, the <a href="https://www.weather.gov/mbrfc/maeuncertainty" target="_blank" rel="noopener noreferrer">Missouri Basin River Forecast Center&apos;s forecast-uncertainty information</a> explains that forecasts are tied to defined points and have uncertainty. USACE St. Louis status and E-Hydro survey pages, USACE Notices to Navigation Interests, and Coast Guard Broadcast Notices to Mariners were reviewed. The USACE status page and Coast Guard listing returned access restrictions; no newer Alton/Melvin Price local item was confirmed in the accessible official listings. These are dated planning context; official sources control.
            </p>
            <p>
              <strong>Sources reviewed:</strong>
            </p>
            <ul>
              {reviewedSources.map((source) => (
                <li key={source.name}>
                  <strong>{source.name}:</strong> {source.detail}
                </li>
              ))}
            </ul>
            <p>
              The <a href="https://forecast.weather.gov/product.php?issuedby=lsx&amp;product=RVA&amp;site=lsx" target="_blank" rel="noopener noreferrer">NWS river summary</a> supplies the gauge names and issuance time. River stages alone do not establish vessel access or a delivery window.
            </p>
            <p>
              This page receives a dated morning check every day. If no material official update is available,
              the page says that directly instead of treating older conditions as new. If a source has a newer
              update, the source itself controls.
            </p>
            <p>
              River Watch is general information, not navigation advice, a safety directive, or a promise
              about vessel access, timing, or delivery availability.
            </p>
          </div>
        </div>
      </section>

      <section className="section river-watch-history">
        <div className="shell">
          <div className="split-heading river-watch-history-heading">
            <div>
              <p className="eyebrow">ROLLING 14-DAY LOG</p>
              <h2>Recent daily checks, kept in view.</h2>
            </div>
            <p>
              The newest fourteen published checks stay here in reverse chronological order. Entries are dated
              snapshots of the source review, not live navigation directions or delivery commitments.
            </p>
          </div>
          <div className="river-watch-history-list">
            {dailyChecks.map((check) => (
              <article className="river-watch-history-item" key={check.date}>
                <div className="river-watch-history-date">
                  <time>{check.date}</time>
                  <span>{check.time}</span>
                </div>
                <p>{check.summary}</p>
                <a href={check.href} target="_blank" rel="noopener noreferrer">
                  {check.source} <span aria-hidden="true">-&gt;</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section river-watch-action">
        <div className="shell split-heading">
          <div>
            <p className="eyebrow">PLANNING A HANDOFF?</p>
            <h2>Bring the river context into the request.</h2>
          </div>
          <div>
            <p>
              Include the vessel or tow name, intended meeting area, timing range, and a current contact.
              That gives everyone a clearer starting point if conditions or schedules change.
            </p>
            <Link className="btn btn-secondary" href="/request-delivery" scroll={false}>
              Request Delivery <span aria-hidden="true">-&gt;</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
