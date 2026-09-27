import { faqItems } from "@/content/faq-items";
import { SectionHeading } from "@/components/ui/section-heading";

export function FaqSection() {
  return (
    <section className="section faq-section" id="faq">
      <div className="container faq-section__grid">
        <div className="faq-section__intro">
          <SectionHeading
            eyebrow="Good to know"
            title={<>Questions, <span>answered.</span></>}
            description="A quick read on the course, eligible payments, proof, and the competition."
          />
          <p>Details still being finalized will be confirmed in the official challenge rules.</p>
        </div>
        <div className="faq-list">
          {faqItems.map((item, index) => (
            <details className="faq-item" key={item.question}>
              <summary>
                <span className="faq-item__number">{String(index + 1).padStart(2, "0")}</span>
                <span className="faq-item__question">{item.question}</span>
                <span className="faq-item__toggle" aria-hidden="true" />
              </summary>
              <div className="faq-item__answer">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}