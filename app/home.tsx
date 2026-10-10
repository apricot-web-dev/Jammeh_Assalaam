"use client";
import Image from "next/image";
import { useState } from "react";
import MovePlanner from "./move-planner";
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  return (
    <>
      <div className="announcement">
        Rooted in the East Bay. Ready for your next chapter.
        <span>Muslim-owned · Veteran-led</span>
      </div>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header>
        <a className="brand" href="#">
          <span className="brand-lockup">
            <span className="brand-top">JAMMEH ASSALAAM</span>
            <span className="brand-moving">MOVING</span>
            <span className="brand-arabic" lang="ar" dir="rtl">
              السلام
            </span>
          </span>
        </a>
        <nav
          className={menuOpen ? "nav mobile-open" : "nav"}
          onClick={() => setMenuOpen(false)}
          aria-label="Main navigation"
        >
          <a href="#services">Services</a>
          <a href="#values">Our values</a>
          <a href="#story">Our story</a>
          <a href="#area">Service area</a>
        </nav>
        <a className="button small header-cta" href="tel:+14159405405">
          Call (415) 940-5405
        </a>
        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>
        </button>
      </header>
      <main id="main-content">
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="line"></span> YOUR EAST BAY MOVING NEIGHBOR
            </div>
            <h1>
              East Bay moving.
              <br />A peaceful <em>beginning.</em>
            </h1>
            <p>
              Based in Berkeley, Jammeh AsSalaam Moving helps you plan local
              moves in Oakland, Alameda, Emeryville, and across the East Bay.
              Moving and packing support built around your home, your family,
              and what matters to you.
            </p>
            <div className="hero-actions">
              <a className="button" href="#plan">
                Let’s plan your move{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-truck"
                >
                  <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                  <path d="M15 18H9"></path>
                  <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                  <circle cx="17" cy="18" r="2"></circle>
                  <circle cx="7" cy="18" r="2"></circle>
                </svg>
              </a>
              <a className="text-link" href="tel:+14159405405">
                Call (415) 940-5405
              </a>
            </div>
            <div className="hero-note">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-shield-check"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>{" "}
              Muslim-owned. Veteran-led. Everyone welcome.
            </div>
          </div>
          <div className="hero-image">
            <Image
              src="/bubacarr-hero-portrait.png"
              fill
              sizes="(max-width: 1100px) 88vw, 44vw"
              preload
              alt="Bubacarr Jammeh, founder of Jammeh AsSalaam Moving"
            />
            <div className="image-caption">
              <span className="caption-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-map-pin"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </span>
              <span>
                From the East Bay,
                <br />
                <strong>to wherever home is next.</strong>
              </span>
            </div>
            <span className="image-label">A NEW CHAPTER STARTS HERE</span>
          </div>
        </section>
        <div className="trust-strip">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-heart-handshake"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
              <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"></path>
              <path d="m18 15-2-2"></path>
              <path d="m15 18-2-2"></path>
            </svg>{" "}
            Respect for your home
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-clipboard-list"
            >
              <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
              <path d="M12 11h4"></path>
              <path d="M12 16h4"></path>
              <path d="M8 11h.01"></path>
              <path d="M8 16h.01"></path>
            </svg>{" "}
            Clear plans &amp; expectations
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-package-check"
            >
              <path d="m16 16 2 2 4-4"></path>
              <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"></path>
              <path d="m7.5 4.27 9 5.15"></path>
              <polyline points="3.29 7 12 12 20.71 7"></polyline>
              <line x1="12" x2="12" y1="22" y2="12"></line>
            </svg>{" "}
            Care for your belongings
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-map-pin"
            >
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>{" "}
            Berkeley &amp; the East Bay
          </span>
        </div>
        <section className="section" id="services">
          <div className="section-heading">
            <div>
              <div className="eyebrow">01 / HOW WE CAN HELP</div>
              <h2>
                East Bay moving services.
                <br />A little less heavy.
              </h2>
            </div>
            <p>
              Local moving, packing help, or a move to another state: start with
              the support that fits yours. Call (415) 940-5405 to discuss
              availability.
            </p>
          </div>
          <div className="services">
            <article className="service">
              <div className="service-top">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-truck"
                >
                  <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                  <path d="M15 18H9"></path>
                  <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                  <circle cx="17" cy="18" r="2"></circle>
                  <circle cx="7" cy="18" r="2"></circle>
                </svg>
                <span>01</span>
              </div>
              <h3>Local home &amp; apartment moving</h3>
              <strong>A new address. The same community.</strong>
              <p>
                From a Berkeley apartment to a family home in Fremont.
                Thoughtful planning for stairs, parking, and everything in
                between.
              </p>
              <a href="#plan">
                Plan this move{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-plus"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
              </a>
            </article>
            <article className="service">
              <div className="service-top">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-compass"
                >
                  <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path>
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
                <span>02</span>
              </div>
              <h3>Cross-country moves</h3>
              <strong>A fresh start, a little farther away.</strong>
              <p>
                Planning an interstate move? Start with your route, inventory,
                and timing. Carrier arrangements and availability are confirmed
                before booking.
              </p>
              <a href="#plan">
                Plan this move{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-plus"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
              </a>
            </article>
            <article className="service">
              <div className="service-top">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-box"
                >
                  <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
                  <path d="m3.3 7 8.7 5 8.7-5"></path>
                  <path d="M12 22V12"></path>
                </svg>
                <span>03</span>
              </div>
              <h3>Packing &amp; moving help</h3>
              <strong>A little help goes a long way.</strong>
              <p>
                Organize fragile belongings, prepare your home, or plan loading
                and unloading support for a truck you arrange.
              </p>
              <a href="#plan">
                Plan this move{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-plus"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
              </a>
            </article>
          </div>
        </section>
        <section className="values section" id="values">
          <div className="value-intro">
            <div className="eyebrow">02 / OUR WAY OF MOVING</div>
            <h2>
              Your home.
              <br />
              Your values.
              <br />
              <em>Our respect.</em>
            </h2>
            <p>
              Trust is earned in the small things: listening before lifting,
              asking before entering, and treating your belongings with care.
            </p>
            <span className="value-seal">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-heart-handshake"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"></path>
                <path d="m18 15-2-2"></path>
                <path d="m15 18-2-2"></path>
              </svg>{" "}
              Built on amanah — trust and responsibility.
            </span>
          </div>
          <div className="values-list">
            <div className="value-row">
              <span>01</span>
              <div>
                <h3>A home is more than an address</h3>
                <p>
                  Private spaces, prayer essentials, family keepsakes. Tell us
                  what needs extra care and what you prefer to handle yourself.
                </p>
              </div>
            </div>
            <div className="value-row">
              <span>02</span>
              <div>
                <h3>A schedule that understands your day</h3>
                <p>
                  Let’s discuss prayer times, Jumu’ah, and family routines when
                  planning, so moving day works around the things that matter.
                </p>
              </div>
            </div>
            <div className="value-row">
              <span>03</span>
              <div>
                <h3>Clear words. Clear expectations.</h3>
                <p>
                  Agree on the scope, access, timing, and written estimate
                  before moving day. Ask questions. You deserve answers.
                </p>
              </div>
            </div>
            <div className="value-row">
              <span>04</span>
              <div>
                <h3>Neighbors of every background</h3>
                <p>
                  Muslim families are at the heart of our vision. Every neighbor
                  is welcome, with the same care and respect.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="story section" id="story">
          <div className="story-card">
            <Image
              src="/bubacarr-jammeh-founder.png"
              fill
              sizes="(max-width: 900px) 88vw, 34vw"
              alt="Bubacarr Jammeh, founder of Jammeh AsSalaam Moving"
              className="founder-photo"
            />
            <div className="founder-label">MEET THE FOUNDER</div>
            <div className="story-tags">
              <span>U.S. Army veteran</span>
              <span>Berkeley neighbor</span>
            </div>
          </div>
          <div className="story-copy">
            <div className="eyebrow">03 / A PERSONAL REASON TO CARE</div>
            <h2>
              I know what it means
              <br />
              to build a new home.
            </h2>
            <p>
              I’m Bubacarr Jammeh. I came to the United States from The Gambia
              in 2006. After ten years serving in the U.S. Army, I now call
              Berkeley home.
            </p>
            <p>
              My hands-on experience moving families in the Bay Area inspired a
              simple vision: a moving business where people feel understood,
              their homes are respected, and trust comes first.
            </p>
            <p>
              As a Muslim, a father, and an immigrant, I understand that a move
              carries more than boxes. It carries your next chapter.
            </p>
            <div className="signature">
              Bubacarr Jammeh<span>Founder, Jammeh AsSalaam Moving</span>
            </div>
          </div>
        </section>
        <section className="area section" id="area">
          <div>
            <div className="eyebrow">
              04 / CLOSE TO HOME. OPEN TO WHAT’S NEXT.
            </div>
            <h2>
              East Bay roots.
              <br />
              New horizons.
            </h2>
            <p>
              Planning a move in Alameda County or Contra Costa County? Start
              with your pickup and destination cities below. Cross-country
              routes are discussed individually.
            </p>
            <div className="cities">
              <span>Berkeley</span>
              <span>Oakland</span>
              <span>Emeryville</span>
              <span>Alameda</span>
              <span>Richmond</span>
              <span>El Cerrito</span>
              <span>Fremont</span>
              <span>Hayward</span>
              <span>San Leandro</span>
              <span>Walnut Creek</span>
              <span>Concord</span>
              <span>San Ramon</span>
            </div>
            <a href="/east-bay-moving-services" className="text-link">
              Explore East Bay service areas &amp; moving tips →
            </a>
          </div>
          <div className="route-card">
            <span className="route-kicker">YOUR NEXT CHAPTER</span>
            <div className="route-line">
              <span className="route-point">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-map-pin"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </span>
              <div></div>
              <span className="route-point">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-truck"
                >
                  <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                  <path d="M15 18H9"></path>
                  <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                  <circle cx="17" cy="18" r="2"></circle>
                  <circle cx="7" cy="18" r="2"></circle>
                </svg>
              </span>
            </div>
            <div className="route-labels">
              <span>
                EAST BAY<strong>Home today</strong>
              </span>
              <span>
                YOUR DESTINATION<strong>Home tomorrow</strong>
              </span>
            </div>
            <p>
              One neighborhood over.
              <br />
              Or a whole new beginning.
            </p>
            <span className="route-foot">
              LOCAL &amp; CROSS-COUNTRY PLANNING
            </span>
          </div>
        </section>
        <section className="planner section" id="plan">
          <div className="plan-intro">
            <div className="eyebrow">05 / LET’S START WITH A PLAN</div>
            <h2>
              Tell us where
              <br />
              life is taking you.
            </h2>
            <p>
              Get your move details in one place. Create a summary to keep handy
              when discussing your move.
            </p>
            <ul>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-check"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>{" "}
                Your route and preferred date
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-check"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>{" "}
                Your home and packing needs
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-check"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>{" "}
                Your family’s preferences
              </li>
            </ul>
            <p className="plan-note">
              No payment. No reservation. Your details stay in this page and are
              not sent. To discuss availability,{" "}
              <a href="tel:+14159405405">call (415) 940-5405</a>.
            </p>
          </div>
          <div className="form-card">
            <MovePlanner />
          </div>
        </section>
        <section className="faq section" id="faq">
          <div>
            <div className="eyebrow">A FEW HELPFUL ANSWERS</div>
            <h2>
              Before the
              <br />
              first box.
            </h2>
          </div>
          <div className="faq-list">
            <div className="faq-item">
              <h3>
                <button
                  aria-expanded={openFaq === 0}
                  aria-controls="answer-0"
                  onClick={() => setOpenFaq(openFaq === 0 ? null : 0)}
                >
                  Do you only serve Muslim customers?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-plus"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                </button>
              </h3>
              <div id="answer-0" hidden={openFaq !== 0}>
                <p>
                  Everyone is welcome. This business is built with the needs of
                  Muslim families in mind, and the same respect and care extend
                  to neighbors of every faith and background.
                </p>
              </div>
            </div>
            <div className="faq-item">
              <h3>
                <button
                  aria-expanded={openFaq === 1}
                  aria-controls="answer-1"
                  onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
                >
                  Can we discuss prayer times and household privacy?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-plus"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                </button>
              </h3>
              <div id="answer-1" hidden={openFaq !== 1}>
                <p>
                  Absolutely. Add your preferences to your move plan, including
                  prayer breaks, private rooms, shoe-cover preferences, and
                  items you would like to handle yourself. Arrangements should
                  be agreed before moving day.
                </p>
              </div>
            </div>
            <div className="faq-item">
              <h3>
                <button
                  aria-expanded={openFaq === 2}
                  aria-controls="answer-2"
                  onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
                >
                  How is a move priced?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-plus"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                </button>
              </h3>
              <div id="answer-2" hidden={openFaq !== 2}>
                <p>
                  A written estimate should reflect your inventory, distance,
                  access, packing needs, and timing. This site does not offer an
                  instant price or take a deposit. Pricing and available
                  services are confirmed directly before booking.
                </p>
              </div>
            </div>
            <div className="faq-item">
              <h3>
                <button
                  aria-expanded={openFaq === 3}
                  aria-controls="answer-3"
                  onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
                >
                  Can I plan a move to another state?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-plus"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                </button>
              </h3>
              <div id="answer-3" hidden={openFaq !== 3}>
                <p>
                  Yes. Choose cross-country in the planner and enter your
                  destination. The route, carrier, authorization, delivery
                  window, and terms need to be confirmed before any interstate
                  move is booked.
                </p>
              </div>
            </div>
            <div className="faq-item">
              <h3>
                <button
                  aria-expanded={openFaq === 4}
                  aria-controls="answer-4"
                  onClick={() => setOpenFaq(openFaq === 4 ? null : 4)}
                >
                  Does the planner book my move?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-plus"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                </button>
              </h3>
              <div id="answer-4" hidden={openFaq !== 4}>
                <p>
                  No. It creates a move summary you can copy or download. It
                  does not send your information, reserve a date, or charge you.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="closing">
          <span>YOUR NEXT CHAPTER</span>
          <h2>
            Let’s make room
            <br />
            for what comes next.
          </h2>
          <a className="button gold" href="#plan">
            Start your move plan{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-truck"
            >
              <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
              <path d="M15 18H9"></path>
              <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
              <circle cx="17" cy="18" r="2"></circle>
              <circle cx="7" cy="18" r="2"></circle>
            </svg>
          </a>
        </section>
      </main>
      <footer>
        <a className="brand" href="#">
          <span className="brand-lockup">
            <span className="brand-top">JAMMEH ASSALAAM</span>
            <span className="brand-moving">MOVING</span>
            <span className="brand-arabic" lang="ar" dir="rtl">
              السلام
            </span>
          </span>
        </a>
        <p>
          A peaceful move. A new beginning.
          <br />
          Muslim-owned · Veteran-led · Everyone welcome.
          <br />
          Based in Berkeley, serving East Bay families.
        </p>
        <div>
          <a href="/east-bay-moving-services">East Bay moving services</a>
          <a href="#story">Our story</a>
          <a href="tel:+14159405405">(415) 940-5405</a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Jammeh AsSalaam Moving</span>
          <span>Berkeley, California · Business launch preview</span>
        </div>
      </footer>
    </>
  );
}
