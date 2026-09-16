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
    date: "September 16, 2026",
    time: "6:34 AM CDT",
    summary:
      "A September 15 Coast Guard Upper Mississippi notice lists the Washington and Jefferson reaches in Low Water Action; the latest NWS summary, issued September 15, shows Alton up 0.4 foot to 19.4 feet, Mel Price down 1.3 feet to 4.0 feet, and St. Louis down 2.3 feet to 1.4 feet.",
    source: "Coast Guard Broadcast Notice to Mariners",
    href: "https://www.navcen.uscg.gov/broadcast-notice-to-mariners-message?guid=69915939",
  },
  {
    date: "September 15, 2026",
    time: "7:31 AM CDT",
    summary:
      "The latest NWS summary, issued September 14, shows Alton down 0.7 foot to 19.0 feet, Mel Price up 0.7 foot to 5.3 feet, and St. Louis up 1.7 feet to 3.7 feet; no newer relevant active USACE notice or Coast Guard Upper Mississippi notice was identified.",
    source: "NWS St. Louis River Summary",
    href: "https://forecast.weather.gov/product.php?issuedby=lsx&product=RVA&site=lsx",
  },
  {
    date: "September 14, 2026",
    time: "6:32 AM CDT",
    summary:
      "The September 13 NWS summary shows Alton up 0.5 foot to 19.7 feet, Mel Price up 1.1 feet to 4.6 feet, and St. Louis up 1.6 feet to 2.0 feet; the September 9 USACE weekly status report is now the newest listed report.",
    source: "NWS St. Louis River Summary",
    href: "https://forecast.weather.gov/product.php?issuedby=lsx&product=RVA&site=lsx",
  },
  {
    date: "September 13, 2026",
    time: "6:32 AM CDT",
    summary:
      "The latest NWS summary, issued September 12, shows Alton steady at 19.2 feet, Mel Price up 0.4 foot to 3.5 feet, and St. Louis up 0.7 foot to 0.3 foot; no newer relevant USACE active notice was identified.",
    source: "NWS St. Louis River Summary",
    href: "https://forecast.weather.gov/product.php?issuedby=lsx&product=RVA&site=lsx",
  },
  {
    date: "September 12, 2026",
    time: "6:31 AM CDT",
    summary:
      "A new Coast Guard Upper Mississippi notice places the Jefferson Reach, river miles 100–200, in Low Water Watch; the latest NWS summary shows Alton up 0.2 foot and Mel Price up 0.4 foot over 24 hours.",
    source: "Coast Guard Broadcast Notice to Mariners",
    href: "https://www.navcen.uscg.gov/broadcast-notice-to-mariners-message?guid=69847222",
  },
  {
    date: "September 11, 2026",
    time: "6:33 AM CDT",
    summary:
      "A newly issued USACE notice says the Melvin Price auxiliary lock is closed for overhead bulkhead-crane repairs through September 16; the latest NWS summary shows Alton down 0.1 foot and Mel Price up 0.1 foot over 24 hours.",
    source: "USACE Notice to Navigation Interests",
    href: "https://ndc.ops.usace.army.mil/ords/ntni/print_nav_notice?in_nav_notice_number=215034&in_title_formatting=UB",
  },
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
] as const;

const reviewedSources = [
  {
    name: "NWS St. Louis River Summary",
    detail:
      "Reviewed September 16, 2026. The latest summary retrieved directly from NWS was issued at 9:00 AM CDT September 15: Alton 19.4 feet (up 0.4), Mel Price Lock and Dam 4.0 feet (down 1.3), and St. Louis 1.4 feet (down 2.3). These are September 15 observations, not readings from this morning.",
  },
  {
    name: "USACE St. Louis Weekly Status Report",
    detail:
      "Reviewed September 16, 2026. The September 9 weekly channel-condition report remains the newest listed posting. The report is dated information; the report itself controls.",
  },
  {
    name: "USACE St. Louis Survey Pages / E-Hydro postings",
    detail:
      "Reviewed September 16, 2026. No newer local survey posting was confirmed during this check; the previously available September 1-2 uploads for Melvin Price Pool and the Middle Mississippi remain dated context, not a current condition.",
  },
  {
    name: "USACE Notices to Navigation Interests",
    detail:
      "Reviewed September 16, 2026. The active-notice feed returned eight notices; the new September 15 entry concerns the Kaskaskia River, and no newer relevant Alton or Melvin Price notice was identified. The September 10 Melvin Price auxiliary-lock repair notice remains linked in the September 11 archive entry.",
  },
  {
    name: "Coast Guard District 8 Upper Mississippi Broadcast Notices to Mariners",
    detail:
      "Reviewed September 16, 2026. A September 15 notice, SEC UMR BNM 0210-26, lists the Washington and Jefferson reaches in Low Water Action. The notice itself controls.",
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
              <strong>Morning check: September 16, 2026 at 6:34 AM CDT.</strong> The latest NWS summary
              retrieved is dated September 15. A new Coast Guard Upper Mississippi notice lists the Washington
              and Jefferson reaches in Low Water Action; the dated official notice controls.
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
              Planning context for September 16: the September 15{" "}
              <a href="https://forecast.weather.gov/product.php?issuedby=lsx&amp;product=RVA&amp;site=lsx" target="_blank" rel="noopener noreferrer">
                NWS river summary
              </a>{" "}
              reports Alton up 0.4 foot to 19.4 feet, Mel Price down 1.3 feet to 4.0 feet, and St. Louis down
              2.3 feet to 1.4 feet over 24 hours. A September 15{" "}
              <a href="https://www.navcen.uscg.gov/broadcast-notice-to-mariners-message?guid=69915939" target="_blank" rel="noopener noreferrer">
                Coast Guard notice
              </a>{" "}
              lists the Washington and Jefferson reaches in Low Water Action. The September 9{" "}
              <a href="https://www.mvs.usace.army.mil/Portals/54/docs/navigation/status%20reports/2026/Channel%20Condition%20Status%2009%20Sep%202026%20-%20Legal%20Size.pdf" target="_blank" rel="noopener noreferrer">
                USACE weekly status report
              </a>{" "}
              is the newest listed weekly posting. Those reported details belong to their dated official sources;
              they are not new measurements from this morning.
              River stages alone do not establish vessel access or a delivery window.
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
