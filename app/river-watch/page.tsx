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
  { date: "October 28, 2026", time: "6:32 AM CDT", summary: "The NWS River Summary issued October 27 at 9:01 AM CDT reports Alton 18.6 feet (up 0.1), Mel Price 5.6 feet (down 1.3), and St. Louis 4.7 feet (down 2.0). Its River Statement projects Mel Price at 5.0 feet and St. Louis at 3.0 feet on November 1. USACE status and survey pages were unavailable, the USACE notice table did not load, and no newer local District 8 item was confirmed in accessible Coast Guard listings. These are dated planning context; official sources control.", source: "NWS St. Louis River Summary", href: "https://forecast.weather.gov/product.php?issuedby=lsx&product=RVA&site=lsx" },
  { date: "October 26, 2026", time: "6:27 AM CDT", summary: "The NWS summary issued October 24 at 9:01 AM CDT reports Alton 18.4 feet (down 0.3), Mel Price 7.7 feet (down 0.3), and St. Louis 8.2 feet (down 0.5). These observations are dated planning context. USACE status and survey pages and Coast Guard notices were inaccessible; the USACE notice table did not load.", source: "NWS St. Louis River Summary", href: "https://forecast.weather.gov/product.php?issuedby=lsx&product=RVA&site=lsx" },
  {
    date: "October 23, 2026",
    time: "6:35 AM CDT",
    summary:
      "The latest NWS St. Louis River Summary reviewed was issued October 21 at 9:01 AM CDT and reports Alton 19.1 feet (up 1.0), Mel Price 7.1 feet (down 0.4), and St. Louis 7.5 feet (down 0.7). USACE St. Louis status and survey pages, USACE Notices to Navigation Interests, and Coast Guard District 8 notices were also reviewed; no newer local condition item was confirmed in the accessible official listings. These observations are dated planning context; official sources control.",
    source: "NWS St. Louis River Summary",
    href: "https://forecast.weather.gov/product.php?issuedby=lsx&product=RVA&site=lsx",
  },
  {
    date: "October 21, 2026",
    time: "6:34 AM CDT",
    summary:
      "The October 20 NWS River Summary reports Alton 18.1 feet (up 0.3), Mel Price 7.4 feet (down 1.2), and St. Louis 8.2 feet (down 1.8). USACE St. Louis status and survey pages, USACE Notices to Navigation Interests, and Coast Guard District 8 notices were also reviewed; no newer local condition item was confirmed in the accessible official listings. These observations are dated planning context; official sources control.",
    source: "NWS St. Louis River Summary",
    href: "https://forecast.weather.gov/product.php?issuedby=lsx&product=RVA&site=lsx",
  },
  {
    date: "October 20, 2026",
    time: "6:32 AM CDT",
    summary:
      "No material official local condition update was confirmed during this morning review of the NWS St. Louis River Summary, USACE St. Louis status and survey pages, USACE Notices to Navigation Interests, and Coast Guard District 8 notices. No newer Alton/Melvin Price condition item was confirmed in the accessible official listings; official sources control.",
    source: "NWS St. Louis River Summary",
    href: "https://forecast.weather.gov/product.php?issuedby=lsx&product=RVA&site=lsx",
  },
  {
    date: "October 19, 2026",
    time: "6:30 AM CDT",
    summary:
      "The latest NWS St. Louis River Summary, issued October 18 at 9:00 AM CDT, reports Alton 19.7 feet (up 1.4), Mel Price 7.8 feet (down 1.0), and St. Louis 8.9 feet (down 1.5). USACE St. Louis status and survey pages, USACE Notices to Navigation Interests, and Coast Guard District 8 notice listings were also reviewed; no newer local condition item was confirmed in the accessible official listings. These observations are dated planning context; official sources control.",
    source: "NWS St. Louis River Summary",
    href: "https://forecast.weather.gov/product.php?issuedby=lsx&product=RVA&site=lsx",
  },
  {
    date: "October 18, 2026",
    time: "6:30 AM CDT",
    summary:
      "No material official local condition update was confirmed during this morning review of the NWS St. Louis River Summary, USACE St. Louis status and survey pages, USACE Notices to Navigation Interests, and Coast Guard District 8 notices. The most recent NWS forecast guidance reviewed was issued October 14; its observations and forecasts remain dated planning context. Official sources control.",
    source: "NWS St. Louis River Summary",
    href: "https://forecast.weather.gov/product.php?issuedby=lsx&product=RVA&site=lsx",
  },
  {
    date: "October 17, 2026",
    time: "6:30 AM CDT",
    summary:
      "The latest NWS River Summary is dated October 16: Alton 18.5 feet (down 0.2), Mel Price 9.6 feet (up 0.2), and St. Louis 11.4 feet (up 0.2). USACE St. Louis status and notice listings, survey pages, and Coast Guard District 8 notices were also reviewed; no newer local condition item was confirmed in the accessible official listings. These observations are dated planning context; official sources control.",
    source: "NWS St. Louis River Summary",
    href: "https://forecast.weather.gov/product.php?issuedby=lsx&product=RVA&site=lsx",
  },
  {
    date: "October 15, 2026",
    time: "6:28 AM CDT",
    summary:
      "The latest NWS River Summary is dated October 14: Alton 17.1 feet (down 2.0), Mel Price 11.1 feet (up 0.8), and St. Louis 13.6 feet (up 1.5). For upstream planning context, USACE’s October 6 Lock 25 notice listed an October 13 construction-related closure; its stated date is now past, so later official updates control.",
    source: "USACE Notice to Navigation Interests",
    href: "https://ndc.ops.usace.army.mil/ords/ntni/print_nav_notice?in_nav_notice_number=215160&in_title_formatting=UB",
  },
  {
    date: "October 14, 2026",
    time: "8:22 AM CDT",
    summary:
      "No material official local condition update was confirmed during this morning review of the NWS St. Louis River Summary, USACE St. Louis status and survey pages, USACE Notices to Navigation Interests, and Coast Guard District 8 notices. Previously published information remains dated context; official sources control.",
    source: "NWS St. Louis River Summary",
    href: "https://forecast.weather.gov/product.php?issuedby=lsx&product=RVA&site=lsx",
  },
  {
    date: "October 13, 2026",
    time: "6:34 AM CDT",
    summary:
      "Before the next NWS issuance, the latest River Summary is dated October 12: Alton 15.8 feet (down 0.4), Mel Price 11.6 feet (down 0.4), and St. Louis 14.5 feet (down 0.8). No newer local USACE or Coast Guard condition item was confirmed in the official source listings reviewed this morning; official sources control.",
    source: "NWS St. Louis River Summary",
    href: "https://forecast.weather.gov/product.php?issuedby=lsx&product=RVA&site=lsx",
  },
  {
    date: "October 12, 2026",
    time: "6:28 AM CDT",
    summary:
      "No material official local condition update was confirmed during this morning review of the NWS St. Louis River Summary, USACE St. Louis status and survey pages, USACE Notices to Navigation Interests, and Coast Guard District 8 notices. The latest NWS summary remains dated October 10; previously published information remains dated context, and official sources control.",
    source: "NWS St. Louis River Summary",
    href: "https://forecast.weather.gov/product.php?issuedby=lsx&product=RVA&site=lsx",
  },
  {
    date: "October 11, 2026",
    time: "6:30 AM CDT",
    summary:
      "Before the next NWS issuance, the latest River Summary remains October 10: Alton 14.8 feet (up 0.4), Mel Price 13.4 feet (down 1.5), and St. Louis 17.4 feet (down 2.1). No additional local condition item was confirmed in the official source listings reviewed this morning; official sources control.",
    source: "NWS St. Louis River Summary",
    href: "https://forecast.weather.gov/product.php?issuedby=lsx&product=RVA&site=lsx",
  },
  {
    date: "October 10, 2026",
    time: "6:31 AM CDT",
    summary:
      "Before the next NWS issuance, the latest River Summary remains October 9: Alton 14.4 feet (up 0.2), Mel Price 14.8 feet (down 1.6), and St. Louis 19.5 feet (down 2.1). No newer local USACE or Coast Guard condition item was confirmed during this morning review; official sources control.",
    source: "NWS St. Louis River Summary",
    href: "https://forecast.weather.gov/product.php?issuedby=lsx&product=RVA&site=lsx",
  },
] as const;

const reviewedSources = [
  { name: "NWS St. Louis River Summary and River Statement", detail: "Reviewed October 28, 2026 at 6:32 AM CDT. The latest River Summary was issued October 27 at 9:01 AM CDT; the latest River Statement was issued October 27 at 11:02 AM CDT." },
  { name: "USACE St. Louis status and survey pages", detail: "Status and survey pages were unavailable during this review; current listings could not be confirmed." },
  { name: "USACE Notices to Navigation Interests", detail: "The notice table did not load during this review." },
  { name: "Coast Guard Broadcast Notices to Mariners", detail: "District 8 listings were reviewed; no newer local condition item was confirmed in the accessible results." },
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
              <strong>Morning check: October 28, 2026 at 6:32 AM CDT.</strong> The October 27 NWS summary reports Alton 18.6 feet (up 0.1), Mel Price 5.6 feet (down 1.3), and St. Louis 4.7 feet (down 2.0). The NWS River Statement projects Mel Price at 5.0 feet and St. Louis at 3.0 feet on November 1. These are dated planning context.
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
