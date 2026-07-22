"use client";

import { CardGrid, SiteShell, bossaHeroIntro, clientLogos, homeThinking, homeWork } from "./idc";

const testimonials = [
  {
    quote:
      "Bossa helped us turn a complex methodology into something lightweight, intuitive, and easy to adopt. That shift changed how users engaged with the product almost immediately.",
    source: "Joao, Founder at Mapfry",
  },
  {
    quote:
      "Bossa quickly understood our product, delivered exceptional design quality, and brought valuable insights that shaped both the experience and visual direction.",
    source: "Vinicius, Founder at Anaclara",
  },
  {
    quote:
      "Bossa brought a strong mix of UX thinking, product strategy, clear journeys, and refined execution. Collaborative, capable, and great to work with throughout the process.",
    source: "Wesley, Design Lead at Questtono",
  },
];

export default function Home() {
  return (
    <SiteShell>
      <main>
        <section className="columns bossa-hero">
          <div className="col-6">
            <p className="label">Bossa</p>
          </div>
          <div className="col-6 bossa-hero-content">
            <h1>{bossaHeroIntro}</h1>
            <figure className="bossa-work-gif" aria-label="Bossa work preview">
              <img src="/assets/bossa-work.gif" alt="Bossa work preview" />
            </figure>
          </div>
        </section>
        <section className="columns bossa-client-strip">
          <div className="col-6">
            <p className="label">Clients</p>
          </div>
          <div className="col-6 client-logo-carousel" aria-label="Selected clients">
            <div className="client-logo-track">
              {[...clientLogos, ...clientLogos].map((client, index) => (
                <span className="client-logo" key={`${client}-${index}`}>
                  {client}
                </span>
              ))}
            </div>
          </div>
        </section>
        <CardGrid title="Work" items={homeWork} type="work" href="/work" />
        <CardGrid title="Thinking" items={homeThinking} type="journal" href="/journal" />
        <section className="columns testimonials-row">
          <div className="col-12">
            <p>Built through real partnerships</p>
          </div>
          {testimonials.map((testimonial) => (
            <figure className="col-3 testimonial-card" key={testimonial.source}>
              <blockquote>
                <p>&quot;{testimonial.quote}&quot;</p>
              </blockquote>
              <figcaption className="muted">{testimonial.source}</figcaption>
            </figure>
          ))}
        </section>
      </main>
    </SiteShell>
  );
}
