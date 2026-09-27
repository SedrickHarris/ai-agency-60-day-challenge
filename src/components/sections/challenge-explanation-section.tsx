import { SectionHeading } from "@/components/ui/section-heading";

const principles = [
  {
    number: "01",
    title: "A real course",
    copy: "Follow Carson’s free AI agency course and put the system into practice.",
  },
  {
    number: "02",
    title: "A shared clock",
    copy: "Everyone competes inside the same 60-day challenge window.",
  },
  {
    number: "03",
    title: "Evidence-backed standings",
    copy: "Only eligible payments received and approved with supporting evidence affect a standing.",
  },
];

export function ChallengeExplanationSection() {
  return (
    <section className="section challenge-explanation" id="challenge">
      <div className="container">
        <SectionHeading
          eyebrow="The challenge"
          title={<>A course meets a <span>real-world test.</span></>}
          description="Learn the system. Land clients. Submit proof. Move up."
        />
        <div className="principle-grid">
          {principles.map((principle) => (
            <article className="principle" key={principle.number}>
              <span className="principle__number">{principle.number}</span>
              <h3>{principle.title}</h3>
              <p>{principle.copy}</p>
              <span className="principle__index" aria-hidden="true">CHALLENGE / {principle.number}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}