import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "2027 AI Agency 60-Day Challenge",
  description:
    "A free AI agency course and shared 60-day competition. Learn the system, land clients, and compete on a public leaderboard.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
