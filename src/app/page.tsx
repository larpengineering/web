const services = [
  {
    number: "01",
    title: "product engineering",
    body: "New web products, difficult features, and rebuilds that need to leave the mockup stage.",
  },
  {
    number: "02",
    title: "internal software",
    body: "Tools shaped around the work your team actually does, instead of forcing the work around the tool.",
  },
  {
    number: "03",
    title: "systems work",
    body: "Integrations, automation, infrastructure, and the unglamorous parts that make the interface honest.",
  },
];

const steps = [
  {
    number: "01",
    title: "show us the real problem",
    body: "Send the code, the broken flow, the deadline, or the rough idea. We start with what exists.",
  },
  {
    number: "02",
    title: "make one useful slice",
    body: "We find the smallest version that proves the direction and put working software in front of you early.",
  },
  {
    number: "03",
    title: "leave a receipt",
    body: "You get the code, tests, decisions, and a clear account of what works, what does not, and what comes next.",
  },
];

const projectHref = "mailto:hello@larp.engineering?subject=Project%20inquiry";

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="larp engineering, home">
          larp engineering
        </a>
        <a className="header-cta" href={projectHref}>
          start a project
        </a>
      </header>

      <section className="hero shell" aria-labelledby="hero-title">
        <p className="eyebrow">independent engineering practice</p>
        <div className="hero-copy">
          <h1 id="hero-title">
            software that works.{" "}
            <br />
            <span>without the theater.</span>
          </h1>
          <p>
            We design and build web products, internal tools, and the systems behind
            them. You work directly with the people making the thing.
          </p>
          <a className="primary-link" href={projectHref}>
            start a project <span aria-hidden="true">↗</span>
          </a>
        </div>
        <p className="hero-note">serious software. less ceremony.</p>
      </section>

      <section className="section shell" id="work" aria-labelledby="work-title">
        <div className="section-intro">
          <p className="eyebrow">what we do</p>
          <h2 id="work-title">the useful parts.</h2>
          <p>
            Small, senior-led engagements for software that has to survive contact
            with users, deadlines, and existing systems.
          </p>
        </div>

        <div className="text-list">
          {services.map((service) => (
            <article className="text-row" key={service.number}>
              <span className="row-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-muted shell" aria-labelledby="approach-title">
        <div className="section-intro section-intro-wide">
          <p className="eyebrow">how we work</p>
          <h2 id="approach-title">less process. more proof.</h2>
        </div>

        <ol className="step-list">
          {steps.map((step) => (
            <li key={step.number}>
              <span className="row-number">{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="section shell proof" aria-labelledby="proof-title">
        <p className="eyebrow">proof, not posture</p>
        <div>
          <h2 id="proof-title">no padded portfolio.</h2>
          <p>
            We are early, so there is no logo wall and no borrowed credibility.
            This site is the first public artifact. Its code, tests, and build
            history are open.
          </p>
          <a
            className="text-link"
            href="https://github.com/larpengineering/web"
            target="_blank"
            rel="noreferrer"
          >
            read the source <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="contact shell" aria-labelledby="contact-title">
        <p className="eyebrow">have a real problem?</p>
        <div>
          <h2 id="contact-title">let&apos;s make it real.</h2>
          <p>
            Send the problem, the deadline, and whatever already exists. We will
            reply with the honest next step.
          </p>
          <a className="primary-link primary-link-light" href={projectHref}>
            start a project <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <footer className="site-footer shell">
        <p>larp engineering</p>
        <a href="mailto:hello@larp.engineering">hello@larp.engineering</a>
        <p>© 2026</p>
      </footer>
    </main>
  );
}
