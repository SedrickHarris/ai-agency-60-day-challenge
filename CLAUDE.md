# Claude Code Instructions

## Project

This repository is for the **2027 AI Agency 60-Day Challenge** website and future challenge platform.

Read `docs/master-brief.md` and `docs/landing-page-brief.md` before making changes related to:

- Landing page content
- Design direction
- Eligibility
- Leaderboard behavior
- Participant dashboard
- Payment submissions
- Evidence handling
- Ranking logic
- GoHighLevel
- Skool
- Fathom
- Admin or reviewer features

Core principle:

> Public competition. Private proof. Verified winners.

## Initial build scope

For the initial build, create only:

- Premium responsive landing page
- Static/mock leaderboard preview
- Countdown placeholder
- Prize cards
- Challenge explanation
- Eligibility section
- What counts/does not count section
- Verification section
- FAQ
- Final CTA
- Footer with placeholder legal links

Do not build until explicitly requested:

- Authentication
- Database
- GoHighLevel integration
- Skool integration
- Fathom integration
- Payment submission workflow
- Evidence upload
- Participant dashboard
- Admin dashboard
- Reviewer dashboard
- Live leaderboard calculations
- Prize fulfillment workflows

Use realistic mock data for initial UI work.

## Non-negotiable rules

- Rankings are based only on approved verified cash collected.
- Do not count unpaid contracts, unpaid invoices, free trials, projected revenue, existing clients, self-payments, duplicate clients, taxes, or client ad spend.
- Participants acquire their own clients.
- One entrant per agency.
- Public pages must never expose client names, invoices, payment evidence, Fathom recordings, payment IDs, reviewer notes, eligibility declarations, or private financial information.
- Participants must be active under Carson’s GoHighLevel affiliate link.
- Participants must join Carson’s Skool community.
- If active GoHighLevel eligibility ends, submission access must be blocked and public leaderboard visibility must be removed.
- Reactivation within 72 hours can restore previously approved totals.
- Payments received while inactive never count.
- Do not promise income, clients, prizes, or results.
- Do not imply that clients are provided.

## Technology

Unless the project already has an approved different stack, use:

- Next.js
- TypeScript
- Tailwind CSS
- Responsive mobile-first design
- Accessible semantic HTML

Use clean, reusable components.

Avoid unnecessary dependencies.

## Design direction

Use a premium blue, black, and white visual system:

- Near-black background
- Electric-blue highlights and glows
- White typography
- Large competition-style headlines
- Bold rankings and dollar figures
- Dark prize cards
- Strong CTA buttons
- High contrast
- Responsive layouts

The design should feel premium and high-stakes, not like generic SaaS software.

Use this phrase where relevant:

> The Rankings Are Public. The Proof Is Private.

## Workflow

Before coding:

1. Read the relevant project brief.
2. Identify public versus private data concerns.
3. State assumptions if requirements are incomplete.
4. Do not invent integrations, APIs, or business rules.
5. Keep the first version simple.

After coding:

1. Summarize what changed.
2. List files changed.
3. List assumptions made.
4. Mention follow-up decisions needed.
5. Run lint, type check, and build if available.
6. Report results honestly.

## Privacy and security

Treat all client, payment, evidence, reviewer, eligibility, and financial information as private.

Never rely only on front-end hiding for privacy. When private features are built, authorization must be enforced on the server/database layer.

## Copy rules

Use:

- Verified cash collected
- Eligible new-client payments
- Evidence-backed rankings
- Public standings
- Private proof
- Shared 60-day deadline
- Real client acquisition

Avoid:

- Guaranteed income
- Guaranteed clients
- Easy money
- Make money fast
- Clients provided
- Everyone wins
- Earn $10,000 in 60 days

Always make clear that participants must acquire their own clients.

## Completion format

At the end of every task, provide:

1. What changed
2. Files changed
3. Important implementation notes
4. Assumptions made
5. Tests/build commands run and results
6. Suggested next step

