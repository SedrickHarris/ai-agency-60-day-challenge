import { mockParticipants } from "@/data/mock-participants";
import { formatCurrency } from "@/lib/format-currency";
import { CtaLink } from "@/components/ui/cta-link";

export function HeroSection() {
  const leader = mockParticipants[0];

  return (
    <section className="hero section" id="top" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="eyebrow">
            <span className="eyebrow__rule" aria-hidden="true" />
            2027 AI Agency 60-Day Challenge
          </p>
          <h1 id="hero-title">
            Not a Simulation. Not a Screenshot Contest. <span>Real Cash Collected Wins.</span>
          </h1>
          <p className="hero__summary">
            Follow Carson’s free AI agency course, acquire eligible new clients, and compete for
            premium prizes. Rankings are based on verified cash collected during one shared
            60-day challenge window.
          </p>
          <p className="hero__mantra">Learn the system. Land clients. Submit proof. Move up.</p>
          <div className="hero__actions">
            <CtaLink href="#eligibility">Join the Challenge</CtaLink>
            <CtaLink href="#leaderboard" variant="secondary">
              View the Leaderboard
            </CtaLink>
          </div>
          <p className="hero__eligibility-note">
            Open worldwide to eligible GoHighLevel users under Carson’s link, subject to final rules and applicable restrictions.
            <br />
            One entrant per agency.
            <br />
            Launch date to be announced.
          </p>
        </div>

        <div className="hero-board-wrap">
          <div className="hero-board-glow" aria-hidden="true" />
          <div className="hero-board">
            <div className="hero-board__topline">
              <span className="hero-board__live-dot" aria-hidden="true" />
              DEMO PREVIEW
              <span className="hero-board__window">60 DAY WINDOW</span>
            </div>
            <div className="hero-board__heading">
              <div>
                <p className="hero-board__label">LEADING MOCK TOTAL</p>
                <p className="hero-board__amount">{formatCurrency(leader.verifiedCashCollected)}</p>
              </div>
              <span className="hero-board__rank">01 <span>RANK</span></span>
            </div>
            <div className="hero-board__chart" aria-hidden="true">
              <div className="hero-board__chart-grid" />
              <svg viewBox="0 0 520 142" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chart-fill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0" stopColor="#38a8ff" stopOpacity="0.25" />
                    <stop offset="1" stopColor="#38a8ff" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0 124 C48 120 59 97 103 103 S157 119 197 83 S256 93 295 63 S351 75 388 42 S446 64 480 24 S503 25 520 12 V142 H0 Z" fill="url(#chart-fill)" />
                <path d="M0 124 C48 120 59 97 103 103 S157 119 197 83 S256 93 295 63 S351 75 388 42 S446 64 480 24 S503 25 520 12" fill="none" stroke="#38a8ff" strokeWidth="2.5" />
              </svg>
              <span className="hero-board__chart-label">ILLUSTRATIVE ONLY</span>
            </div>
            <div className="hero-board__leader">
              <span className="avatar avatar--hero">{leader.initials}</span>
              <div>
                <strong>{leader.name}</strong>
                <span>{leader.niche} <i aria-hidden="true">·</i> {leader.clientCount} clients</span>
              </div>
              <span className="hero-board__verified" aria-label="Mock verified cash collected">DEMO</span>
            </div>
            <div className="hero-board__bottomline">
              <span>MOCK STANDINGS</span>
              <span>NOT LIVE RESULTS</span>
            </div>
          </div>
          <div className="hero-board-index" aria-hidden="true">01—05 / CHALLENGE INDEX</div>
        </div>
      </div>
      <a className="hero-scroll" href="#countdown">
        Scroll to explore <span aria-hidden="true">↓</span>
      </a>
    </section>
  );
}