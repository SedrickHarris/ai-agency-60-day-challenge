import { SectionHeading } from "@/components/ui/section-heading";

const countItems = [
  "Setup fees",
  "Initial service payments",
  "Recurring service payments",
  "Additional payments attached to the same approved client",
  "Actual eligible money received during the shared challenge window",
];

const excludeItems = [
  "Existing or pre-enrollment clients",
  "Self-payments, related-party payments, or duplicate clients",
  "Unpaid contracts, invoices, trials, or projected revenue",
  "Taxes and client ad spend",
  "Payments received while inactive, refunded, reversed, or unsupported",
];

function RuleList({ items, included }: { items: string[]; included: boolean }) {
  return (
    <ul className={`rule-list${included ? " rule-list--included" : " rule-list--excluded"}`}>
      {items.map((item) => (
        <li key={item}>
          <span className="rule-list__mark" aria-hidden="true">{included ? "+" : "−"}</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function CountingRulesSection() {
  return (
    <section className="section counting-section" id="counting-rules">
      <div className="container">
        <SectionHeading
          eyebrow="The scoring line"
          title={<>Real cash collected.<br /><span>Nothing else.</span></>}
          description="Only approved eligible payments actually received can affect standings."
        />
        <div className="counting-grid">
          <article className="counting-panel counting-panel--count">
            <div className="counting-panel__header">
              <span className="counting-panel__index">01 / COUNTS</span>
              <span className="counting-panel__operator" aria-hidden="true">+</span>
            </div>
            <h3>Money received</h3>
            <RuleList items={countItems} included />
          </article>
          <article className="counting-panel counting-panel--exclude">
            <div className="counting-panel__header">
              <span className="counting-panel__index">02 / EXCLUDES</span>
              <span className="counting-panel__operator" aria-hidden="true">−</span>
            </div>
            <h3>Not revenue</h3>
            <RuleList items={excludeItems} included={false} />
          </article>
        </div>
        <p className="counting-section__footnote">
          Every new client requires a Fathom sales-call recording and paid invoice or payment
          confirmation. Evidence stays private.
        </p>
      </div>
    </section>
  );
}