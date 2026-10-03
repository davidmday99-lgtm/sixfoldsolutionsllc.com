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
    date: "October 3, 2026",
    time: "6:32 AM CDT",
    summary:
      "Before the next NWS issuance, the latest published River Summary remains October 2: Alton 15.4 feet (up 0.7), Mel Price 9.3 feet (down 0.8), and St. Louis 10.4 feet (down 1.3). A new USACE notice states that dredging begins at Melvin Price's Auxiliary Lock October 3 and that the Auxiliary Lock is closed for that work; the official notice controls.",
    source: "USACE Notice to Navigation Interests",
    href: "https://ndc.ops.usace.army.mil/ords/ntni/print_nav_notice?in_nav_notice_number=215138&in_title_formatting=UB",
  },
  {
    date: "October 2, 2026",
    time: "1:47 PM CDT",
    summary:
      "The October 2 NWS River Summary reports Alton 15.4 feet (up 0.7), Mel Price 9.3 feet (down 0.8), and St. Louis 10.4 feet (down 1.3). No newer local USACE or Coast Guard condition item was confirmed during this afternoon review; official sources control.",
    source: "NWS St. Louis River Summary",
    href: "https://forecast.weather.gov/product.php?issuedby=lsx&product=RVA&site=lsx",
  },
  {
    date: "October 1, 2026",
    time: "6:32 AM CDT",
    summary:
      "Before the next NWS issuance, the latest published River Summary remains September 30: Alton 14.3 feet (steady), Mel Price 11.3 feet (down 0.6), and St. Louis 13.5 feet (down 1.7). No newer local USACE or Coast Guard condition item was confirmed during this morning review; official sources control.",
    source: "NWS St. Louis River Summary",
    href: "https://forecast.weather.gov/product.php?issuedby=lsx&product=RVA&site=lsx",
  },
  {
    date: "September 30, 2026",
    time: "6:33 AM CDT",
    summary:
      "The September 29 NWS River Summary reports Alton 14.3 feet (steady), Mel Price 11.8 feet (down 1.4), and St. Louis 15.1 feet (down 1.1). A September 29 Coast Guard notice identifies the Washington and Jefferson reaches in Low Water Watch; the official notice controls.",
    source: "Coast Guard Broadcast Notice to Mariners",
    href: "https://www.navcen.uscg.gov/broadcast-notice-to-mariners-message?guid=70062071",
  },
  {
    date: "September 29, 2026",
    time: "6:32 AM CDT",
    summary:
      "The September 28 NWS River Summary reports Alton 14.4 feet (down 0.4), Mel Price 13.2 feet (down 0.2), and St. Louis 16.2 feet (down 0.2). A September 28 USACE update adds an October 6 Lock and Dam 25 construction-closure date; Lock and Dam 25 is upstream of the Alton/Melvin Price reach. The official notice controls.",
    source: "USACE Notice to Navigation Interests",
    href: "https://ndc.ops.usace.army.mil/ords/ntni/print_nav_notice?in_nav_notice_number=215108&in_title_formatting=UB",
  },
  {
    date: "September 28, 2026",
    time: "6:32 AM CDT",
    summary:
      "The September 27 NWS River Summary reports Alton 14.8 feet (up 0.2), Mel Price 13.4 feet (up 0.2), and St. Louis 16.4 feet (up 0.5). No newer local USACE condition notice was confirmed; September 26 Coast Guard notices include a Pool 24 High Water Watch upstream of the Alton/Melvin Price reach. Official sources control.",
    source: "NWS St. Louis River Summary",
    href: "https://forecast.weather.gov/product.php?issuedby=lsx&product=RVA&site=lsx",
  },
  {
    date: "September 27, 2026",
    time: "6:33 AM CDT",
    summary:
      "The September 26 NWS River Summary reports Alton 14.5 feet (down 0.3), Mel Price 13.2 feet (up 0.5), and St. Louis 15.9 feet (up 0.7). A September 25 USACE revision schedules Dredge Goetz work at the Upper Chain of Rocks Canal Entrance, mile 194.1, beginning September 27; the official notice controls.",
    source: "USACE Notice to Navigation Interests",
    href: "https://ndc.ops.usace.army.mil/ords/ntni/print_nav_notice?in_nav_notice_number=215102&in_title_formatting=UB",
  },
  {
    date: "September 26, 2026",
    time: "6:31 AM CDT",
    summary:
      "The September 25 NWS River Summary reports Alton 14.8 feet (down 0.6), Mel Price 12.7 feet (up 0.5), and St. Louis 15.2 feet (up 0.8). No newer local USACE or Coast Guard condition item was confirmed during this morning review; official sources control.",
    source: "NWS St. Louis River Summary",
    href: "https://forecast.weather.gov/product.php?issuedby=lsx&product=RVA&site=lsx",
  },
  {
    date: "September 25, 2026",
    time: "6:33 AM CDT",
    summary:
      "Before the next NWS River Summary issuance, the latest published observations remain September 24: Alton 15.4 feet (up 0.8), Mel Price 12.2 feet (up 0.2), and St. Louis 14.5 feet (down 0.1). A September 24 USACE update adds September 29 and October 1 Lock and Dam 25 construction-closure dates; the official notice controls.",
    source: "USACE Notice to Navigation Interests",
    href: "https://ndc.ops.usace.army.mil/ords/ntni/print_nav_notice?in_nav_notice_number=215092&in_title_formatting=UB",
  },
  {
    date: "September 24, 2026",
    time: "9:22 AM CDT",
    summary:
      "The September 24 NWS River Summary reports Alton 15.4 feet (up 0.8), Mel Price 12.2 feet (up 0.2), and St. Louis 14.5 feet (down 0.1). A September 22 Coast Guard notice identifies Dredge Goetz operations at Upper Mississippi River mile 194 beginning September 23; the official notice controls.",
    source: "Coast Guard Broadcast Notice to Mariners",
    href: "https://www.navcen.uscg.gov/broadcast-notice-to-mariners-message?guid=69989962",
  },
  {
    date: "September 22, 2026",
    time: "6:32 AM CDT",
    summary:
      "The September 21 NWS River Summary reports Alton 16.8 feet (down 1.3), Mel Price 9.2 feet (up 1.5), and St. Louis 9.7 feet (up 2.6). A September 21 USACE update adds a September 24 Lock and Dam 25 closure to its existing construction notice; the official notice controls.",
    source: "USACE Notice to Navigation Interests",
    href: "https://ndc.ops.usace.army.mil/ords/ntni/print_nav_notice?in_nav_notice_number=215077&in_title_formatting=UB",
  },
  {
    date: "September 21, 2026",
    time: "6:33 AM CDT",
    summary:
      "The latest NWS River Summary remains the September 18 issuance: Alton 19.4 feet (up 0.1), Mel Price 5.2 feet (up 0.9), and St. Louis 3.0 feet (up 1.3). The active USACE St. Louis notice feed includes a September 17 Dredge Goetz notice scheduling work at Upper Mississippi River mile 194.1 beginning September 23; the official notice controls.",
    source: "USACE Notice to Navigation Interests",
    href: "https://ndc.ops.usace.army.mil/ords/ntni/print_nav_notice?in_nav_notice_number=215066&in_title_formatting=UB",
  },
  {
    date: "September 20, 2026",
    time: "6:34 AM CDT",
    summary:
      "The latest NWS summary, issued September 18, shows Alton up 0.1 foot to 19.4 feet, Mel Price up 0.9 foot to 5.2 feet, and St. Louis up 1.3 feet to 3.0 feet; a September 18 Coast Guard update identifies mechanical dredging at Upper Mississippi River mile 125.7, and the official notice controls.",
    source: "Coast Guard Broadcast Notice to Mariners",
    href: "https://www.navcen.uscg.gov/broadcast-notice-to-mariners-message?guid=69959027",
  },
  {
    date: "September 18, 2026",
    time: "8:22 AM CDT",
    summary:
      "The September 17 NWS summary shows Alton down 0.2 foot to 19.3 feet, Mel Price up 0.7 foot to 4.2 feet, and St. Louis up 1.1 feet to 1.6 feet; a September 17 USACE update cancels the previously scheduled September 18 ten-hour main-lock closure at Melvin Price and notes possible intermittent repair closures during September 21-25.",
    source: "USACE Notice to Navigation Interests",
    href: "https://ndc.ops.usace.army.mil/ords/ntni/print_nav_notice?in_nav_notice_number=215071&in_title_formatting=UB",
  },
] as const;

const reviewedSources = [
  {
    name: "NWS St. Louis River Summary",
    detail:
      "Reviewed October 3, 2026 at 6:32 AM CDT. Before the next issuance, the latest published summary remains October 2 at 9:00 AM CDT: Alton 15.4 feet (up 0.7), Mel Price Lock and Dam 9.3 feet (down 0.8), and St. Louis 10.4 feet (down 1.3).",
  },
  {
    name: "USACE St. Louis Weekly Status Report",
    detail:
      "Reviewed October 3, 2026 at 6:32 AM CDT. The status-report page did not permit a current listing review during this check, so no newer weekly channel-condition report was confirmed. Previously published reports remain dated planning context; the report itself controls.",
  },
  {
    name: "USACE St. Louis Survey Pages / E-Hydro postings",
    detail:
      "Reviewed October 3, 2026 at 6:32 AM CDT. The official survey listing shows dated Middle Mississippi uploads through September 14 and Melvin Price Pool uploads through September 1; no newer local posting was confirmed during this check. Surveys are dated context, not current conditions.",
  },
  {
    name: "USACE Notices to Navigation Interests",
    detail:
      "Reviewed October 3, 2026 at 6:32 AM CDT. The active St. Louis District feed includes an October 1 notice effective October 3 for dredging at Melvin Price's Auxiliary Lock and its closure for that work. The official notice controls.",
  },
  {
    name: "Coast Guard District 8 Upper Mississippi Broadcast Notices to Mariners",
    detail:
      "Reviewed October 3, 2026 at 6:32 AM CDT. No newer local condition item was confirmed during this check; the September 29 Low Water Watch notice for the Washington and Jefferson reaches remains dated official context. The official notice controls.",
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
              <strong>Morning check: October 3, 2026 at 6:32 AM CDT.</strong> Before the next NWS issuance,
              the latest published River Summary remains October 2. A new USACE notice identifies dredging at Melvin Price's Auxiliary Lock beginning October 3; official sources control.
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
              Planning context for October 3: the latest published{" "}
              <a href="https://forecast.weather.gov/product.php?issuedby=lsx&amp;product=RVA&amp;site=lsx" target="_blank" rel="noopener noreferrer">
                NWS river summary
              </a>{" "}
              issued October 2, reports Alton up 0.7 foot to 15.4 feet, Mel Price down 0.8 foot to 9.3 feet,
              and St. Louis down 1.3 feet to 10.4 feet over 24 hours. An October 1 USACE{" "}
              <a href="https://ndc.ops.usace.army.mil/ords/ntni/print_nav_notice?in_nav_notice_number=215138&amp;in_title_formatting=UB" target="_blank" rel="noopener noreferrer">
                notice
              </a>{" "}
              effective October 3 identifies dredging at Melvin Price's Auxiliary Lock and its closure for that work. No newer local Coast Guard condition item was confirmed during this morning review. Those reported details belong to their official sources. River stages alone do not establish vessel
              access or a delivery window. The NWS defines <a href="https://forecast.weather.gov/glossary.php?word=STAGE" target="_blank" rel="noopener noreferrer">river stage</a> as the water-surface level above an established datum at a given location, so preserve the gauge name and issuance date when using it as planning context.
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
