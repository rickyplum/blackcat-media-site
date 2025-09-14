// src/App.jsx
import React, { useEffect, useRef, useState } from "react";

/* ---------- Constants ---------- */
const SPOTIFY_EMBED_URL =
  "https://open.spotify.com/embed/show/3i7DxU0YyDnaMVdDrF4fpG?utm_source=generator&theme=0";
const RESIDUE_EMBED_URL =
  "https://open.spotify.com/embed/show/69rVpBKK6Y8hMnYCCsfw1Y?utm_source=generator&theme=0";

/* ---------- Hooks ---------- */
function useParallax(mult = 0.06) {
  const [y, setY] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          setY(window.scrollY * mult);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mult]);

  return y;
}

/* ---------------- Header ---------------- */
function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-black/10">
      <div className="container-max h-16 flex items-center justify-between">
        <a
          href="#home"
          className="font-extrabold tracking-[0.18em] text-3xl md:text-4xl"
        >
          BLACKCAT
        </a>
        <nav className="hidden sm:flex items-center gap-8 text-sm">
          <a href="#shows" className="hover:underline underline-offset-4">Shows</a>
          <a href="#about" className="hover:underline underline-offset-4">About</a>
          <a href="#how" className="hover:underline underline-offset-4">How it works</a>
          <a href="#join" className="hover:underline underline-offset-4">Join</a>
          <a href="#faq" className="hover:underline underline-offset-4">FAQ</a>
          <a href="#contact" className="hover:underline underline-offset-4">Contact</a>
        </nav>
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  const heroParallax = useParallax(0.1);

  return (
    <section id="home" className="section hero-splash relative overflow-hidden">
      {/* Decorative cat watermark */}
      <div
        className="hidden md:block absolute right-[-120px] top-1/2"
        style={{ transform: `translateY(calc(-50% + ${heroParallax}px))` }}
        aria-hidden="true"
      >
        <img
          src="/images/blackcat-sticker.png"
          alt=""
          className="sticker w-[520px] opacity-10 rotate-12"
        />
      </div>

      <div className="container-max text-center relative">
        <p className="kicker">Creator-First Podcast Network</p>

        <h1 className="mt-3 text-5xl md:text-6xl font-extrabold leading-[1.05]">
          <span className="text-gradient">BLACKCAT</span>
        </h1>

        <div className="hero-accent mt-5 mx-auto" aria-hidden="true" />

        <p className="lead mt-6 max-w-2xl mx-auto">
          BLACKCAT helps indie podcasters grow, monetize, and connect—without giving up ownership.
        </p>

        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <a href="#join" className="btn btn-primary">Join the Network</a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Shows ---------------- */
function Shows() {
  return (
    <section id="shows" className="section">
      <div className="container-max">
        <header className="section-head">
          <p className="kicker">Shows</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-2 title-gradient">
            Now Playing
          </h2>
          <p className="lead mt-3">
            Start with the latest episode — then explore the catalog.
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Crime Salad */}
          <article className="card overflow-hidden">
            <div className="block block--lemon p-0">
              <img
                src="/images/crime-salad-art.png"
                alt="Crime Salad"
                className="w-full aspect-square object-cover rounded-3xl"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold">Crime Salad</h3>
              <p className="text-sm text-ink-600 mt-1">
                Victim-focused true crime with Ashley & Ricky.
              </p>

              <div className="mt-4">
                <iframe
                  title="Spotify — Crime Salad (show)"
                  src={SPOTIFY_EMBED_URL}
                  className="embed"
                  width="100%"
                  height="232"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </div>

              <div className="mt-4">
                <a href="#contact" className="btn btn-primary">Advertise</a>
              </div>
            </div>
          </article>

          {/* Residue: A True Crime Podcast */}
          <article className="card overflow-hidden">
            <div className="block block--lilac p-0">
              <img
                src="/images/residue-art.png"
                alt="Residue: A True Crime Podcast"
                className="w-full aspect-square object-cover rounded-3xl"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold">Residue: A True Crime Podcast</h3>
              <p className="text-sm text-ink-600 mt-1">
                A true-crime series digging into what’s left behind.
              </p>

              <div className="mt-4">
                <iframe
                  title="Spotify — Residue (show)"
                  src={RESIDUE_EMBED_URL}
                  className="embed"
                  width="100%"
                  height="232"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </div>

              <div className="mt-4">
                <a href="#contact" className="btn btn-primary">Advertise</a>
              </div>
            </div>
          </article>

          {/* Work with us */}
          <article className="card overflow-hidden">
           <div className="block block--sky p-0">
            <div className="aspect-square rounded-3xl bg-white/80 flex items-center justify-center overflow-hidden">
              <img
                src="/images/blackcat-sticker.png"
                alt="Coming Soon — Blackcat"
                className="w-3/4 max-w-[360px] object-contain opacity-90 rotate-6"
              />
            </div>
          </div>

            <div className="p-5">
              <h3 className="text-lg font-semibold">Work with us</h3>
              <p className="text-sm text-ink-600 mt-1">
                Want to launch a podcast? Join the BLACKCAT network and grow with us.
              </p>
              <div className="mt-4">
                <a href="#join" className="btn btn-primary">Get in touch</a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

/* ---------- Small helper for feature panels ---------- */
function Feature({ title, children }) {
  return (
    <div className="h-full rounded-2xl bg-white/95 ring-1 ring-black/10 shadow-[0_2px_12px_rgba(0,0,0,0.06)] p-5 md:p-6">
      <h3 className="text-base font-semibold leading-tight">{title}</h3>
      {children && (
        <p className="mt-2 text-sm leading-relaxed text-ink-700">{children}</p>
      )}
    </div>
  );
}

/* ---------------- About (refined) ---------------- */
function About() {
  return (
    <section id="about" className="section">
      <div className="container-max">
        <header className="section-head text-center">
          <p className="kicker">About</p>
          <h2
            className="text-3xl md:text-4xl font-extrabold tracking-tight mt-2 title-gradient"
            style={{ textWrap: "balance" }}
          >
            What is BLACKCAT?
          </h2>
        <div className="hero-accent mt-5 mx-auto" aria-hidden="true" />
          <p className="lead mt-6 max-w-3xl mx-auto">
            BLACKCAT is a creator-first podcast network built to empower independent shows.
            We provide free hosting, monetization tools, and community support while keeping
            creators 100% in control of their IP.
          </p>
        </header>

        {/* Why BLACKCAT — feature grid */}
        <div className="mt-10 max-w-5xl mx-auto">
          <h3 className="text-lg font-semibold mb-4">Why BLACKCAT?</h3>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
            <Feature title="80% revenue to podcasters">
              Compared with the industry’s 40%+ take.
            </Feature>

            <Feature title="Flexible 3-month agreements">
              Keep terms light and creator-friendly.
            </Feature>

            <Feature title="Free hosting on Art19">
              Amazon-owned, industry-leading platform with advanced analytics.
            </Feature>

            <Feature title="Net-30 payments">
              Paid by direct deposit on a predictable schedule.
            </Feature>

            <Feature title="Full creative control & ownership">
              You keep your IP and call the shots.
            </Feature>

            <Feature title="Pretty awesome & cool">
              Independent, colorful, and human. We answer fast, work hard, and treat creators like partners—not inventory.
            </Feature>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Small helper for numbered steps ---------- */
function Step({ n, title, children }) {
  return (
    <div className="h-full rounded-2xl bg-white/95 ring-1 ring-black/10 shadow-[0_2px_12px_rgba(0,0,0,0.06)] p-5 md:p-6 flex flex-col">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-7 w-7 md:h-8 md:w-8 shrink-0 items-center justify-center rounded-full bg-black text-white text-[11px] md:text-xs font-bold">
          {n}
        </span>
        <h3 className="text-sm md:text-base font-semibold leading-tight">{title}</h3>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-ink-700">
        {children}
      </p>
    </div>
  );
}

/* ---------------- How It Works (clean) ---------------- */
function HowItWorks() {
  return (
    <section id="how" className="section">
      <div className="container-max">
        <header className="section-head text-center">
          <p className="kicker">How it works</p>
          <h2
            className="text-3xl md:text-4xl font-extrabold tracking-tight mt-2 title-gradient"
            style={{ textWrap: "balance" }}
          >
            Simple, fair, creator-first
          </h2>
          <div className="hero-accent mt-5 mx-auto" aria-hidden="true" />
        </header>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
          <Step n="1" title="Host for Free">
            We cover hosting on Art19, with advanced analytics, dynamic ad control,
            and private creator logins.
          </Step>

          <Step n="2" title="Monetize Responsibly">
            Start with simple dynamic ads so you earn while keeping listeners happy.
          </Step>

          <Step n="3" title="Grow Together">
            Cross-promotion inside the network gets your show in front of new listeners.
          </Step>

          <Step n="4" title="Get Support">
            We handle migrations, ad setup, and share guides, resources, and a private
            Slack community.
          </Step>
        </div>
      </div>
    </section>
  );
}

/* --------------- Join the Network (clean) --------------- */
function Join() {
  return (
    <section id="join" className="section">
      <div className="container-max">
        <header className="section-head text-center">
          <p className="kicker">Join the Network</p>
          <h2
            className="text-3xl md:text-4xl font-extrabold tracking-tight mt-2 title-gradient"
            style={{ textWrap: "balance" }}
          >
            A fair deal for independent creators
          </h2>
          <div className="hero-accent mt-5 mx-auto" aria-hidden="true" />
        </header>

        <div className="mt-10 grid gap-6 md:grid-cols-2 max-w-5xl mx-auto items-stretch">
          <div className="rounded-2xl bg-white/95 ring-1 ring-black/10 shadow-[0_2px_12px_rgba(0,0,0,0.06)] p-6">
            <h3 className="text-lg font-semibold">Our Philosophy</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-700">
              No IP grabs. No long contracts. No forced branding. BLACKCAT exists to:
            </p>
            <ul className="mt-3 list-disc pl-5 text-sm leading-relaxed text-ink-700 space-y-2 marker:text-ink-300">
              <li>Empower creators to own their content.</li>
              <li>Foster collaboration over competition.</li>
              <li>Provide a fair launchpad for sustainable growth.</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white/95 ring-1 ring-black/10 shadow-[0_2px_12px_rgba(0,0,0,0.06)] p-6">
            <h3 className="text-lg font-semibold">The Future</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-700">
              We’re building toward original productions and larger sales partnerships.
              Right now, we’re focused on community, growth, and giving creators a fair deal.
            </p>
            <ul className="mt-3 list-disc pl-5 text-sm leading-relaxed text-ink-700 space-y-2 marker:text-ink-300">
              <li>Original productions on the roadmap.</li>
              <li>Partner sales to increase fill and CPMs.</li>
              <li>Always creator-first terms.</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a href="#contact" className="btn btn-primary">
            Apply to Join BLACKCAT
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  return (
    <section id="faq" className="section relative overflow-hidden">
      {/* Cat sticker peek */}
      <div
        className="hidden md:block absolute left-[-60px] top-1/3 opacity-15 -rotate-6"
        aria-hidden="true"
      >
        <img
          src="/images/blackcat-sticker.png"
          alt=""
          className="sticker w-40"
        />
      </div>

      <div className="container-max">
        <header className="section-head">
          <p className="kicker">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-2 title-gradient">
            Questions, answered.
          </h2>
          <p className="lead mt-3">
            Here’s the quick version of how Blackcat works with creators and partners.
          </p>
        </header>

        <div className="mt-10 faq grid gap-3 max-w-3xl mx-auto">
          <details className="faq-item group">
            <summary className="faq-summary">
              <span>What is Blackcat?</span>
              <svg className="faq-caret" viewBox="0 0 24 24" fill="none">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </summary>
            <div className="faq-content">
              Blackcat is a creator-first audio network. We support shows people
              actually recommend — and help brands join the conversation with
              thoughtful, host-read placements.
            </div>
          </details>

          <details className="faq-item group">
            <summary className="faq-summary">
              <span>Do I need a download minimum?</span>
              <svg className="faq-caret" viewBox="0 0 24 24" fill="none">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </summary>
            <div className="faq-content">
              Nope. No minimum is required to join. For context, shows under ~50k
              monthly impressions typically see lighter direct demand, but we can
              still monetize programmatically and help you grow.
            </div>
          </details>

          <details className="faq-item group">
            <summary className="faq-summary">
              <span>What’s Blackcat’s cut?</span>
              <svg className="faq-caret" viewBox="0 0 24 24" fill="none">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </summary>
            <div className="faq-content">
              In most cases, we take <strong>20–25%</strong>. It’s transparent and a
              little leaner than what’s typical in the industry.
            </div>
          </details>

          <details className="faq-item group">
            <summary className="faq-summary">
              <span>Where do you host?</span>
              <svg className="faq-caret" viewBox="0 0 24 24" fill="none">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </summary>
            <div className="faq-content">
              We use <strong>Art19 (an Amazon company)</strong> for hosting and
              monetization. You’ll get analytics, dynamic ad insertion, and
              enterprise-grade delivery — no extra platform fees.
            </div>
          </details>

          <details className="faq-item group">
            <summary className="faq-summary">
              <span>Am I locked into a long contract?</span>
              <svg className="faq-caret" viewBox="0 0 24 24" fill="none">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </summary>
            <div className="faq-content">
              Not at all. We just ask for <strong>60 days’ notice</strong> so we can wrap
              up any campaigns in progress. After that, you’re free to go.
            </div>
          </details>

          <details className="faq-item group">
            <summary className="faq-summary">
              <span>How often do I get paid?</span>
              <svg className="faq-caret" viewBox="0 0 24 24" fill="none">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </summary>
            <div className="faq-content">
              Payments go out <strong>every month, right on schedule</strong>.
              No chasing, no surprises.
            </div>
          </details>

          <details className="faq-item group">
            <summary className="faq-summary">
              <span>How quickly will I see revenue?</span>
              <svg className="faq-caret" viewBox="0 0 24 24" fill="none">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </summary>
            <div className="faq-content">
              It depends a little on your show. <br /><br />
              <strong>Programmatic ads</strong> can start almost right away. <br />
              <strong>Direct, host-read campaigns</strong> usually take a few weeks,
              since we need to pitch your show and line up creative. <br /><br />
              Either way, we’ll map your timeline during onboarding so you know
              what to expect.
            </div>
          </details>

          <details className="faq-item group">
            <summary className="faq-summary">
              <span>How do I start?</span>
              <svg className="faq-caret" viewBox="0 0 24 24" fill="none">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </summary>
            <div className="faq-content">
              <a href="#contact" className="underline">Send us a quick intro</a>.
              Tell us about your show, audience, and goals — we’ll get back with
              next steps.
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact (Formspree) ---------------- */
function Contact() {
  const sent =
    typeof window !== "undefined" &&
    (window.location.hash.includes("sent=1") || window.location.search.includes("sent=1"));

  return (
    <section id="contact" className="section">
      <div className="container-max">
        <header className="section-head">
          <p className="kicker">Contact</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-2 title-gradient">
            Get in touch
          </h2>
          <p className="lead mt-3">
            Tell us about your campaign or show. We’ll respond quickly.
          </p>
          <p className="mt-4 text-sm text-ink-600">
            Prefer email?{" "}
            <a
              href="mailto:contact@blackcat.fm"
              className="font-semibold underline underline-offset-4 hover:no-underline"
            >
              contact@blackcat.fm
            </a>
          </p>
        </header>

        {sent && (
          <div className="mt-6 mx-auto max-w-xl rounded-xl border border-black/10 bg-white p-4 text-sm text-ink-700 shadow-sm">
            Thanks! Your message was sent — we’ll be in touch shortly.
          </div>
        )}

        <form
          action="https://formspree.io/f/movnrbrz"
          method="POST"
          className="mt-10 grid gap-4 max-w-xl mx-auto"
        >
          <input
            className="h-11 px-4 rounded-xl bg-white border border-black/10 shadow-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-black/20"
            placeholder="Your name"
            name="name"
            required
          />
          <input
            className="h-11 px-4 rounded-xl bg-white border border-black/10 shadow-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-black/20"
            placeholder="Company"
            name="company"
          />
          <input
            className="h-11 px-4 rounded-xl bg-white border border-black/10 shadow-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-black/20"
            type="email"
            placeholder="Email"
            name="email"
            required
          />
          <textarea
            className="min-h-[120px] px-4 py-3 rounded-xl bg-white border border-black/10 shadow-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-black/20"
            placeholder="What are you promoting? Or tell us about your show."
            name="message"
            required
          />

          <input type="hidden" name="_subject" value="Blackcat Media Inquiry" />
          <input type="hidden" name="_redirect" value="https://blackcat.fm/#contact?sent=1" />
          <input type="text" name="_gotcha" className="hidden" tabIndex="-1" autoComplete="off" />

          <button type="submit" className="btn btn-primary">Send</button>
        </form>

        <div className="mt-6 text-center">
          <a
            href="mailto:contact@blackcat.fm?subject=Blackcat%20Media%20Inquiry&body=Hi%20Blackcat%20team,%0D%0A%0D%0A"
            className="btn btn-ghost"
          >
            Email us directly
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="relative border-t border-black/10 overflow-hidden">
      <img
        src="/images/blackcat-sticker.png"
        alt=""
        aria-hidden="true"
        className="sticker absolute -bottom-10 -right-10 w-40 opacity-10 rotate-12"
      />
      <div className="container-max py-10 text-center text-sm text-ink-600 relative">
        © {new Date().getFullYear()} Blackcat Media
      </div>
    </footer>
  );
}

/* ---------------- App ---------------- */
export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Shows />
      <About />
      <HowItWorks />
      <Join />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
