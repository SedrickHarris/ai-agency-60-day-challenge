import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteNavigation } from "@/components/layout/site-navigation";
import { ChallengeExplanationSection } from "@/components/sections/challenge-explanation-section";
import { CountdownSection } from "@/components/sections/countdown-section";
import { CountingRulesSection } from "@/components/sections/counting-rules-section";
import { EligibilitySection } from "@/components/sections/eligibility-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { HeroSection } from "@/components/sections/hero-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { LeaderboardSection } from "@/components/sections/leaderboard-section";
import { PrizeSection } from "@/components/sections/prize-section";
import { VerificationSection } from "@/components/sections/verification-section";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <AnnouncementBar />
      <SiteNavigation />
      <main id="main-content">
        <HeroSection />
        <CountdownSection />
        <ChallengeExplanationSection />
        <PrizeSection />
        <HowItWorksSection />
        <CountingRulesSection />
        <LeaderboardSection />
        <VerificationSection />
        <EligibilitySection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
