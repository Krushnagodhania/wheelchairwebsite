import React, { useState } from "react";

const councils = [
  "Ashfield District Council",
  "Nottingham City Council",
  "Mansfield District Council",
  "Bolsover District Council",
  "Gedling Borough Council",
  "Rushcliffe Borough Council",
  "Broxtowe Borough Council",
  "Bassetlaw District Council",
  "Derby City Council",
  "Erewash Borough Council",
  "Chesterfield Borough Council",
  "Sheffield City Council",
  "Leeds City Council",
  "Birmingham City Council",
  "Manchester City Council",
  "Leicester City Council",
  "Coventry City Council",
  "Wolverhampton Council",
  "Wakefield Council",
  "Rotherham Council",
];

const services = [
  {
    title: "Vehicle history and identity",
    body: "Registration, VIN consistency, MOT pattern, mileage movement, keeper changes, salvage markers, finance risk flags, and import/export indicators.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M6 4h12v16H6z" stroke="currentColor" strokeWidth="2" />
        <path d="M9 8h6M9 12h6M9 16h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Wheelchair access evidence",
    body: "Ramp or lift arrangement, wheelchair bay layout, restraint points, passenger belt route, headrest position, step height, door aperture, and usable access photographs.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="9" cy="6" r="2.5" stroke="currentColor" strokeWidth="2" />
        <path d="M9 9v5h5l3 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 13a5 5 0 1 0 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Licensing risk summary",
    body: "Concise notes for council officers, including pass concerns, missing evidence, operator actions, and whether an enhanced inspection is recommended.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="m12 3 8 4v6c0 5-3.4 7.6-8 8-4.6-.4-8-3-8-8V7l8-4Z" stroke="currentColor" strokeWidth="2" />
        <path d="m8.5 12 2.4 2.4 4.8-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const plans = [
  {
    title: "Council Desk",
    description: "For licensing teams that need a one-off verification test payment.",
    price: "£1",
    suffix: "one-off",
    cta: "Request council setup",
    featured: true,
    features: [
      "One-off WAV checkout test",
      "Priority evidence review",
      "Policy-specific report wording",
      "Monthly exceptions register",
      "Email support for licensing officers",
    ],
  },
  {
    title: "Fleet Assurance",
    description: "For operators, procurement teams, and larger renewals.",
    price: "Custom",
    suffix: "",
    cta: "Discuss a fleet",
    featured: false,
    features: [
      "Batch vehicle verification",
      "Fleet risk matrix",
      "Conversion evidence audit",
      "Named account contact",
      "Procurement-ready reporting pack",
    ],
  },
];

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M7 5h8l4 5v7H5V7c0-1.1.9-2 2-2Z" fill="currentColor" opacity=".25" />
        <path d="M8 4h7l4 5v8H5V7a3 3 0 0 1 3-3Z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M11 8v5h5" stroke="#f4b942" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M7 18h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    </span>
  );
}

function Header() {
  return (
    <header className="site-header">
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="AccessCheck WAV home">
          <BrandMark />
          <strong>
            AccessCheck WAV<span>Council-grade taxi verification</span>
          </strong>
        </a>
        <div className="nav-links">
          <a href="#checks">Checks</a>
          <a href="#councils">Councils</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="button outline" href="#contact">
          Request a report
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" aria-label="Wheelchair accessible taxi verification">
      <div className="hero-inner">
        <div>
          <p className="eyebrow">Premium WAV history checks</p>
          <h1>Council-ready verification for wheelchair accessible taxis.</h1>
          <p className="hero-copy">
            Independent vehicle history, accessibility evidence, and licensing risk checks for councils,
            taxi operators, and fleets carrying disabled passengers.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#pricing">
              View pricing
            </a>
            <a className="button secondary" href="#checks">
              See what is checked
            </a>
          </div>
          <div className="trust-row" aria-label="Service highlights">
            <div className="trust-card">
              <strong>48h</strong>
              <span>standard report turnaround once vehicle evidence is received</span>
            </div>
            <div className="trust-card">
              <strong>31+</strong>
              <span>data and accessibility review points per vehicle</span>
            </div>
            <div className="trust-card">
              <strong>PDF</strong>
              <span>clear officer-ready report with decision notes</span>
            </div>
          </div>
        </div>

        <aside className="status-panel" aria-label="Example report status">
          <div className="panel-head">
            <strong>Sample WAV assurance</strong>
            <span className="pill">Ready for review</span>
          </div>
          <ul className="check-list">
            <li>
              <span className="tick">✓</span>
              <span>Vehicle identity, keeper, MOT, mileage, and write-off history reviewed.</span>
            </li>
            <li>
              <span className="tick">✓</span>
              <span>Ramp, restraints, headrest, belt path, and wheelchair space evidence checked.</span>
            </li>
            <li>
              <span className="tick">✓</span>
              <span>Licensing notes prepared for officer sign-off or operator follow-up.</span>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}

function Checks() {
  return (
    <section id="checks">
      <div className="section-inner">
        <p className="section-kicker">What we check</p>
        <h2 className="section-title">A deeper check than a standard vehicle history report.</h2>
        <p className="section-lede">
          AccessCheck WAV focuses on the extra evidence councils need when a taxi or private hire vehicle
          is presented as wheelchair accessible. It combines standard provenance checks with
          accessibility-specific review and a practical licensing summary.
        </p>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Workflow() {
  const metrics = [
    ["Identity", "96%", "Clear"],
    ["History", "88%", "Low risk"],
    ["Access", "94%", "Supported"],
    ["Evidence", "82%", "1 query"],
  ];

  return (
    <section className="band">
      <div className="section-inner">
        <p className="section-kicker">Officer workflow</p>
        <h2 className="section-title">Structured reports that make licensing decisions easier to defend.</h2>
        <p className="section-lede">
          Each check is returned as a professional PDF report with evidence references, exceptions, and a
          clear outcome summary. It is designed to sit alongside the council's normal mechanical inspection
          and licensing policy.
        </p>
        <div className="workflow">
          <div className="report-preview" aria-label="Example report scoring panel">
            <div className="report-top">
              <div>
                <strong>WAV assurance report</strong>
                <br />
                <small>Example registration: AB12 CDE</small>
              </div>
              <div className="score">92</div>
            </div>
            <div className="report-body">
              {metrics.map(([label, width, status]) => (
                <div className="metric" key={label}>
                  <span>{label}</span>
                  <div className="bar">
                    <span style={{ width }} />
                  </div>
                  <strong>{status}</strong>
                </div>
              ))}
            </div>
          </div>
          <div className="steps">
            {[
              ["01", "Submit vehicle and operator details", "Send the registration, VIN if available, conversion evidence, and accessibility photographs through the secure intake."],
              ["02", "History and WAV evidence review", "We check provenance data, compare records against submitted evidence, and identify missing accessibility information."],
              ["03", "Officer-ready decision notes", "Your team receives a report with outcome, risk markers, evidence gaps, and a plain-language recommendation."],
            ].map(([number, title, body]) => (
              <article className="step" key={number}>
                <div className="step-number">{number}</div>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CouncilCoverage() {
  return (
    <section id="councils">
      <div className="section-inner council-wrap">
        <div>
          <p className="section-kicker">Council coverage</p>
          <h2 className="section-title">Built for taxi licensing teams across England.</h2>
          <p className="section-lede">
            The service can be configured around local hackney carriage and private hire policy, including the
            exact evidence your officers want to see before a vehicle is treated as suitable for disabled
            passenger journeys.
          </p>
        </div>
        <div className="council-list" aria-label="Example supported taxi councils">
          {councils.map((council) => (
            <span className={`council ${council.startsWith("Ashfield") ? "featured" : ""}`} key={council}>
              {council}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const [checkoutState, setCheckoutState] = useState({ loading: false, error: "" });

  async function startCouncilCheckout() {
    setCheckoutState({ loading: true, error: "" });

    try {
      const response = await fetch("/.netlify/functions/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ plan: "council_desk" }),
      });
      const responseText = await response.text();
      let data = {};

      try {
        data = responseText ? JSON.parse(responseText) : {};
      } catch {
        data = {};
      }

      if (!response.ok || !data.url) {
        const fallbackMessage = response.status === 404
          ? "Checkout is not connected on this deployment. Deploy the full Netlify project with the netlify/functions folder."
          : data.error === "Stripe is not configured."
            ? "Stripe is not configured. Add STRIPE_SECRET_KEY to the environment, then redeploy or restart the dev server."
            : "Unable to start checkout.";
        throw new Error(data.error || fallbackMessage);
      }

      window.location.assign(data.url);
    } catch (error) {
      setCheckoutState({
        loading: false,
        error: error instanceof Error ? error.message : "Unable to start checkout.",
      });
    }
  }

  return (
    <section className="pricing" id="pricing">
      <div className="section-inner">
        <p className="section-kicker">Pricing</p>
        <h2 className="section-title">Premium verification with council-friendly options.</h2>
        <p className="section-lede">
          Choose a one-off council workflow or a fleet assurance package for larger reviews. Pricing is
          indicative and can be adjusted for procurement requirements.
        </p>
        <div className="price-grid">
          {plans.map((plan) => (
            <article className={`price-card ${plan.featured ? "popular" : ""}`} key={plan.title}>
              {plan.featured && <span className="flag">Most requested</span>}
              <h3>{plan.title}</h3>
              <p>{plan.description}</p>
              <div className="price">
                {plan.price} {plan.suffix && <small>{plan.suffix}</small>}
              </div>
              <ul className="features">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              {plan.featured ? (
                <button
                  className="button primary"
                  type="button"
                  onClick={startCouncilCheckout}
                  disabled={checkoutState.loading}
                >
                  {checkoutState.loading ? "Opening checkout..." : "Pay with Stripe"}
                </button>
              ) : (
                <a className="button outline" href="#contact">
                  {plan.cta}
                </a>
              )}
            </article>
          ))}
        </div>
        {checkoutState.error && <p className="checkout-error">{checkoutState.error}</p>}
      </div>
    </section>
  );
}

function Assurance() {
  const evidence = [
    ["Provenance", "Identity, registration history, MOT timeline, mileage movement, and adverse markers."],
    ["Conversion", "WAV layout evidence, ramp or lift installation, restraint equipment, and passenger access photographs."],
    ["Policy fit", "Report wording can reflect local taxi policy, age rules, evidence standards, and licensing conditions."],
    ["Audit trail", "Clear summary, exception notes, source references, and dated report output for licensing records."],
  ];

  return (
    <section>
      <div className="section-inner">
        <p className="section-kicker">Assurance areas</p>
        <h2 className="section-title">Designed to complement, not replace, the council inspection bay.</h2>
        <p className="section-lede">
          AccessCheck WAV gives officers a stronger paper trail before or after a physical inspection. The
          report highlights what is supported by records, what depends on local policy, and what needs further
          evidence from the operator.
        </p>
        <div className="evidence">
          {evidence.map(([title, body]) => (
            <article className="evidence-item" key={title}>
              <strong>{title}</strong>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`AccessCheck WAV enquiry from ${data.get("organisation")}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nOrganisation: ${data.get("organisation")}\nEmail: ${data.get("email")}\nEnquiry: ${data.get("type")}\n\n${data.get("message")}`,
    );
    event.currentTarget.querySelector("[data-form-note]").textContent =
      "Opening your email client with the enquiry details.";
    window.location.href = `mailto:info@widwebdevs.co.uk?subject=${subject}&body=${body}`;
  }

  return (
    <section className="contact" id="contact">
      <div className="section-inner contact-grid">
        <div>
          <p className="section-kicker">Contact us</p>
          <h2 className="section-title">Send a vehicle for review or ask for a council rollout.</h2>
          <p className="section-lede">
            Tell us whether you need a one-off WAV check, a council licensing workflow, or a batch fleet
            review. We will reply with intake requirements and a clear turnaround time.
          </p>
          <div className="contact-points">
            <div className="contact-point">
              <strong>Email</strong>
              <span>info@widwebdevs.co.uk</span>
            </div>
            <div className="contact-point">
              <strong>Telephone</strong>
              <span>0330 043 6148</span>
            </div>
            <div className="contact-point">
              <strong>Operating hours</strong>
              <span>Monday to Friday, 9:00am to 5:30pm</span>
            </div>
          </div>
        </div>

        <div className="contact-card">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <label>
                Name
                <input name="name" autoComplete="name" required placeholder="Your name" />
              </label>
              <label>
                Organisation
                <input name="organisation" autoComplete="organization" required placeholder="Council or operator" />
              </label>
            </div>
            <div className="form-row">
              <label>
                Email
                <input type="email" name="email" autoComplete="email" required placeholder="name@example.gov.uk" />
              </label>
              <label>
                Enquiry type
                <select name="type" required defaultValue="">
                  <option value="">Select one</option>
                  <option>Council one-off plan</option>
                  <option>Fleet assurance</option>
                  <option>Procurement discussion</option>
                </select>
              </label>
            </div>
            <label>
              Message
              <textarea
                name="message"
                required
                placeholder="Share the vehicle registration, council area, or number of vehicles you want checked."
              />
            </label>
            <button className="button primary" type="submit">
              Prepare enquiry
            </button>
            <p className="form-note" data-form-note aria-live="polite" />
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <span>© 2026 AccessCheck WAV. Independent accessibility and vehicle-history reporting.</span>
        <div className="footer-links">
          <a href="#checks">Checks</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Checks />
        <Workflow />
        <CouncilCoverage />
        <Pricing />
        <Assurance />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
