import type { Metadata } from "next";
import { PageHero } from "../components/PageHero";
import { businessInfo } from "../config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${businessInfo.companyName}.`,
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="PRIVACY" title="Privacy Policy">
        <p>How information submitted through this website is handled.</p>
      </PageHero>
      <article className="section policy-content">
        <div className="shell policy-shell">
          <p className="policy-updated">Last updated: August 13, 2026</p>

          <h2>Information We Collect</h2>
          <p>
            When you submit a delivery request or contact inquiry, Six Fold
            Solutions LLC may collect the information you provide, such as your
            name, company, vessel name, phone number, email address, pickup and
            delivery details, requested timing, and instructions.
          </p>

          <h2>How Information Is Used</h2>
          <p>
            Submitted information may be used to review and respond to your
            request, coordinate potential service, communicate about details,
            and maintain appropriate business records.
          </p>

          <h2>Sharing of Information</h2>
          <p>
            Six Fold Solutions does not sell personal information. Information
            may be shared with service providers when reasonably necessary to
            operate the website, process a request, comply with law, or protect
            legal rights.
          </p>

          <h2>Data Security and Retention</h2>
          <p>
            Reasonable measures should be used to protect submitted information.
            No internet transmission or storage method can be guaranteed to be
            completely secure. Information may be retained for as long as
            reasonably necessary for business, legal, and recordkeeping purposes.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            This website may use hosting, form processing, email delivery, or
            analytics providers. Those providers handle information under their
            own terms and privacy practices when configured.
          </p>

          <h2>Your Choices</h2>
          <p>
            You may choose not to submit information through the website and may
            contact Six Fold Solutions by another configured method when available.
          </p>

          <h2>Policy Changes</h2>
          <p>
            This policy may be updated as the website and its services change. The
            current revision date will appear at the top of this page.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this policy may be directed to {businessInfo.companyName}
            {businessInfo.email ? ` at ${businessInfo.email}` : ". Contact details will be posted once configured"}.
          </p>
        </div>
      </article>
    </>
  );
}

