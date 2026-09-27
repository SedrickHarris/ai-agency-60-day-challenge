import { LeaderboardPreview } from "@/components/leaderboard/leaderboard-preview";
import { SectionHeading } from "@/components/ui/section-heading";

export function LeaderboardSection() {
  return (
    <section className="section leaderboard-section" id="leaderboard">
      <div className="container">
        <div className="leaderboard-section__heading">
          <SectionHeading
            eyebrow="Public standings"
            title={<>The Rankings Are Public. <span>The Proof Is Private.</span></>}
            description="Public standings show approved totals. Client and payment evidence stays private."
          />
          <span className="demo-stamp"><span aria-hidden="true">●</span> MOCK STANDINGS</span>
        </div>
        <LeaderboardPreview />
      </div>
    </section>
  );
}