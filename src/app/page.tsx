const principles = [
  {
    number: "01",
    title: "inspect reality",
    body: "Read the code. Open the logs. Touch the rendered thing. A confident guess is still a guess, babe.",
  },
  {
    number: "02",
    title: "ship the smallest real thing",
    body: "Not a deck about the thing. Not a roadmap-shaped apology. The smallest version that actually works.",
  },
  {
    number: "03",
    title: "taste is technical",
    body: "Words, latency, spacing, failure states, and the weird little click all belong to the same product.",
  },
  {
    number: "04",
    title: "keep the receipt",
    body: "Commits, tests, screenshots, measurements. If we say it works, there should be something you can point at.",
  },
];

const method = [
  {
    number: "1",
    title: "look",
    body: "Find the actual constraint before decorating the wrong answer.",
  },
  {
    number: "2",
    title: "make",
    body: "Build one coherent slice. Give it a pulse. Push it while it is still honest.",
  },
  {
    number: "3",
    title: "prove",
    body: "Run it, break it, read it back, then leave a paper trail.",
  },
];

function Mark() {
  return (
    <svg
      aria-hidden="true"
      className="mark"
      viewBox="0 0 44 44"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 35V13l8 7 7-12 7 12 8-7v22H7Z" fill="currentColor" />
      <path d="M15 28h4M25 28h4" stroke="var(--paper)" strokeWidth="3" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="larp engineering, home">
          <Mark />
          <span>larp.engineering</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#manual">manual</a>
          <a href="#method">method</a>
          <a href="#receipt">receipt</a>
        </nav>
        <span className="header-status">
          <span aria-hidden="true" className="status-dot" />
          building in public
        </span>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-meta label-row">
          <span>independent engineering practice</span>
          <span>field note / 001</span>
        </div>

        <h1 id="hero-title">
          <span>serious software.</span>{" "}
          <span>
            <em>less serious</em> theater.
          </span>
        </h1>

        <div className="hero-bottom">
          <p className="hero-deck">
            we make software, systems, and interfaces that survive contact with
            reality. no fake metrics. no mystery meat. no loading spinner with a
            personality disorder.
          </p>
          <div className="hero-actions">
            <a className="button button-solid" href="#manual">
              read the manual <span aria-hidden="true">↓</span>
            </a>
            <a
              className="button button-line"
              href="https://github.com/larpengineering/web"
              target="_blank"
              rel="noreferrer"
            >
              open the source <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <aside className="field-note" aria-label="Field note">
          <span className="field-note-pin" aria-hidden="true" />
          unfortunately, this is real.
        </aside>
      </section>

      <div className="signal-strip" aria-hidden="true">
        <div className="signal-track">
          <span>inspect reality</span>
          <span>ship the smallest real thing</span>
          <span>receipts over theater</span>
          <span>taste is technical</span>
          <span>inspect reality</span>
          <span>ship the smallest real thing</span>
          <span>receipts over theater</span>
          <span>taste is technical</span>
        </div>
      </div>

      <section className="manual section-shell" id="manual" aria-labelledby="manual-title">
        <div className="section-heading">
          <span className="section-number">01 / doctrine</span>
          <h2 id="manual-title">the operating manual</h2>
          <p>
            four rules. not because four is sacred. because a twelve-point
            values page is how values go to die.
          </p>
        </div>

        <div className="principle-list">
          {principles.map((principle) => (
            <article className="principle" key={principle.number}>
              <span className="principle-number">{principle.number}</span>
              <h3>{principle.title}</h3>
              <p>{principle.body}</p>
              <span className="principle-arrow" aria-hidden="true">
                ↘
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="method" id="method" aria-labelledby="method-title">
        <div className="method-intro section-shell">
          <span className="section-number">02 / method</span>
          <h2 id="method-title">
            the anti-process
            <br />
            process
          </h2>
          <p>
            enough structure to stay accountable. not enough to turn judgment
            into a meeting.
          </p>
        </div>

        <ol className="method-steps section-shell">
          {method.map((step) => (
            <li key={step.number}>
              <span className="step-number">{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="receipt section-shell" id="receipt" aria-labelledby="receipt-title">
        <div className="receipt-copy">
          <span className="section-number">03 / receipt</span>
          <h2 id="receipt-title">current state, no lore required.</h2>
          <p>
            the first public artifact is this site. the repo is open, the commit
            history is intact, and the construction dust is part of the record.
          </p>
          <a
            className="receipt-link"
            href="https://github.com/larpengineering/web/commits/main"
            target="_blank"
            rel="noreferrer"
          >
            read the commit log <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="build-slip" aria-label="Build receipt">
          <div className="slip-header">
            <span>L/E BUILD RECEIPT</span>
            <span>#0001</span>
          </div>
          <dl>
            <div>
              <dt>status</dt>
              <dd>construction active</dd>
            </div>
            <div>
              <dt>stack</dt>
              <dd>next.js 16 / react 19 / typescript</dd>
            </div>
            <div>
              <dt>source</dt>
              <dd>larpengineering/web</dd>
            </div>
            <div>
              <dt>claims</dt>
              <dd>pending proof</dd>
            </div>
          </dl>
          <div className="slip-total">
            <span>ceremony</span>
            <strong>₱0.00</strong>
          </div>
          <p>thank you for inspecting reality.</p>
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <Mark />
          <p>larp engineering</p>
        </div>
        <p className="footer-line">make it work. make it felt. keep the receipt.</p>
        <a
          href="https://github.com/larpengineering"
          target="_blank"
          rel="noreferrer"
        >
          GitHub <span aria-hidden="true">↗</span>
        </a>
        <p className="copyright">© 2026 / built in public</p>
      </footer>
    </main>
  );
}
