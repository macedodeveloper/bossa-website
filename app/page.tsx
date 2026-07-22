"use client";

import { CardGrid, SiteShell, bossaHeroIntro, clientList, homeThinking, homeWork } from "./idc";

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
          <div className="col-6">
            <p>{clientList}</p>
          </div>
        </section>
        <CardGrid title="Work" items={homeWork} type="work" href="/work" />
        <CardGrid title="Thinking" items={homeThinking} type="journal" href="/journal" />
      </main>
    </SiteShell>
  );
}
