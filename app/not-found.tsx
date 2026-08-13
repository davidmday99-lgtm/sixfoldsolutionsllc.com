import { CTAButton } from "./components/CTAButton";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="shell">
        <p className="eyebrow eyebrow-light">404 • OFF COURSE</p>
        <h1>This page is not on our route.</h1>
        <p>Return to the Six Fold Solutions homepage or start a delivery request.</p>
        <CTAButton href="/">Return Home</CTAButton>
      </div>
    </section>
  );
}

