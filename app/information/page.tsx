"use client";

import { SiteShell, clientList } from "../idc";

const crew = [
  {
    name: "Leandro Macedo",
    role: "Partner / Designer",
    image: "/assets/crew-leandro.png",
  },
  {
    name: "Gustavo Dornelles",
    role: "Partner / Strategist",
    image: "/assets/crew-gustavo.png",
  },
  {
    name: "Lucas Cruz",
    role: "Partner / Designer",
    image: "/assets/crew-lucas.png",
  },
  {
    name: "Fernanda Macedo",
    role: "Designer",
    image: "/assets/crew-fernanda.png",
  },
];

function InfoRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="columns info-row">
      <div className="col-1 offset-5 info-label">
        <p>{label}</p>
      </div>
      <div className="col-6 info-content">{children}</div>
    </section>
  );
}

export default function InformationPage() {
  return (
    <SiteShell>
      <main className="info-main">
        <InfoRow label="About us">
          <div className="flow">
            <p className="type-heading-large">Design is how the world moves forward.</p>
            <p>We started Bossa because we kept seeing the same problem. Good money spent on processes built for another era. Meetings that existed to schedule more meetings. Products shipped before anyone asked the hard question: does this actually work for the person using it?</p>
            <p>We believe design is the critical edge in a world accelerating through AI. Not aesthetics. Not deliverables. The space between how something functions and how it makes you feel.</p>
            <p>That's what we build toward.</p>
          </div>
        </InfoRow>

        <InfoRow label="Clients">
          <p>{clientList}</p>
        </InfoRow>

        <InfoRow label="Offer">
          <div className="flow">
            <p>Product design, AI experience design, brand systems, prototyping, design direction, and launch craft.</p>
            <p>Small senior teams for companies that need better product decisions at the pace modern tools make possible.</p>
          </div>
        </InfoRow>

        <section className="columns crew-intro">
          <div className="col-6">
            <p className="label">The Crew</p>
          </div>
          <div className="col-6 flow">
            <p className="type-heading-large">Four partners. One shared conviction.</p>
            <p>Each of us spent years inside large agencies and global products, long enough to know what those environments get right, and what they consistently sacrifice.</p>
          </div>
        </section>

        <section className="columns crew-list">
          {crew.map((person) => (
            <article className="col-3 crew-member" key={person.name}>
              <img src={person.image} alt={person.name} />
              <div className="crew-member-info">
                <p>{person.name}</p>
                <p className="muted">{person.role}</p>
              </div>
            </article>
          ))}
        </section>
      </main>
    </SiteShell>
  );
}
