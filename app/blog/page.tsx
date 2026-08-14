import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "River Delivery Blog",
  description:
    "Practical guidance and updates for barges, towboats, vessels, and marine crews from Six Fold Solutions LLC in Alton, Illinois.",
};

export default function BlogPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-grid" aria-hidden="true" />
        <div className="shell page-hero-inner">
          <p className="eyebrow eyebrow-light">FROM THE RIVERBANK</p>
          <h1>Six Fold Field Notes</h1>
          <p className="page-hero-copy">
            Practical guidance for planning shoreside pickups and deliveries
            that support commercial river operations.
          </p>
        </div>
      </section>

      <section className="section blog-listing">
        <div className="shell">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">LATEST ARTICLE</p>
              <h2>Useful Information. Straight From Shore.</h2>
            </div>
            <p>
              Clear, practical information for vessel crews, dispatchers, and
              operators working along the Mississippi River.
            </p>
          </div>

          <article className="blog-feature-card">
            <Link
              className="blog-card-image"
              href="/blog/what-to-include-in-a-shoreside-delivery-request"
              aria-label="Read What to Include in a Shoreside Delivery Request"
            >
              <Image
                src="/six-fold-cover.png"
                alt="Six Fold Solutions river delivery cover featuring a towboat and barges near Alton"
                fill
                sizes="(max-width: 1180px) 100vw, 1180px"
              />
            </Link>
            <div className="blog-card-copy">
              <div className="blog-meta">
                <time dateTime="2026-08-13">August 13, 2026</time>
                <span>Operations</span>
                <span>6 minute read</span>
              </div>
              <h2>What to Include in a Shoreside Delivery Request</h2>
              <p>
                Six details that help a local pickup and vessel handoff move
                smoothly, from the item list and vendor information to access
                instructions and timing.
              </p>
              <div>
                <Link
                  className="btn btn-secondary"
                  href="/blog/what-to-include-in-a-shoreside-delivery-request"
                >
                  Read the Article <span aria-hidden="true">-&gt;</span>
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
