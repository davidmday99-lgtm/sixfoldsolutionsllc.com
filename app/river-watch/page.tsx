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
  {
    date: "September 10, 2026",
    time: "6:33 AM CDT",
    summary:
      "The latest NWS summary available at the check showed lower stages at Melvin Price and St. Louis; no new nearby notice was identified.",
    source: "NWS St. Louis River Summary",
    href: "https://forecast.weather.gov/product.php?issuedby=lsx&product=RVA&site=lsx",
  },
  {
    date: "September 9, 2026",
    time: "6:35 AM CDT",
    summary:
      "A new Coast Guard notice reported scheduled repair closures at Lock and Dam 25; the latest NWS summary showed a 24-hour decline at Melvin Price and St. Louis.",
    source: "Coast Guard notice and NWS River Summary",
    href: "https://www.navcen.uscg.gov/broadcast-notice-to-mariners-message?guid=69801581",
  },
  {
    date: "September 8, 2026",
    time: "6:35 AM CDT",
    summary:
      "A new Coast Guard notice placed the St. Louis reach in Low Water Watch; the latest NWS summary showed lower 24-hour stages at Melvin Price and St. Louis.",
    source: "Coast Guard notice",
    href: "https://www.navcen.uscg.gov/broadcast-notice-to-mariners-message?guid=69781616",
  },
  {
    date: "September 7, 2026",
    time: "6:34 AM CDT",
    summary:
      "The latest NWS summary showed Alton steady at 19.3 feet and Mel Price up 0.1 foot over 24 hours; a Coast Guard notice reported dredging near Upper Mississippi River mile 172.",
    source: "NWS St. Louis River Summary",
    href: "https://forecast.weather.gov/product.php?issuedby=lsx&product=RVA&site=lsx",
  },
  {
    date: "September 6, 2026",
    time: "6:32 AM CDT",
    summary:
      "The NWS summary advanced to its September 5 issuance, showing Alton at 19.3 feet and Mel Price at 3.2 feet; no material new notice or survey item was identified.",
    source: "NWS St. Louis River Summary",
    href: "https://forecast.weather.gov/product.php?issuedby=lsx&product=RVA&site=lsx",
  },
  {
    date: "September 5, 2026",
    time: "6:32 AM CDT",
    summary:
      "The NWS summary advanced to its September 4 issuance, showing Alton at 19.4 feet and Mel Price at 4.3 feet; other reviewed official sources did not show a material update.",
    source: "NWS St. Louis River Summary",
    href: "https://forecast.weather.gov/product.php?issuedby=lsx&product=RVA&site=lsx",
  },
  {
    date: "September 4, 2026",
    time: "7:57 AM CDT",
    summary:
      "The NWS summary and the St. Louis weekly status-report listing both advanced, while survey pages continued to show the September 1 and 2 uploads already identified.",
    source: "USACE St. Louis Weekly Status Report",
    href: "https://www.mvs.usace.army.mil/Missions/Navigation/Status-Reports/",
  },
  {
    date: "September 3, 2026",
    time: "8:29 AM CDT",
    summary:
      "USACE survey pages showed September 1 field work uploaded September 2 in Middle Mississippi reaches and the Melvin Price pool; no newer NWS summary or weekly report was visible.",
    source: "USACE E-Hydro Survey Map",
    href: "https://www.arcgis.com/apps/dashboards/4b8f2ba307684cf597617bf1b6d2f85d",
  },
  {
    date: "September 2, 2026",
    time: "6:34 AM CDT",
    summary:
      "The September 1 NWS river summary showed Alton at 19.7 feet and Mel Price at 5.0 feet; other reviewed district sources remained on earlier postings.",
    source: "NWS St. Louis River Summary",
    href: "https://forecast.weather.gov/product.php?issuedby=lsx&product=RVA&site=lsx",
  },
  {
    date: "September 1, 2026",
    time: "8:19 AM CDT",
    summary:
      "A Coast Guard Upper Mississippi notice dated August 30 reported dredging near mile 172; the latest NWS summary then available showed Alton at 19.4 feet and Mel Price at 4.6 feet.",
    source: "Coast Guard Broadcast Notices to Mariners",
    href: "https://www.navcen.uscg.gov/broadcast-notice-to-mariners",
  },
] as const;

const reviewedSources = [
  {
    name: "NWS St. Louis River Summary",
    detail:
      "Reviewed September 10, 2026. The latest summary retrieved directly from NWS was issued at 9:00 AM CDT September 9: Alton 19.2 feet (reported 24-hour change 0.0), Mel Price Lock and Dam 2.6 feet (down 0.2), and St. Louis -1.4 feet (down 0.4). These are September 9 observations, not readings from this morning.",
  },
  {
    name: "USACE St. Louis Weekly Status Report",
    detail:
      "Reviewed September 10, 2026. The available official listing showed September 2 as the newest weekly report. Direct refresh was blocked by the source website; a newer posting could not be ruled out.",
  },
  {
    name: "USACE St. Louis Survey Pages / E-Hydro postings",
    detail:
      "Reviewed September 10, 2026. The available cached district dredge-survey listing showed September 1-2 uploads for Melvin Price Pool and the Middle Mississippi. Direct refresh was blocked, so survey freshness could not be confirmed today.",
  },
  {
    name: "USACE Notices to Navigation Interests",
    detail:
      "Reviewed September 10, 2026. The official St. Louis District active-notice feed returned six notices, none issued since yesterday's check. No newly issued nearby notice was identified in that feed.",
  },
  {
    name: "Coast Guard District 8 Upper Mississippi Broadcast Notices to Mariners",
    detail:
      "Reviewed September 10, 2026. The September 9-10 search returned nine messages. Their full texts covered Missouri and Illinois River updates, Upper Mississippi dredging above mile 301, and cancellations. No new Alton/Melvin Price or Middle Mississippi condition statement was identified in those messages; this does not establish that earlier notices have ended.",
  },
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
              <strong>Morning check: September 10, 2026 at 6:33 AM CDT.</strong> The latest NWS summary
              retrieved is dated September 9 and reports lower stages at Melvin Price and St. Louis.
              Official notice feeds were checked; USACE report and survey refresh limitations are noted below.
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
              Planning context for September 10: the September 9{" "}
              <a href="https://forecast.weather.gov/product.php?issuedby=lsx&amp;product=RVA&amp;site=lsx" target="_blank" rel="noopener noreferrer">
                NWS river summary
              </a>{" "}
              reports 24-hour declines of 0.2 feet at Melvin Price and 0.4 feet at St. Louis, while Alton
              is unchanged. Those reported changes belong to the dated NWS summary; they are not new
              measurements from this morning. River stages alone do not establish vessel access or a delivery window.
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
