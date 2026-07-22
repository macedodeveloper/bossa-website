"use client";

import Link from "next/link";

type CardItem = {
  name: string;
  detail: string;
  image?: string;
  video?: string;
};

export const bossaIntro = "Good technology deserves better design. We build it with care, at the pace AI makes possible.";

export const clientList = "Apple, Google, Marriott Hotels, Vercel, JPMorgan, Forrester, FOX, Facebook, 99, NBA, XP Inc, C6 Bank, Brex, and others.";

export const selectedWork: CardItem[] = [
  { name: "Product design", detail: "Interfaces, systems, and products that feel as good as they work.", image: "https://www.bossa.work/_nuxt/nda-01.ua3bU0CJ.png" },
  { name: "AI experience design", detail: "Workflows and tools shaped around the new speed of making.", image: "https://www.bossa.work/_nuxt/mapfry-01.B57pXxUk.png" },
  { name: "Brand systems", detail: "Clear identities that can stretch across product, content, and teams.", image: "https://www.bossa.work/_nuxt/mapfry-02.DsenbU3c.png" },
  { name: "Prototyping", detail: "High-fidelity product thinking before the expensive decisions harden.", image: "https://www.bossa.work/_nuxt/nda-03.C6GdEwKB.png" },
  { name: "Design direction", detail: "Senior critique, taste, and product judgment for ambitious teams.", image: "https://www.bossa.work/_nuxt/nda-04.CBgNQrk5.png" },
  { name: "Launch craft", detail: "The final layer of polish that makes technology easier to trust.", image: "https://www.bossa.work/_nuxt/nda-06.BxZTFW2Q.png" },
];

export const allWork: CardItem[] = [
  ...selectedWork,
  { name: "Product audits", detail: "A sharp read on what is confusing, missing, or slowing people down.", image: "https://www.bossa.work/_nuxt/nda-07.N8SKnqKp.png" },
  { name: "Founding narratives", detail: "The words and interface decisions that make a product legible.", image: "https://www.bossa.work/_nuxt/mapfry-03.KUzu-NMC.png" },
  { name: "Design systems", detail: "Reusable foundations for faster product teams and clearer decisions.", image: "https://www.bossa.work/_nuxt/nda-09.CQ5frJat.png" },
  { name: "Executive prototypes", detail: "Clickable conviction for boards, founders, and product leads.", image: "https://www.bossa.work/_nuxt/cover-mapfry.BkgfZcXe.png" },
  { name: "AI product strategy", detail: "Where automation should help, where it should disappear, and where design must lead.", image: "https://www.bossa.work/_nuxt/mapfry-img-01.uEVlMiXZ.png" },
  { name: "Partner squads", detail: "Small senior teams that move with the focus of a studio and the speed of AI.", image: "https://www.bossa.work/_nuxt/mapfry-img-02.ZqsFuOx_.png" },
];

const thinkingImages = [
  "https://images.unsplash.com/photo-1764588037085-a78240016f8b?auto=format&fit=crop&w=900&q=75",
  "https://images.unsplash.com/photo-1761123261084-53c40fe1e607?auto=format&fit=crop&w=900&q=75",
  "https://images.unsplash.com/photo-1760446410679-2d93cd1c2607?auto=format&fit=crop&w=900&q=75",
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=75",
  "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=900&q=75",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=75",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=75",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=75",
  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=900&q=75",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=75",
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=75",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=75",
];

export const homeThinking: CardItem[] = [
  { name: "Design is the critical edge", detail: "Why taste, care, and judgment matter more as AI accelerates production.", image: thinkingImages[0] },
  { name: "The pace AI makes possible", detail: "Speed is only useful when the product gets clearer, not louder.", image: thinkingImages[1] },
  { name: "Better questions before better screens", detail: "The work before the work: finding what a product actually needs to become.", image: thinkingImages[2] },
  { name: "Care as a product advantage", detail: "Trust is built through hundreds of small decisions users rarely name.", image: thinkingImages[3] },
  { name: "Against meeting-shaped work", detail: "A studio model for building without dragging yesterday’s process into tomorrow.", image: thinkingImages[4] },
  { name: "Function and feeling", detail: "The space between how something works and how it makes someone feel.", image: thinkingImages[5] },
];

export const allThinking: CardItem[] = [
  ...homeThinking,
  { name: "Products shipped too soon", detail: "What gets sacrificed when teams skip the hard question.", image: thinkingImages[6] },
  { name: "Small teams, senior taste", detail: "Why fewer people can mean better momentum.", image: thinkingImages[7] },
  { name: "The new design tempo", detail: "How AI changes production without replacing judgment.", image: thinkingImages[8] },
  { name: "A better interface with ambition", detail: "Making complex technology feel calm, direct, and worth using.", image: thinkingImages[9] },
  { name: "What processes hide", detail: "When ceremonies protect teams from decisions.", image: thinkingImages[10] },
  { name: "Bossa notes", detail: "Observations from the edge of product, brand, and AI.", image: thinkingImages[11] },
];

export function Intro() {
  return (
    <div className="columns intro">
      <div className="col-6 intro-left">
        <Link href="/" aria-label="Start" className="brand">
          <img className="brand-logo" src="/assets/logo_bossa.svg" alt="Bossa" />
        </Link>
        <br />
        <span className="clock">Design Studio</span>
      </div>
      <div className="col-6 intro-right">
        <p>
          {bossaIntro}
        </p>
      </div>
    </div>
  );
}

export function SiteHeader() {
  return (
    <>
      <header>
        <Intro />
      </header>
      <nav className="columns">
        <ul className="col-12">
          {[
            ["Information", "/information"],
            ["Work", "/work"],
            ["Thinking", "/journal"],
          ].map(([label, href]) => (
            <li key={label}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export function Splash() {
  return (
    <div className="splash" aria-hidden="true">
      <Intro />
    </div>
  );
}

export function MediaCard({ item, hiddenAfter }: { item: CardItem; hiddenAfter?: boolean }) {
  return (
    <article className={`col-2 card ${hiddenAfter ? "hide-small" : ""}`}>
      <a href="#" className="media">
        {item.video ? (
          <video loop autoPlay muted playsInline>
            <source src={item.video} type="video/mp4" />
          </video>
        ) : item.image ? (
          <img src={item.image} alt={item.name} />
        ) : (
          <div className="media-type-card" aria-hidden="true">
            <img className="media-card-logo" src="/assets/logo_bossa.svg" alt="" />
          </div>
        )}
      </a>
      <div className="card-info">
        <a href="#" className="detail-title">
          {item.name}
        </a>
        <p>{item.detail}</p>
      </div>
    </article>
  );
}

export function CardGrid({ title, items, type, href }: { title: string; items: CardItem[]; type: "work" | "journal"; href: string }) {
  return (
    <section className={`${type}-row`}>
      <div className="columns section-heading">
        <div className="col-6">
          <h2>{title}</h2>
        </div>
        <div className="col-6 align-link">
          <Link href={href} className="view-all">
            <span>View all</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
      <div className="columns card-grid">
        {items.map((item, index) => (
          <MediaCard item={item} hiddenAfter={index > 5} key={item.name + index} />
        ))}
      </div>
    </section>
  );
}

export function ListingGrid({ items }: { items: CardItem[] }) {
  return (
    <main className="listing-main">
      <div className="columns card-grid listing-grid">
        {items.map((item, index) => (
          <MediaCard item={item} key={item.name + index} />
        ))}
      </div>
    </main>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <div className="columns footer-grid">
        <p className="col-6 label">Credits</p>
        <p className="col-6">
          Product design
          <br />
          AI experience design
          <br />
          Brand systems
          <br />
          Prototyping
        </p>
        <p className="col-6 label">Enquiries</p>
        <p className="col-6">
          <a href="mailto:hello@bossa.design">hello[at]bossa.design</a>
        </p>
        <p className="col-6 label">Social</p>
        <p className="col-6">
          <a href="#">LinkedIn</a>
          <br />
          <a href="#">Instagram</a>
          <br />
          <a href="#">X</a>
        </p>
        <p className="col-6 label">Clients</p>
        <p className="col-6">
          {clientList}
        </p>
      </div>
      <div className="columns footer-bottom">
        <p className="col-12 label">© Bossa Design Studio</p>
      </div>
    </footer>
  );
}

export function SiteShell({ children, splash = false }: { children: React.ReactNode; splash?: boolean }) {
  return (
    <>
      <SiteHeader />
      {children}
      {splash ? <Splash /> : null}
      <SiteFooter />
    </>
  );
}
