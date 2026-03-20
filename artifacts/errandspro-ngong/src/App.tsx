import React, { useEffect, useState } from "react";

const WA_LINK = "https://wa.me/254700000000";
const TEL_LINK = "tel:+254700000000";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <a href="#hero" className="navbar-brand" onClick={closeMenu}>
          <span className="brand-errandspro">ErrandsPro</span>
          <span className="brand-dot">·</span>
          <span className="brand-ngong">Ngong</span>
        </a>
        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#areas">Areas</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="nav-cta">
              <i className="fab fa-whatsapp"></i> WhatsApp Us
            </a>
          </li>
        </ul>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <i className={`fas fa-${menuOpen ? "times" : "bars"}`}></i>
        </button>
      </nav>

      <div className={`mobile-menu-overlay${menuOpen ? " open" : ""}`} onClick={closeMenu} />
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#how-it-works" onClick={closeMenu}>How It Works</a>
        <a href="#pricing" onClick={closeMenu}>Pricing</a>
        <a href="#areas" onClick={closeMenu}>Areas</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" onClick={closeMenu} style={{color: "var(--gold)"}}>
          <i className="fab fa-whatsapp" style={{marginRight: "0.5rem"}}></i>WhatsApp Us
        </a>
      </div>
    </>
  );
}

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="corner-bracket tl" />
      <div className="corner-bracket br" />
      <div className="hero-container">
        <span className="hero-label">Professional Concierge &amp; Errand Service</span>
        <h1>
          Life is busy.<br />
          <span>We run it for you.</span>
        </h1>
        <div className="hero-divider">
          <div className="hero-divider-line" />
          <span className="hero-divider-diamond">◆</span>
          <div className="hero-divider-line" />
        </div>
        <p className="hero-sub">
          We shop, deliver, source fundis, and handle your personal, home and document errands across Ngong, Kiserian, and surrounding areas.
        </p>
        <div className="hero-buttons">
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-gold">
            <i className="fab fa-whatsapp"></i> WhatsApp Us Now
          </a>
          <a href="#services" className="btn-outline">View Our Services</a>
        </div>
        <p className="hero-location">📍 Ngong · Kiserian · Kisamis · Kimuka · Matassia · Kibiko</p>
      </div>
      <a href="#trust-bar" className="scroll-indicator" aria-label="Scroll down">
        <i className="fas fa-chevron-down"></i>
      </a>
    </section>
  );
}

function TrustBar() {
  const stats = [
    { icon: "fa-map-location-dot", value: "6 Areas", label: "Served" },
    { icon: "fa-mobile-screen-button", value: "M-Pesa", label: "Accepted" },
    { icon: "fa-clock", value: "Mon–Sat", label: "7am – 7pm" },
    { icon: "fa-receipt", value: "Receipts", label: "Issued" },
  ];
  return (
    <div className="trust-bar" id="trust-bar">
      <div className="trust-bar-inner" data-aos="fade-in">
        {stats.map((s) => (
          <div className="trust-stat" key={s.label}>
            <i className={`fas ${s.icon} trust-icon`}></i>
            <span className="trust-value">{s.value}</span>
            <span className="trust-label">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Services() {
  const services = [
    {
      icon: "fa-cart-shopping",
      title: "Shopping & Delivery",
      desc: "Supermarket runs, market shopping, CBD & wholesale deliveries, pharmacy pickups and farm produce — straight to your door.",
      tags: ["Naivas", "CBD", "Marikiti"],
      delay: 0,
    },
    {
      icon: "fa-wrench",
      title: "Home Services",
      desc: "Vetted plumbers, electricians, painters and cleaners. We source and vet — because your home deserves tradespeople you can trust.",
      tags: ["Fundis", "Electrical", "Plumbing"],
      delay: 100,
    },
    {
      icon: "fa-file-lines",
      title: "Document Errands",
      desc: "Huduma Centre, KRA, NTSA, NHIF, banks and county offices handled on your behalf. Skip the queue. We'll go for you.",
      tags: ["Huduma", "KRA", "NTSA"],
      delay: 200,
    },
    {
      icon: "fa-kit-medical",
      title: "Healthcare Support",
      desc: "Medicine delivery, prescription pickups, lab result collections and hospital appointment bookings — handled with care.",
      tags: ["Pharmacy", "Lab Results", "Bookings"],
      delay: 0,
    },
    {
      icon: "fa-box",
      title: "Courier & Logistics",
      desc: "Same-day delivery, parcel pickup and dispatch, CBD-to-Ngong runs and last-mile logistics for residents and businesses.",
      tags: ["Same Day", "Parcels", "Business"],
      delay: 100,
    },
    {
      icon: "fa-leaf",
      title: "Lifestyle & Personal",
      desc: "Gift sourcing, school supplies, property scouting, special occasion errands and so much more.",
      tags: ["Gifts", "Schools", "Lifestyle"],
      delay: 200,
    },
  ];
  return (
    <section className="section" id="services" style={{ background: "var(--off-white)" }}>
      <div className="section-inner">
        <span className="section-label" data-aos="fade-up">What We Do</span>
        <h2 className="section-title" style={{ color: "var(--navy)" }} data-aos="fade-up" data-aos-delay="50">
          Everything you need. Handled.
        </h2>
        <div className="section-underline" data-aos="fade-up" data-aos-delay="100" />
        <p className="section-sub" data-aos="fade-up" data-aos-delay="150">
          One reliable team for all your personal, home and business errands.
        </p>
        <div className="services-grid">
          {services.map((s) => (
            <div
              className="service-card"
              key={s.title}
              data-aos="fade-up"
              data-aos-delay={s.delay}
            >
              <div className="service-icon-box">
                <i className={`fas ${s.icon}`}></i>
              </div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <div className="service-tags">
                {s.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { icon: "fa-whatsapp", brand: true, title: "WhatsApp Us", desc: "Send us a WhatsApp message describing your errand. We respond within minutes.", num: "01", delay: 0 },
    { icon: "fa-file-invoice", title: "Get a Quote", desc: "We give you a clear, upfront price. No hidden fees. M-Pesa payment accepted.", num: "02", delay: 150 },
    { icon: "fa-person-running", title: "We Handle It", desc: "Our agent handles your errand professionally and keeps you updated throughout.", num: "03", delay: 300 },
    { icon: "fa-circle-check", title: "Task Complete", desc: "Receive your M-Pesa receipt and a completion confirmation. Simple as that.", num: "04", delay: 450 },
  ];
  const stepElements: React.ReactNode[] = [];
  steps.forEach((s, i) => {
    stepElements.push(
      <div
        className="how-step"
        key={s.title}
        data-aos="fade-right"
        data-aos-delay={s.delay}
      >
        <div className="step-number-bg">{s.num}</div>
        <div className="step-icon">
          <i className={`${s.brand ? "fab" : "fas"} ${s.icon}`}></i>
        </div>
        <h3 className="step-title">{s.title}</h3>
        <p className="step-desc">{s.desc}</p>
      </div>
    );
    if (i < steps.length - 1) {
      stepElements.push(
        <div className="how-connector" key={`conn-${i}`}>
          <i className="fas fa-arrow-right"></i>
        </div>
      );
    }
  });

  return (
    <section className="section" id="how-it-works" style={{ background: "var(--navy)" }}>
      <div className="section-inner">
        <span className="section-label" data-aos="fade-up">The Process</span>
        <h2 className="section-title" style={{ color: "#fff" }} data-aos="fade-up" data-aos-delay="50">
          Simple. Fast. <span style={{ color: "var(--gold)" }}>Done.</span>
        </h2>
        <div className="gold-divider" data-aos="fade-up" data-aos-delay="100">
          <div className="gold-divider-line" />
          <span className="gold-divider-diamond">◆</span>
          <div className="gold-divider-line" />
        </div>
        <div className="how-steps">{stepElements}</div>
      </div>
    </section>
  );
}

function Pricing() {
  const tiers = [
    {
      icon: "fa-circle",
      tier: "Basic",
      price: "KSh 200 – 400",
      desc: "Local errands within Ngong & Kiserian",
      features: ["Market or pharmacy runs", "Local drop-offs and pickups", "Same-day availability"],
      featured: false,
      delay: 0,
    },
    {
      icon: "fa-star-half-stroke",
      tier: "Standard",
      price: "KSh 500 – 800",
      desc: "CBD & inter-town tasks",
      features: ["CBD shopping and delivery", "Bank & document errands", "Town-to-Ngong logistics"],
      featured: false,
      delay: 100,
    },
    {
      icon: "fa-star",
      tier: "Premium",
      price: "KSh 1,000 – 2,500",
      desc: "Complex or time-intensive tasks",
      features: ["Fundi sourcing & coordination", "Hospital escort service", "Multi-stop errands"],
      featured: false,
      delay: 200,
    },
    {
      icon: "fa-crown",
      tier: "Subscription",
      price: "KSh 3,500 / month",
      desc: "For busy households & professionals",
      features: ["8 errands per month", "Priority WhatsApp response", "No per-errand booking fee"],
      featured: true,
      delay: 0,
    },
    {
      icon: "fa-building",
      tier: "Corporate",
      price: "KSh 5,000+ / month",
      desc: "For small businesses & shops",
      features: ["Dedicated agent partnership", "Bank, delivery & logistics runs", "Custom monthly plan"],
      featured: false,
      delay: 100,
    },
  ];
  return (
    <section className="section" id="pricing" style={{ background: "var(--light-gray)" }}>
      <div className="section-inner">
        <span className="section-label" data-aos="fade-up">Transparent Pricing</span>
        <h2 className="section-title" style={{ color: "var(--navy)" }} data-aos="fade-up" data-aos-delay="50">
          Clear prices. No surprises.
        </h2>
        <div className="section-underline" data-aos="fade-up" data-aos-delay="100" />
        <p className="section-sub" data-aos="fade-up" data-aos-delay="150">
          All errands are quoted upfront. M-Pesa accepted. Receipt issued for every transaction.
        </p>
        <div className="pricing-grid">
          {tiers.map((t) => (
            <div
              className={`pricing-card${t.featured ? " featured" : ""}`}
              key={t.tier}
              data-aos="zoom-in"
              data-aos-delay={t.delay}
            >
              {t.featured && <span className="most-popular">Most Popular</span>}
              <div className="pricing-icon"><i className={`fas ${t.icon}`}></i></div>
              <p className="pricing-tier">{t.tier}</p>
              <p className="pricing-price">{t.price}</p>
              <p className="pricing-desc">{t.desc}</p>
              <div className="pricing-divider" />
              <ul className="pricing-features">
                {t.features.map((f) => (
                  <li key={f}>
                    <i className="fas fa-check"></i>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Areas() {
  const areas = [
    { name: "Ngong Town", desc: "Our home base and primary service hub" },
    { name: "Kiserian", desc: "High-density residential coverage" },
    { name: "Kisamis", desc: "Full errand and delivery service" },
    { name: "Kimuka", desc: "Estate and household concierge" },
    { name: "Matassia", desc: "Reliable delivery and home services" },
    { name: "Kibiko", desc: "Complete errand coverage" },
  ];
  return (
    <section className="section" id="areas" style={{ background: "var(--navy)" }}>
      <div className="section-inner">
        <span className="section-label" data-aos="fade-up">Where We Operate</span>
        <h2 className="section-title" style={{ color: "#fff" }} data-aos="fade-up" data-aos-delay="50">
          Proudly serving the Ngong corridor.
        </h2>
        <div className="section-underline" data-aos="fade-up" data-aos-delay="100" />
        <p className="section-sub white" data-aos="fade-up" data-aos-delay="150">
          We cover six key areas in the Ngong–Kiserian belt. Professional, reliable service — wherever you are.
        </p>
        <div className="areas-grid">
          {areas.map((a, i) => (
            <div
              className="area-card"
              key={a.name}
              data-aos="fade-up"
              data-aos-delay={Math.floor(i / 3) * 100 + (i % 3) * 50}
            >
              <div className="area-pin"><i className="fas fa-location-dot"></i></div>
              <h3 className="area-name">{a.name}</h3>
              <p className="area-desc">{a.desc}</p>
            </div>
          ))}
        </div>
        <p className="areas-note" data-aos="fade-up">
          Don't see your area?{" "}
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
            WhatsApp us — we may still be able to help →
          </a>
        </p>
      </div>
    </section>
  );
}

function WhyUs() {
  const reasons = [
    {
      icon: "fa-shield-halved",
      title: "Trusted & Vetted",
      desc: "Every fundi and service provider we refer has been personally vetted by our team. We don't recommend anyone we wouldn't use ourselves.",
    },
    {
      icon: "fa-id-badge",
      title: "Always Professional",
      desc: "Branded uniform, M-Pesa receipts, and clear communication on every task. We operate like a real company — because we are one.",
    },
    {
      icon: "fa-tag",
      title: "Upfront Pricing",
      desc: "No surprise charges. Every errand is quoted before we begin. You know exactly what you're paying — always.",
    },
    {
      icon: "fa-heart",
      title: "Community-First",
      desc: "We live and work in this community. We understand the real daily challenges of Ngong and Kiserian residents — and we're here to help.",
    },
  ];
  return (
    <section className="section" style={{ background: "var(--off-white)" }}>
      <div className="section-inner">
        <span className="section-label" data-aos="fade-up">Why ErrandsPro</span>
        <h2 className="section-title" style={{ color: "var(--navy)" }} data-aos="fade-up" data-aos-delay="50">
          The difference is in how we operate.
        </h2>
        <div className="section-underline" data-aos="fade-up" data-aos-delay="100" />
        <div className="why-grid" style={{ marginTop: "3rem" }}>
          {reasons.map((r, i) => (
            <div className="why-block" key={r.title} data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="why-icon-circle">
                <i className={`fas ${r.icon}`}></i>
              </div>
              <div>
                <h3 className="why-title">{r.title}</h3>
                <p className="why-desc">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      text: `"I leave home at 6am and get back after 8pm. I used to dread weekends because of all the errands piling up. ErrandsPro sorted my groceries, handled a Huduma errand and even found me a reliable electrician — all in one week. Life-changing, honestly."`,
      name: "James M.",
      area: "Kimuka",
      initials: "JM",
      delay: 0,
    },
    {
      text: `"As a salon owner, I can't close my business to run errands. ErrandsPro does my bank runs, picks up my supplies and even helped me sort a county permit. I have a dedicated contact who knows exactly what I need. Worth every shilling."`,
      name: "Grace W.",
      area: "Kiserian",
      initials: "GW",
      delay: 150,
    },
    {
      text: `"My father is elderly and lives alone in Ngong. ErrandsPro collects his medication every month and even escorted him to hospital once. I'm in Nairobi and I sleep better knowing someone reliable is looking after his errands. Thank you."`,
      name: "Peter K.",
      area: "Ngong (son of client)",
      initials: "PK",
      delay: 300,
    },
  ];
  return (
    <section className="section" style={{ background: "#fff" }}>
      <div className="section-inner">
        <span className="section-label" data-aos="fade-up">Client Stories</span>
        <h2 className="section-title" style={{ color: "var(--navy)" }} data-aos="fade-up" data-aos-delay="50">
          Real people. Real results.
        </h2>
        <div className="section-underline" data-aos="fade-up" data-aos-delay="100" />
        <div className="testimonials-grid" style={{ marginTop: "3rem" }}>
          {items.map((t) => (
            <div className="testimonial-card" key={t.name} data-aos="fade-up" data-aos-delay={t.delay}>
              <span className="quote-mark">&ldquo;</span>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <div className="author-avatar">{t.initials}</div>
                <div>
                  <p className="author-name">{t.name}</p>
                  <p className="author-area">{t.area}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-bracket-tl" />
      <div className="contact-bracket-br" />
      <div className="contact-inner">
        <span className="contact-label" data-aos="fade-up">Get Started Today</span>
        <h2 className="contact-title" data-aos="fade-up" data-aos-delay="50">
          Ready to take back your time?
        </h2>
        <p className="contact-para" data-aos="fade-up" data-aos-delay="100">
          Your first errand is just one message away. Tell us what you need and we'll handle the rest — professionally, reliably, and at a price you know upfront.
        </p>
        <div className="gold-divider" data-aos="fade-up" data-aos-delay="150">
          <div className="gold-divider-line" />
          <span className="gold-divider-diamond">◆</span>
          <div className="gold-divider-line" />
        </div>
        <div className="contact-info-grid" data-aos="fade-up" data-aos-delay="200">
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="contact-info-item">
            <i className="fab fa-whatsapp"></i> Send Us a Message
          </a>
          <span className="contact-info-item">
            <i className="fas fa-map-pin"></i> Ngong, Kiserian &amp; Surrounding Areas
          </span>
          <span className="contact-info-item">
            <i className="fas fa-clock"></i> Mon–Sat | 7:00am – 7:00pm
          </span>
        </div>
        <div className="contact-buttons" data-aos="fade-up" data-aos-delay="250">
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-gold">
            <i className="fab fa-whatsapp"></i> WhatsApp Us Now
          </a>
          <a href={TEL_LINK} className="btn-outline-white">
            <i className="fas fa-phone"></i> Call Us
          </a>
        </div>
        <p className="contact-footer-note" data-aos="fade-up" data-aos-delay="300">
          M-Pesa accepted · Receipts issued · Responses within minutes
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <p className="footer-brand-name">
            <span className="gold">ErrandsPro</span> <span className="white">Ngong</span>
          </p>
          <p className="footer-tagline">"Your time is valuable. We handle the rest."</p>
          <div className="footer-social">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="TikTok"><i className="fab fa-tiktok"></i></a>
          </div>
        </div>
        <div>
          <p className="footer-col-title">Quick Links</p>
          <ul className="footer-links">
            <li><a href="#services">Services</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#areas">Areas</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <p className="footer-col-title">Contact</p>
          <div className="footer-contact-list">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="footer-contact-item">
              <i className="fab fa-whatsapp"></i> WhatsApp Us
            </a>
            <a href="mailto:info@errandsprongong.co.ke" className="footer-contact-item">
              <i className="fas fa-envelope"></i> info@errandsprongong.co.ke
            </a>
            <span className="footer-contact-item">
              <i className="fas fa-clock"></i> Mon–Sat 7am – 7pm
            </span>
            <span className="footer-contact-item">
              <i className="fas fa-map-pin"></i> Ngong, Kiserian &amp; surrounding
            </span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 ErrandsPro Ngong. All rights reserved.</p>
        <p>Professional Concierge Services · Kajiado County, Kenya</p>
      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat with us on WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
      <span className="whatsapp-tooltip">Chat with us on WhatsApp</span>
    </a>
  );
}

export default function App() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).AOS) {
      (window as any).AOS.init({ duration: 700, once: true, offset: 80 });
    }
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <HowItWorks />
        <Pricing />
        <Areas />
        <WhyUs />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
      <WhatsAppFloat />
    </>
  );
}
