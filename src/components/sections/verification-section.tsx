import { SectionHeading } from "@/components/ui/section-heading";

const verificationItems = [
  {
    number: "01",
    title: "Sales-call record",
    copy: "A Fathom recording is required for each new client submission.",
    symbol: "REC",
  },
  {
    number: "02",
    title: "Payment evidence",
    copy: "A paid invoice or payment confirmation supports the amount received.",
    symbol: "$",
  },
  {
    number: "03",
    title: "Private finalist check",
    copy: "Finalists complete additional verification before prizes are awarded.",
    symbol: "✓",
  },
];

export function VerificationSection() {
  return (
    <section className="section verification-section" id="verification">
      <div className="container verification-section__grid">
        <div className="verification-section__intro">
          <SectionHeading
            eyebrow="Proof before position"
            title={<>Every ranking is <span>earned.</span></>}
            description="This is not a self-reported leaderboard. Required sales-call and payment evidence is reviewed before eligible payments affect public standings."
          />
          <p className="verification-section__privacy">
            The Rankings Are Public. The Proof Is Private.
          </p>
        </div>
        <div className="verification-list">
          {verificationItems.map((item) => (
            <article className="verification-item" key={item.number}>
              <span className="verification-item__number">{item.number}</span>
              <span className="verification-item__symbol" aria-hidden="true">{item.symbol}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="verification-section__note">
          Carson’s team reviews submissions daily. Review timing can vary; this is not a guaranteed
          24-hour turnaround. Sensitive client and payment details remain private.
        </p>
      </div>
    </section>
  );
}