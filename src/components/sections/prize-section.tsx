import { SectionHeading } from "@/components/ui/section-heading";

const prizes = [
  {
    place: "01",
    label: "FIRST PLACE",
    name: "Black Rolex",
    detail: "Plus a Seattle experience with Carson",
    value: "$10,000+",
    className: "prize-card prize-card--first",
    mark: "I",
    caveat: "Prize concept; exact item, value, and fulfillment are subject to final rules.",
  },
  {
    place: "02",
    label: "SECOND PLACE",
    name: "MacBook Air",
    detail: "A premium tool for the next stage",
    className: "prize-card",
    mark: "II",
    caveat: "Configuration and fulfillment details to be finalized.",
  },
  {
    place: "03",
    label: "THIRD PLACE",
    name: "AirPods Max",
    detail: "Premium audio for the work ahead",
    className: "prize-card",
    mark: "III",
    caveat: "Configuration and fulfillment details to be finalized.",
  },
];

export function PrizeSection() {
  return (
    <section className="section prizes" id="prizes">
      <div className="container">
        <SectionHeading
          eyebrow="The reward"
          title={<>The top three <span>get recognized.</span></>}
          description="Finalists must complete eligibility and payment verification before prizes are awarded."
          alignment="center"
        />
        <div className="prize-grid">
          {prizes.map((prize) => (
            <article className={prize.className} key={prize.place}>
              <div className="prize-card__top">
                <span className="prize-card__place">{prize.label}</span>
                <span className="prize-card__ordinal" aria-hidden="true">{prize.mark}</span>
              </div>
              {prize.value ? <p className="prize-card__value">{prize.value}</p> : null}
              <div className="prize-card__visual" aria-hidden="true">
                <span className={`prize-illustration prize-illustration--${prize.place}`}>
                  {prize.place === "01" ? (
                    <svg viewBox="0 0 120 120" fill="none">
                      <rect x="43" y="4" width="34" height="30" rx="8" stroke="currentColor" strokeWidth="4" />
                      <rect x="43" y="86" width="34" height="30" rx="8" stroke="currentColor" strokeWidth="4" />
                      <circle cx="60" cy="60" r="30" fill="#0A0F18" stroke="currentColor" strokeWidth="4" />
                      <circle cx="60" cy="60" r="20" stroke="currentColor" strokeWidth="2" />
                      <path d="M60 46v15l10 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                      <path d="M60 34v6m0 40v6M34 60h6m40 0h6" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  ) : prize.place === "02" ? (
                    <svg viewBox="0 0 120 120" fill="none">
                      <rect x="23" y="25" width="74" height="52" rx="4" stroke="currentColor" strokeWidth="4" />
                      <path d="M15 88h90l-8 8H23l-8-8Z" fill="currentColor" />
                      <path d="M43 87h34" stroke="#0A0F18" strokeWidth="3" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 120 120" fill="none">
                      <path d="M33 42c0-10 8-18 18-18h18c10 0 18 8 18 18v18c0 20-12 36-27 36S33 80 33 60V42Z" stroke="currentColor" strokeWidth="4" />
                      <path d="M33 47H22v14c0 10 5 17 14 18m51-32h11v14c0 10-5 17-14 18M48 39v18m24-18v18" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                  )}
                </span>
              </div>
              <h3>{prize.name}</h3>
              <p className="prize-card__detail">{prize.detail}</p>
              <p className="prize-card__caveat">{prize.caveat}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}