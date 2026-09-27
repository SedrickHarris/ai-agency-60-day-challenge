import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  alignment?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  alignment = "left",
}: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading--${alignment}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <p className="section-heading__description">{description}</p> : null}
    </div>
  );
}