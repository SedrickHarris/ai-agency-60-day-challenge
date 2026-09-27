export function AnnouncementBar() {
  return (
    <div className="announcement-bar">
      <div className="container announcement-bar__inner">
        <p>
          <span className="announcement-bar__signal" aria-hidden="true" />
          2027 AI Agency 60-Day Challenge
          <span className="announcement-bar__divider" aria-hidden="true" />
          Launch date to be announced
        </p>
        <a href="#eligibility">
          Read the Rules <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  );
}