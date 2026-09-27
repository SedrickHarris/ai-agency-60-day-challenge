import { CtaLink } from "@/components/ui/cta-link";
import { SectionHeading } from "@/components/ui/section-heading";

const eligibilityItems = [
  "Active under Carson’s GoHighLevel affiliate link",
  "Member of Carson’s Skool community",
  "Under $10,000 collected in the 30 days before launch",
  "One entrant per agency",
  "Ready to submit payment proof and complete finalist verification",
];

export function EligibilitySection() {
  return (
    <section className="section eligibility-section" id="eligibility">
      <div className="container eligibility-section__grid">
        <div>
          <SectionHeading
            eyebrow="Before you enter"
            title={<>Built for the <span>right starting line.</span></>}
            description="Check the core eligibility requirements before joining the challenge."
          />
          <p className="eligibility-section__reach">
            Open worldwide to eligible GoHighLevel users under Carson’s link, subject to final
            rules and applicable restrictions.
          </p>
        </div>
        <div className="eligibility-checklist">
          {eligibilityItems.map((item, index) => (
            <div className="eligibility-check" key={item}>
              <span className="eligibility-check__number">0{index + 1}</span>
              <span className="eligibility-check__mark" aria-hidden="true">
                <svg viewBox="0 0 18 18" fill="none">
                  <path d="m4 9 3.2 3.2L14 5.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <p>{item}</p>
            </div>
          ))}
          <p className="eligibility-checklist__note">
            Final terms, timing, jurisdiction availability, and verification requirements are
            subject to the official challenge rules when published.
          </p>
          <CtaLink href="#final-cta">Join the Challenge</CtaLink>
        </div>
      </div>
    </section>
  );
}