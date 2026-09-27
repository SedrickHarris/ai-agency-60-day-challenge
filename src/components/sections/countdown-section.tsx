export function CountdownSection() {
  const units = ["Days", "Hours", "Minutes", "Seconds"];

  return (
    <section className="countdown-strip" id="countdown" aria-labelledby="countdown-title">
      <div className="container countdown-strip__inner">
        <div className="countdown-strip__copy">
          <p className="eyebrow">Shared challenge window</p>
          <h2 id="countdown-title">The Clock Starts Soon.</h2>
          <p>One shared 60-day deadline. No extensions.</p>
        </div>
        <div className="countdown" aria-label="Countdown placeholder">
          {units.map((unit) => (
            <div className="countdown__unit" key={unit}>
              <span>--</span>
              <small>{unit}</small>
            </div>
          ))}
        </div>
        <p className="countdown-strip__notice">Placeholder · Launch date to be announced</p>
      </div>
    </section>
  );
}