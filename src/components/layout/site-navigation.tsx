"use client";

import { useState } from "react";
import { CtaLink } from "@/components/ui/cta-link";

const navigationItems = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#leaderboard", label: "Leaderboard" },
  { href: "#eligibility", label: "Eligibility" },
  { href: "#faq", label: "FAQ" },
];

export function SiteNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Back to top">
          <span className="brand__mark" aria-hidden="true">
            60
          </span>
          <span className="brand__name">
            2027 AI Agency
            <span>60-Day Challenge</span>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav
          className={`primary-navigation${menuOpen ? " primary-navigation--open" : ""}`}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          <div className="primary-navigation__links">
            {navigationItems.map((item) => (
              <a href={item.href} key={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
          </div>
          <CtaLink href="#eligibility" className="site-header__cta">
            Join the Challenge
          </CtaLink>
        </nav>
      </div>
    </header>
  );
}