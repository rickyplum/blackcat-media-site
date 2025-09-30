// src/App.jsx
import React, { useEffect, useRef, useState } from "react";

/* ---------- Constants ---------- */
const SPOTIFY_EMBED_URL =
  "https://open.spotify.com/embed/show/3i7DxU0YyDnaMVdDrF4fpG?utm_source=generator&theme=0"; // Crime Salad
const CREEPY_SHIT_EMBED_URL =
  "https://open.spotify.com/embed/show/6KQXOXGNkmOJoXO01UOxnO?utm_source=generator&theme=0"; // Creepy Shit
const RESIDUE_EMBED_URL =
  "https://open.spotify.com/embed/show/69rVpBKK6Y8hMnYCCsfw1Y?utm_source=generator&theme=0"; // Residue
const JANE_EMBED_URL =
  "https://open.spotify.com/embed/show/22CbW5HOVlWlZmNJhY7Nrz?utm_source=generator&theme=0"; // She Goes By Jane
const GOODISH_GIRLS_EMBED_URL =
  "https://open.spotify.com/embed/show/6eH1U2DJHxYBnPNSh3ObIM?utm_source=generator&theme=0"; // Good-ish Girls
const MACABRE_EMBED_URL =
  "https://open.spotify.com/embed/show/1xdn2q39kdOVYGAs96OmGd?utm_source=generator&theme=0"; // Macabre Mondays

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
          <a href="#contact" className="hover:underline underline-offset-4">Submit</a>
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
          We help indie podcasters grow, make money, and find their audience without giving up ownership.
        </p>

        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <a href="#join" className="btn btn-primary">Join the Network</a>
          <a href="#contact" className="btn btn-ghost">Submit Your Show</a>
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
            Start with the newest episode, then dig through the back catalog.
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* 1) Crime Salad */}
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
                Victim-focused true crime with Ashley and Ricky.
              </p>
              <div className="mt-4">
                <iframe
                  title="Spotify — Crime Salad"
                  src={SPOTIFY_EMBED_URL}
                  className="embed"
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </div>
              <div className="mt-4">
                <a
                  href="https://open.spotify.com/show/3i7DxU0YyDnaMVdDrF4fpG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Listen on Spotify
                </a>
              </div>
            </div>
          </article>

          {/* 2) Macabre Mondays (moved here) */}
          <article className="card overflow-hidden">
            <div className="block block--lilac p-0">
              <img
                src="/images/macabre-mondays.png"
                alt="Macabre Mondays"
                className="w-full aspect-square object-cover rounded-3xl"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold">Macabre Mondays</h3>
              <p className="text-sm text-ink-600 mt-1">
                True crime & paranormal dives with Alejandra and Thomas Bendel.
              </p>
              <div className="mt-4">
                <iframe
                  title="Spotify — Macabre Mondays"
                  src={MACABRE_EMBED_URL}
                  className="embed"
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </div>
              <div className="mt-4">
                <a
                  href="https://open.spotify.com/show/1xdn2q39kdOVYGAs96OmGd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Listen on Spotify
                </a>
              </div>
            </div>
          </article>

          {/* 3) Creepy Shit */}
          <article className="card overflow-hidden">
            <div className="block block--rose p-0">
              <img
                src="/images/creepyshit.jpg"
                alt="Creepy Shit"
                className="w-full aspect-square object-cover rounded-3xl"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold">Creepy Shit</h3>
              <p className="text-sm text-ink-600 mt-1">
                True hauntings, folklore, and essential knowledge from the shadows.
              </p>
              <div className="mt-4">
                <iframe
                  title="Spotify — Creepy Shit"
                  src={CREEPY_SHIT_EMBED_URL}
                  className="embed"
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </div>
              <div className="mt-4">
                <a
                  href="https://open.spotify.com/show/6KQXOXGNkmOJoXO01UOxnO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Listen on Spotify
                </a>
              </div>
            </div>
          </article>

          {/* 4) Residue */}
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
                What’s left behind after the headlines fade.
              </p>
              <div className="mt-4">
                <iframe
                  title="Spotify — Residue"
                  src={RESIDUE_EMBED_URL}
                  className="embed"
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </div>
              <div className="mt-4">
                <a
                  href="https://open.spotify.com/show/69rVpBKK6Y8hMnYCCsfw1Y"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Listen on Spotify
                </a>
              </div>
            </div>
          </article>

          {/* 5) She Goes By Jane */}
          <article className="card overflow-hidden">
            <div className="block block--rose p-0">
              <img
                src="/images/she-goes-by-jane-art.jpg"
                alt="She Goes By Jane"
                className="w-full aspect-square object-cover rounded-3xl"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold">She Goes By Jane</h3>
              <p className="text-sm text-ink-600 mt-1">
                Unresolved stories of missing and murdered women.
              </p>
              <div className="mt-4">
                <iframe
                  title="Spotify — She Goes By Jane"
                  src={JANE_EMBED_URL}
                  className="embed"
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </div>
              <div className="mt-4">
                <a
                  href="https://open.spotify.com/show/22CbW5HOVlWlZmNJhY7Nrz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Listen on Spotify
                </a>
              </div>
            </div>
          </article>

          {/* 6) Good-ish Girls */}
          <article className="card overflow-hidden">
            <div className="block block--mint p-0">
              <img
                src="/images/goodishgirls.jpg"
                alt="Good-ish Girls"
                className="w-full aspect-square object-cover rounded-3xl"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold">Good-ish Girls</h3>
              <p className="text-sm text-ink-600 mt-1">
                Three friends dive into stories, laughs, and everything in between.
              </p>
              <div className="mt-4">
                <iframe
                  title="Spotify — Good-ish Girls"
                  src={GOODISH_GIRLS_EMBED_URL}
                  className="embed"
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </div>
              <div className="mt-4">
                <a
                  href="https://open.spotify.com/show/6eH1U2DJHxYBnPNSh3ObIM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Listen on Spotify
                </a>
              </div>
            </div>
          </article>

          {/* 7) Work with us */}
          <article className="card overflow-hidden">
            <div className="block block--mint p-0">
              <div className="aspect-square rounded-3xl bg-white/50 flex items-center justify-center text-lg font-semibold text-ink-600">
                Join Us
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold">Work with us</h3>
              <p className="text-sm text-ink-600 mt-1">
                Launch a podcast or move an existing show. Grow with BLACKCAT.
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

/* ---------------- About ---------------- */
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
        </header>

        <div className="hero-accent mt-5 mx-auto" aria-hidden="true" />

        <p className="lead mt-6 max-w-3xl mx-auto">
          BLACKCAT is a small, friendly network for independent shows. We cover hosting and ad tools, and we help with growth and community. You keep full ownership of your work.
        </p>

        <div className="mt-10 max-w-5xl mx-auto">
          <h3 className="text-lg font-semibold mb-4">Why creators join</h3>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
            <Feature title="80% revenue to podcasters">
              A better split than the usual big-network cut.
            </Feature>

            <Feature title="Flexible 3-month agreements">
              Short terms that respect your independence.
            </Feature>

            <Feature title="Free hosting on Art19">
              Solid analytics and dynamic ad tools with no extra platform fees.
            </Feature>

            <Feature title="Net-30 payments">
              Direct deposit on a regular schedule.
            </Feature>

            <Feature title="You keep your IP">
              Full control. Your show stays yours.
            </Feature>

            <Feature title="Indie spirit">
              Real people who answer fast and treat you like a partner.
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
      <p className="mt-3 text-sm leading-relaxed text-ink-700">{children}</p>
    </div>
  );
}

/* ---------------- How It Works ---------------- */
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
          <Step n="1" title="Host for free">
            We set you up on Art19 with analytics, dynamic ad controls, and your own login.
          </Step>
          <Step n="2" title="Turn on monetization">
            Start with programmatic ads so you earn while you grow.
          </Step>
          <Step n="3" title="Grow together">
            Cross-promos inside the network help new listeners find you.
          </Step>
          <Step n="4" title="Get support">
            We help with migrations, ad setup, best practices, and a private community space.
          </Step>
        </div>
      </div>
    </section>
  );
}

/* --------------- Join the Network --------------- */
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
            <h3 className="text-lg font-semibold">Our approach</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-700">
              No IP grabs. No long contracts. No forced branding. BLACKCAT exists to:
            </p>
            <ul className="mt-3 list-disc pl-5 text-sm leading-relaxed text-ink-700 space-y-2 marker:text-ink-300">
              <li>Help creators keep control of their work.</li>
              <li>Grow through collaboration, not competition.</li>
              <li>Build steady, sustainable momentum.</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white/95 ring-1 ring-black/10 shadow-[0_2px_12px_rgba(0,0,0,0.06)] p-6">
            <h3 className="text-lg font-semibold">What’s ahead</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-700">
              We’re working toward originals and bigger sales partnerships. Today we’re focused on community, growth, and fair terms.
            </p>
            <ul className="mt-3 list-disc pl-5 text-sm leading-relaxed text-ink-700 space-y-2 marker:text-ink-300">
              <li>Original productions on the roadmap.</li>
              <li>Partner sales to lift fill and CPM.</li>
              <li>Always creator-first deals.</li>
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
            Questions, answered
          </h2>
          <p className="lead mt-3">
            Here’s the quick version of how BLACKCAT works with creators and partners.
          </p>
        </header>

        <div className="mt-10 faq grid gap-3 max-w-3xl mx-auto">
          <details className="faq-item group">
            <summary className="faq-summary">
              <span>What is BLACKCAT?</span>
              <svg className="faq-caret" viewBox="0 0 24 24" fill="none">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </summary>
            <div className="faq-content">
              A small audio network that helps good shows grow. We support the pods people actually recommend, and we help brands join in with thoughtful host-read ads.
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
              No minimum required. For context, shows under about 50k monthly impressions see lighter direct demand, but we can still monetize with programmatic and help you grow.
            </div>
          </details>

          <details className="faq-item group">
            <summary className="faq-summary">
              <span>What’s BLACKCAT’s cut?</span>
              <svg className="faq-caret" viewBox="0 0 24 24" fill="none">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </summary>
            <div className="faq-content">
              In most cases, 20–25%. Clear and lean compared to big networks.
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
              Art19. You get analytics, dynamic ad insertion, and reliable delivery with no extra platform fees.
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
              No. We just ask for 60 days’ notice so we can wrap any campaigns, then you’re free to go.
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
              Every month on a regular schedule. No chasing. No surprises.
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
              It depends on your show. Programmatic can start almost right away. Direct, host-read campaigns usually take a few weeks while we pitch and line up creative. We map your timeline during onboarding so you know what to expect.
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
              <a href="#contact" className="underline">Send a quick intro</a>. Tell us about your show, audience, and goals. We’ll reply with next steps.
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact (Creator submissions) ---------------- */
function Contact() {
  const sent =
    typeof window !== "undefined" &&
    (window.location.hash.includes("sent=1") || window.location.search.includes("sent=1"));

  return (
    <section id="contact" className="section">
      <div className="container-max">
        <header className="section-head">
          <p className="kicker">Submit Your Show</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-2 title-gradient">
            Join BLACKCAT as a Creator
          </h2>
        </header>

        <p className="lead mt-3 text-center max-w-2xl mx-auto">
          Tell us about your podcast. We review every submission and reply quickly with next steps.
        </p>
        <p className="mt-4 text-sm text-ink-600 text-center">
          Prefer email?{" "}
          <a
            href="mailto:contact@blackcat.fm?subject=Show%20Submission%20to%20BLACKCAT"
            className="font-semibold underline underline-offset-4 hover:no-underline"
          >
            contact@blackcat.fm
          </a>
        </p>

        {sent && (
          <div className="mt-6 mx-auto max-w-xl rounded-xl border border-black/10 bg-white p-4 text-sm text-ink-700 shadow-sm">
            Thanks! Your show submission was received. We’ll follow up shortly.
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
            type="email"
            placeholder="Email"
            name="email"
            required
          />
          <input
            className="h-11 px-4 rounded-xl bg-white border border-black/10 shadow-sm"
            placeholder="Show title"
            name="show_title"
            required
          />
          <input
            className="h-11 px-4 rounded-xl bg-white border border-black/10 shadow-sm"
            placeholder="RSS feed or Spotify/Apple link"
            name="rss_or_link"
            required
          />
          <input
            className="h-11 px-4 rounded-xl bg-white border border-black/10 shadow-sm"
            placeholder="Average monthly downloads (approx)"
            name="downloads"
          />
          <input
            className="h-11 px-4 rounded-xl bg-white border border-black/10 shadow-sm"
            placeholder="Primary genre (e.g., True Crime, History)"
            name="genre"
          />
          <textarea
            className="min-h-[140px] px-4 py-3 rounded-xl bg-white border border-black/10 shadow-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-black/20"
            placeholder="Tell us about your audience, goals, and why BLACKCAT is a fit."
            name="message"
            required
          />

          <input type="hidden" name="_subject" value="Show Submission — BLACKCAT" />
          <input type="hidden" name="_redirect" value="https://blackcat.fm/#contact?sent=1" />
          <input type="text" name="_gotcha" className="hidden" tabIndex="-1" autoComplete="off" />

          <button type="submit" className="btn btn-primary">Submit Show</button>
        </form>
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
