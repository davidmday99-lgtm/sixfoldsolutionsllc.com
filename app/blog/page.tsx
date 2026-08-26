import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "River Delivery Blog",
  description:
    "Practical guidance and updates for barges, towboats, vessels, and marine crews from Six Fold Solutions LLC in Alton, Illinois.",
  alternates: { canonical: "/blog" },
};

const posts = [
  {
    href: "/blog/three-official-checks-before-you-set-a-river-delivery-window",
    ariaLabel: "Read Three Official Checks Before You Set a River Delivery Window",
    dateTime: "2026-08-20",
    dateLabel: "August 20, 2026",
    category: "Planning",
    readTime: "5 minute read",
    title: "Three Official Checks Before You Set a River Delivery Window",
    description:
      "A practical look at the river forecasts, navigation notices, and survey updates that can change a Mississippi River delivery plan.",
  },
  {
    href: "/blog/what-to-include-in-a-shoreside-delivery-request",
    ariaLabel: "Read What to Include in a Shoreside Delivery Request",
    dateTime: "2026-08-13",
    dateLabel: "August 13, 2026",
    category: "Operations",
    readTime: "6 minute read",
    title: "What to Include in a Shoreside Delivery Request",
    description:
      "Six details that help a local pickup and vessel handoff move smoothly, from the item list and vendor information to access instructions and timing.",
  },
] as const;

export default function BlogPage() {
  const [latestPost, ...olderPosts] = posts;

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
              href={latestPost.href}
              scroll={false}
              aria-label={latestPost.ariaLabel}
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
                <time dateTime={latestPost.dateTime}>{latestPost.dateLabel}</time>
                <span>{latestPost.category}</span>
                <span>{latestPost.readTime}</span>
              </div>
              <h2>{latestPost.title}</h2>
              <p>{latestPost.description}</p>
              <div>
                <Link
                  className="btn btn-secondary"
                  href={latestPost.href}
                  scroll={false}
                >
                  Read the Article <span aria-hidden="true">-&gt;</span>
                </Link>
              </div>
            </div>
          </article>

          {olderPosts.map((post) => (
            <article key={post.href} className="blog-feature-card" style={{ marginTop: "2rem" }}>
              <Link
                className="blog-card-image"
                href={post.href}
                scroll={false}
                aria-label={post.ariaLabel}
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
                  <time dateTime={post.dateTime}>{post.dateLabel}</time>
                  <span>{post.category}</span>
                  <span>{post.readTime}</span>
                </div>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <div>
                  <Link className="btn btn-secondary" href={post.href} scroll={false}>
                    Read the Article <span aria-hidden="true">-&gt;</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
