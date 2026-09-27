import { SectionHeading } from "@/components/ui/section-heading";

const steps = [
  "Activate GoHighLevel through Carson’s link",
  "Join Carson’s Skool community",
  "Verify your challenge account",
  "Follow the free course",
  "Land new clients",
  "Submit payment proof",
  "Move up when payments are approved",
];

export function HowItWorksSection() {
  return (
    <section className="section process-section" id="how-it-works">
      <div className="container process-section__grid">
        <div className="process-section__intro">
          <SectionHeading
            eyebrow="From course to standings"
            title={<>Your path to the <span>leaderboard.</span></>}
            description="A clear sequence. One shared deadline. Evidence-backed standings."
          />
          <p className="process-section__note">Participants acquire their own clients. No clients are provided.</p>
        </div>
        <ol className="process-list">
          {steps.map((step, index) => (
            <li className="process-list__item" key={step}>
              <span className="process-list__number">0{index + 1}</span>
              <span className="process-list__line" aria-hidden="true" />
              <span className="process-list__label">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}