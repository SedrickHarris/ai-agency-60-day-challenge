import { CtaLink } from "@/components/ui/cta-link";

export function FinalCtaSection() {
  return (
    <section className="final-cta" id="final-cta" aria-labelledby="final-cta-title">
      <div className="final-cta__glow" aria-hidden="true" />
      <div className="container final-cta__inner">
        <p className="eyebrow">Your 60 days start soon</p>
        <h2 id="final-cta-title">Learn the System. Land Clients. Get Ranked.</h2>
        <p className="final-cta__copy">
          Join the 2027 AI Agency 60-Day Challenge and compete for your place on the verified
          leaderboard.
        </p>
        <div className="final-cta__actions">
          <CtaLink href="#eligibility">Join the Challenge</CtaLink>
          <CtaLink href="#eligibility" variant="secondary">Read the Rules</CtaLink>
        </div>
        <p className="final-cta__disclaimer">
          Results vary based on execution, offer quality, sales ability, market conditions, client
          demand, and other factors. Participation does not guarantee client acquisition, revenue,
          profit, placement, or prizes.
        </p>
      </div>
    </section>
  );
}