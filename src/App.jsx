import React, { useEffect, useRef, useState } from "react";

const SPOTIFY_EMBED_URL =
  "https://open.spotify.com/embed/show/3i7DxU0YyDnaMVdDrF4fpG?utm_source=generator&theme=0";

// Pre-filled mailto link (subject + body)
const MAILTO_LINK =
  "mailto:contact@blackcat.fm?subject=Blackcat%20Media%20Inquiry&body=Hi%20Blackcat%20team,%0D%0A%0D%0A";

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
        <p className="kicker">Podcast Network</p>

        <h1 className="mt-3 text-5xl md:text-6xl font-extrabold leading-[1.05]">
          <span className="text-gradient">Stories that stick.</span>
        </h1>

        <div className="hero-accent mt-5 mx-auto" aria-hidden="true" />

        <p className="lead mt-6 max-w-2xl mx-auto">
          Independent shows. Real fans. Ads that actually land.
        </p>

        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <a href="#shows" className="btn btn-primary">Explore shows</a>
          <a href="#contact" className="btn btn-ghost">Advertise</a>
          <a href="#contact" className="btn btn-ghost">Work with us</a>
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

          {/* Coming Soon card */}
          <article className="card overflow-hidden">
            <div className="block block--sky p-0">
              <div className="aspect-square rounded-3xl bg-white/50" />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold">Coming Soon</h3>
              <p className="text-sm text-ink-600 mt-1">
                A new show is on the way. Stay tuned.
              </p>
            </div>
          </article>

          {/* Work with us card */}
          <article className="card overflow-hidden">
            <div className="block block--mint p-0">
              <div className="aspect-square rounded-3xl bg-white/50 flex items-center justify-center text-lg font-semibold text-ink-600">
                Join Us
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold">Work with us</h3>
              <p className="text-sm text-ink-600 mt-1">
                Want to launch a podcast? Join the BLACKCAT network and grow with us.
              </p>
              <div className="mt-4">
                <a href="#contact" className="btn btn-primary">Get in touch</a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

/* ---------------- About ---------------- */
function About() {
  return (
    <section id="about" className="section">
      <div className="container-max">
        <header className="section-head">
          <p className="kicker">About</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-2 title-gradient">
            Colorful stories, simple ideas
          </h2>
          <p className="lead mt-3">
            Blackcat is a podcast network built for independent creators.
            We focus on shows that people recommend to their friends —
            and help brands connect with those audiences through thoughtful,
            host-read ads.
          </p>
        </header>
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
              monthly impressions typically see lighter direct (host-read) demand,
              but we can still monetize programmatically and help you grow.
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

/* ---------------- Contact (updated with email button) ---------------- */
function Contact() {
  const onSubmit = (e) => {
    e.preventDefault();
    // No backend yet — you can hook this up to your form service later.
    alert("Thanks! We’ll be in touch shortly.");
  };

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

          {/* Inline direct email link */}
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

        <form onSubmit={onSubmit} className="mt-10 grid gap-4 max-w-xl mx-auto">
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
          <button type="submit" className="btn btn-primary">Send</button>
        </form>

        {/* Email button with prefilled subject/body */}
        <div className="mt-6 text-center">
          <a href={MAILTO_LINK} className="btn btn-ghost">
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
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
