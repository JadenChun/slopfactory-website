import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  Bot,
  Box,
  Braces,
  Check,
  ChevronRight,
  Menu,
  MousePointer2,
  Smartphone,
  Sparkles,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import { siteConfig } from "./siteConfig";

const services = [
  {
    number: "01",
    icon: Braces,
    title: "Web systems",
    description:
      "Fast, useful websites and web apps built around the way your business actually works.",
    tags: ["Landing pages", "Dashboards", "Internal tools"],
  },
  {
    number: "02",
    icon: Smartphone,
    title: "Mobile products",
    description:
      "Focused mobile experiences, from an early product idea to a reliable app people can use.",
    tags: ["iOS & Android", "MVP builds", "Product iteration"],
  },
  {
    number: "03",
    icon: Bot,
    title: "AI implementation",
    description:
      "Practical LLM features and automations connected safely to your existing tools and data.",
    tags: ["AI workflows", "RAG & agents", "Third-party APIs"],
  },
];

const process = [
  {
    title: "Find the useful thing",
    text: "We clarify the real problem, the users, and the smallest version worth building.",
  },
  {
    title: "Build with leverage",
    text: "AI speeds up the factory floor. Engineering judgment keeps the output dependable.",
  },
  {
    title: "Ship, learn, improve",
    text: "Release early, collect real feedback, then refine what matters instead of guessing.",
  },
];

const principles = [
  "Small, focused team",
  "Clear, direct communication",
  "AI-assisted delivery",
  "Professional engineering",
];

function Logo() {
  return (
    <a className="logo" href="#top" aria-label="SlopFactory home">
      <span className="logo-wordmark">slopfactory</span>
    </a>
  );
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <Logo />
      <button
        className="menu-button"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
      <nav className={isOpen ? "nav-links is-open" : "nav-links"}>
        <a href="#services" onClick={closeMenu}>
          Services
        </a>
        <a href="#approach" onClick={closeMenu}>
          Approach
        </a>
        <a href="#lab" onClick={closeMenu}>
          Product lab
        </a>
        <a className="nav-cta" href={siteConfig.contactHref} onClick={closeMenu}>
          Start a project <ArrowDownRight size={16} />
        </a>
      </nav>
    </header>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual" aria-label="SlopFactory software production diagram">
      <div className="visual-label">FACTORY LINE / 001</div>
      <div className="visual-orbit orbit-one" />
      <div className="visual-orbit orbit-two" />
      <div className="factory-core">
        <span className="core-kicker">INPUT</span>
        <strong>Messy idea</strong>
        <ArrowDownRight size={22} />
      </div>
      <div className="output-card">
        <span>OUTPUT</span>
        <strong>Useful software</strong>
        <div className="output-progress">
          <i />
        </div>
      </div>
      <div className="floating-tag tag-ai">
        <Sparkles size={15} /> AI leverage
      </div>
      <div className="floating-tag tag-human">
        <MousePointer2 size={15} /> Human judgment
      </div>
      <div className="visual-stamp">
        <Zap size={19} />
        <span>BUILT TO SHIP</span>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <div className="top-strip">
        <span>Professional software studio</span>
        <span>Malaysia / working worldwide</span>
        <span>{siteConfig.status}</span>
      </div>

      <main id="top">
        <Header />

        <section className="hero section-shell">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> Software production, intelligently
            </p>
            <h1>
              From messy idea
              <br />
              to <span>useful software.</span>
            </h1>
            <p className="hero-intro">
              SlopFactory is an AI-native software studio building custom web,
              mobile, and intelligent systems for people with work worth
              improving.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={siteConfig.contactHref}>
                Build something useful <ArrowRight size={18} />
              </a>
              <a className="text-link" href="#services">
                Explore capabilities <ArrowDownRight size={17} />
              </a>
            </div>
          </div>
          <HeroVisual />
        </section>

        <section className="ticker" aria-label="SlopFactory capabilities">
          <div className="ticker-track">
            <span>Web development</span>
            <i />
            <span>Mobile apps</span>
            <i />
            <span>AI + LLM systems</span>
            <i />
            <span>Third-party integrations</span>
            <i />
            <span>Custom software</span>
            <i />
            <span>Web development</span>
            <i />
            <span>Mobile apps</span>
            <i />
          </div>
        </section>

        <section className="services section-shell" id="services">
          <div className="section-heading">
            <div>
              <p className="section-index">[ 01 / CAPABILITIES ]</p>
              <h2>Software that fits the work.</h2>
            </div>
            <p>
              A small, focused team of professional developers combining
              careful product thinking, direct collaboration, and the right
              technical tools for the job.
            </p>
          </div>
          <div className="service-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article className="service-card" key={service.title}>
                  <div className="card-top">
                    <span>{service.number}</span>
                    <Icon size={26} strokeWidth={1.8} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul>
                    {service.tags.map((tag) => (
                      <li key={tag}>
                        <Check size={14} /> {tag}
                      </li>
                    ))}
                  </ul>
                  <ArrowDownRight className="card-arrow" size={23} />
                </article>
              );
            })}
          </div>
        </section>

        <section className="approach" id="approach">
          <div className="section-shell approach-inner">
            <div className="approach-copy">
              <p className="section-index light">[ 02 / OPERATING SYSTEM ]</p>
              <h2>
                Small team.
                <br />
                Professional delivery.
              </h2>
              <p>
                SlopFactory brings together professional software development
                and modern AI tools to deliver with speed and care. A focused
                team means clear ownership, fewer handoffs, and more attention
                on making the product work.
              </p>
              <div className="principle-grid">
                {principles.map((principle) => (
                  <div key={principle}>
                    <Check size={16} />
                    <span>{principle}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="process-list">
              {process.map((step, index) => (
                <article key={step.title}>
                  <div className="step-number">0{index + 1}</div>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                  <ChevronRight size={22} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="lab section-shell" id="lab">
          <div className="lab-card">
            <div className="lab-copy">
              <p className="section-index">[ 03 / PRODUCT LAB ]</p>
              <h2>
                Custom solutions for clients.
                <br />
                Original products of our own.
              </h2>
              <p>
                Besides providing software customization services, SlopFactory
                also develops its own software products. We turn practical
                ideas into focused tools designed to solve real problems and
                create lasting value.
              </p>
              <div className="lab-status">
                <span className="status-dot" />
                Original products in development
              </div>
            </div>
            <div className="lab-machine" aria-hidden="true">
              <div className="machine-window">
                <div className="machine-code">
                  <span>PRODUCT_QUEUE</span>
                  <strong>001</strong>
                </div>
                <Box size={60} strokeWidth={1.4} />
              </div>
              <div className="machine-controls">
                <span />
                <span />
                <span />
                <Workflow size={24} />
              </div>
            </div>
          </div>
        </section>

        <section className="contact section-shell" id="contact">
          <div className="contact-label">
            <span className="status-dot" /> {siteConfig.status}
          </div>
          <h2>
            Got a useful problem?
            <br />
            <span>Let&apos;s make it software.</span>
          </h2>
          <p>
            Share the idea, the bottleneck, or the thing your current tools
            refuse to do. We&apos;ll figure out the sensible next step.
          </p>
          <a className="button button-dark" href={siteConfig.contactHref}>
            Start the conversation <ArrowRight size={19} />
          </a>
          <a className="contact-email" href={siteConfig.contactHref}>
            {siteConfig.contactEmail}
          </a>
        </section>
      </main>

      <footer>
        <Logo />
        <p>Small-team, AI-native software studio.</p>
        <a href={siteConfig.contactHref}>{siteConfig.contactEmail}</a>
        <span>&copy; {new Date().getFullYear()} SlopFactory</span>
      </footer>
    </>
  );
}

export default App;
