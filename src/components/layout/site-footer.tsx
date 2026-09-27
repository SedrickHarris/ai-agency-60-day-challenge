export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__main">
          <a className="brand" href="#top" aria-label="Back to top">
            <span className="brand__mark" aria-hidden="true">
              60
            </span>
            <span className="brand__name">
              2027 AI Agency
              <span>60-Day Challenge</span>
            </span>
          </a>
          <p>Public competition. Private proof. Verified winners.</p>
          <nav className="site-footer__links" aria-label="Footer navigation">
            <a href="#eligibility">Challenge Rules</a>
            <a href="#faq">Privacy &amp; Terms</a>
            <a href="#leaderboard">View Leaderboard</a>
            <a href="#faq">Contact / Support</a>
          </nav>
        </div>
        <div className="site-footer__bottom">
          <p>© 2027 AI Agency 60-Day Challenge. All rights reserved.</p>
          <p>Results vary. Participants acquire their own clients.</p>
        </div>
      </div>
    </footer>
  );
}