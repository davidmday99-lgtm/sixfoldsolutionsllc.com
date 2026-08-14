import type { Metadata } from "next";
import Image from "next/image";
import { CTAButton } from "../components/CTAButton";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Six Fold Solutions LLC, a veteran-owned commercial marine delivery business based in Alton, Illinois.",
};

const values = [
  ["Accountability", "Taking ownership of the request and the commitments made."],
  ["Communication", "Keeping details clear from initial coordination through delivery."],
  ["Dependability", "Showing up prepared and following through on agreed service."],
  ["Professionalism", "Treating every vessel, crew, vendor, and request with respect."],
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="ABOUT SIX FOLD" title="A Local Partner for the Commercial River Industry">
        <p>
          Six Fold Solutions LLC is based in Alton, Illinois and provides
          delivery and logistics support for barges, towboats, marine crews,
          and commercial river vessels.
        </p>
      </PageHero>
      <section className="section story-section">
        <div className="shell story-grid">
          <div className="story-marker" aria-hidden="true">
            <Image
              className="story-logo"
              src="/six-fold-logo.png"
              alt=""
              width={2000}
              height={800}
            />
            <i />
            <small>ALTON • IL</small>
          </div>
          <div>
            <p className="eyebrow">OUR PURPOSE</p>
            <h2>Shoreside help built around the realities of river work.</h2>
            <p>
              River operations depend on getting the right items to the right
              place. Six Fold Solutions helps bridge that gap by coordinating
              local pickups and agreed delivery points for crews working the
              Mississippi River near Alton.
            </p>
            <p>
              The goal is simple: make the shoreside part of the request clear,
              professional, and dependable.
            </p>
          </div>
        </div>
      </section>
      <section className="veteran-story">
        <div className="shell veteran-story-grid">
          <div>
            <p className="eyebrow eyebrow-light">VETERAN OWNED</p>
            <h2>Service is part of the foundation.</h2>
          </div>
          <div>
            <p>
              Six Fold Solutions is owned and operated by Jason Thompson, a United
              States Marine Corps veteran. His approach to the business centers on
              reliability, responsibility, clear communication, and getting the
              job done as agreed.
            </p>
            <p className="fine-print-light">
              Six Fold Solutions LLC is independently owned and is not endorsed by
              the United States Marine Corps or the Department of Defense.
            </p>
          </div>
        </div>
      </section>
      <section className="section values-section">
        <div className="shell">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">BUILT AROUND RELIABILITY</p>
              <h2>What customers can expect</h2>
            </div>
            <p>
              At Six Fold Solutions, we get the basics right and take every delivery seriously.
            </p>
          </div>
          <div className="values-grid">
            {values.map(([title, copy], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
          <div className="center-action">
            <CTAButton href="/request-delivery">Work With Six Fold</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
