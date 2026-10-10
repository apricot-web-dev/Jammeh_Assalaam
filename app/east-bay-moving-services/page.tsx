import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl, business, socialImage } from "../../lib/site";

const title = "East Bay Moving Services & Service Areas";
const description =
  "Moving in Berkeley, Oakland or the East Bay? Explore local moving and packing help, service areas, and what to prepare. Call (415) 940-5405.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/east-bay-moving-services" },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
    siteName: business.name,
    url: "/east-bay-moving-services",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [socialImage],
  },
};
const areas = [
  {
    title: "Berkeley, Oakland & Emeryville",
    text: "For an apartment or condo move, ask your building about elevator reservations, loading access, and move-in hours. Include the floor, number of stair flights, and distance from the entrance to the truck in your plan. For homes with steep driveways or narrow approaches, describe access before deciding on a moving-day setup.",
  },
  {
    title: "Alameda, San Leandro, Hayward & Fremont",
    text: "For a house or townhouse move, include garage items, outdoor furniture, and anything going to a separate destination. Confirm parking at both homes and share any community loading restrictions. If you are moving between cities, give both addresses when discussing the route and timing.",
  },
  {
    title: "Richmond & El Cerrito",
    text: "Walk the route from each room to the loading area. Note exterior steps, gates, tight turns, and larger pieces that may need disassembly. Share these details when discussing the scope so access at both your current and new home is part of the plan.",
  },
  {
    title: "Walnut Creek, Concord & San Ramon",
    text: "For a move within Contra Costa County or across the East Bay, start with an inventory and your preferred date. If your new home is in a managed building or community, check its moving hours and access requirements. Include family routines and any flexibility in your schedule.",
  },
];
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": absoluteUrl("/east-bay-moving-services#service"),
      name: "East Bay moving services",
      serviceType: ["Local moving", "Packing and moving help"],
      description,
      url: absoluteUrl("/east-bay-moving-services"),
      provider: {
        "@type": "MovingCompany",
        "@id": absoluteUrl("/#business"),
        name: business.name,
        telephone: business.phone,
        url: absoluteUrl("/"),
      },
      areaServed: business.cities.map((name) => ({
        "@type": "City",
        name: `${name}, California`,
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: absoluteUrl("/"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "East Bay moving services",
          item: absoluteUrl("/east-bay-moving-services"),
        },
      ],
    },
  ],
};
export default function EastBayServices() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="announcement">
        Rooted in Berkeley. Moving with care across the East Bay.
        <span>Muslim-owned · Veteran-led</span>
      </div>
      <header className="guide-header">
        <Link
          className="brand"
          href="/"
          aria-label="Jammeh AsSalaam Moving home"
        >
          <span className="brand-lockup">
            <span className="brand-top">JAMMEH ASSALAAM</span>
            <span className="brand-moving">MOVING</span>
            <span className="brand-arabic" lang="ar" dir="rtl">
              السلام
            </span>
          </span>
        </Link>
        <Link className="guide-home" href="/">
          Home
        </Link>
        <a className="button small header-cta" href="tel:+14159405405">
          Call (415) 940-5405
        </a>
      </header>
      <main id="main-content" className="service-guide">
        <section className="section guide-hero">
          <nav aria-label="Breadcrumb" className="breadcrumbs">
            <Link href="/">Home</Link>
            <span aria-hidden="true"> / </span>
            <span>East Bay moving services</span>
          </nav>
          <div className="eyebrow">LOCAL KNOWLEDGE. THOUGHTFUL PLANNING.</div>
          <h1>
            East Bay moving services.
            <br />
            <em>Start with a clear plan.</em>
          </h1>
          <p>
            Jammeh AsSalaam Moving is a Muslim-owned, veteran-led moving
            business based in Berkeley. Planning a move in Oakland, Alameda, or
            a nearby East Bay city? Explore local moving and packing support,
            then call to discuss your route, timing, and availability.
          </p>
          <div className="hero-actions">
            <a className="button" href="tel:+14159405405">
              Discuss your move: (415) 940-5405
            </a>
            <Link className="text-link" href="/#contact">
              Contact us about your move
            </Link>
          </div>
        </section>
        <section
          className="section guide-support"
          aria-labelledby="support-heading"
        >
          <div className="eyebrow">THE RIGHT HELP FOR YOUR HOME</div>
          <h2 id="support-heading">Moving support, shaped around you.</h2>
          <div className="guide-grid">
            <article id="local-moving">
              <h3>Local home &amp; apartment moving</h3>
              <p>
                Whether you are moving a studio, an apartment, or a family home,
                begin with your inventory and access details. Stairs, elevators,
                parking, and bulky furniture all belong in the conversation.
                Agree on the work, timing, and written estimate before moving
                day.
              </p>
            </article>
            <article id="packing-help">
              <h3>Packing, loading &amp; unloading help</h3>
              <p>
                Discuss help preparing fragile belongings, organizing boxes, or
                loading and unloading a truck you arrange. Specify which rooms
                need packing, which supplies you already have, and what you
                prefer to handle yourself. Confirm the support and materials
                included before booking.
              </p>
            </article>
          </div>
          <p className="guide-note">
            Moving out of California?{" "}
            <Link href="/#contact">Contact us about your cross-country move</Link>,
            {" "}then discuss your route by phone. Carrier arrangements,
            availability, and delivery terms need to be confirmed before booking.
          </p>
        </section>
        <section className="section" aria-labelledby="areas-heading">
          <div className="eyebrow">ALAMEDA &amp; CONTRA COSTA COUNTIES</div>
          <h2 id="areas-heading">Where are you moving?</h2>
          <p className="guide-lead">
            These East Bay cities are part of our local move-planning area. Call
            with your pickup and destination to confirm service availability for
            your date.
          </p>
          <div className="guide-grid">
            {areas.map((area) => (
              <article key={area.title}>
                <h3>{area.title}</h3>
                <p>{area.text}</p>
              </article>
            ))}
          </div>
        </section>
        <section
          className="section guide-support"
          aria-labelledby="checklist-heading"
        >
          <div className="eyebrow">BEFORE YOU CALL</div>
          <h2 id="checklist-heading">
            Five details for a useful moving conversation.
          </h2>
          <ol className="moving-checklist">
            <li>
              <strong>Your route and date.</strong> Share your pickup city,
              destination, preferred date, and any flexibility.
            </li>
            <li>
              <strong>Your home and inventory.</strong> Include the number of
              rooms, large furniture, fragile items, and anything in storage.
            </li>
            <li>
              <strong>Access at both addresses.</strong> Note stairs, elevators,
              parking, long carries, and building rules. Ask your property
              manager about any required loading arrangements.
            </li>
            <li>
              <strong>The help you want.</strong> Describe your packing,
              furniture preparation, loading, and unloading needs.
            </li>
            <li>
              <strong>Your household preferences.</strong> Tell us about prayer
              times, privacy, family routines, and belongings you will move
              yourself.
            </li>
          </ol>
          <Link className="text-link" href="/#contact">
            Contact us with these details →
          </Link>
        </section>
        <section
          className="section guide-questions"
          aria-labelledby="questions-heading"
        >
          <h2 id="questions-heading">Questions about your East Bay move.</h2>
          <details>
            <summary>How much will my move cost?</summary>
            <p>
              The cost depends on inventory, distance, access, packing needs,
              and timing. This site does not provide an instant quote. Call
              (415) 940-5405 to discuss the scope and ask for a written estimate
              before booking.
            </p>
          </details>
          <details>
            <summary>Can I plan a small apartment move?</summary>
            <p>
              Yes. Tell us your home size, stairs, elevator access, and parking
              when you contact us so the discussion reflects the work your
              apartment requires.
            </p>
          </details>
          <details>
            <summary>Do I need to be Muslim to use your services?</summary>
            <p>
              No. Every neighbor is welcome. The business is built with Muslim
              families’ needs in mind, and the same respect extends to people of
              every faith and background.
            </p>
          </details>
          <details>
            <summary>Is my move booked when I contact you?</summary>
            <p>
              No. Contacting us starts the conversation; it does not reserve a
              date. We&apos;ll confirm availability and arrangements with you before
              booking.
            </p>
          </details>
        </section>
        <section className="closing">
          <span>YOUR NEXT CHAPTER IN THE EAST BAY</span>
          <h2>
            Let’s talk about
            <br />
            your move.
          </h2>
          <a className="button gold" href="tel:+14159405405">
            Call (415) 940-5405
          </a>
        </section>
      </main>
      <footer className="guide-footer">
        <Link className="text-link" href="/">
          Jammeh AsSalaam Moving
        </Link>
        <p>
          Berkeley, California · Muslim-owned · Veteran-led
          <br />
          Everyone welcome.
        </p>
        <a href="tel:+14159405405">(415) 940-5405</a>
        <div className="footer-bottom">
          <span>© 2026 Jammeh AsSalaam Moving</span>
          <span>Business launch preview · Confirm availability by phone</span>
        </div>
      </footer>
    </>
  );
}
