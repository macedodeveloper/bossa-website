"use client";

import { CardGrid, SiteShell, bossaIntro, clientList, homeThinking, selectedWork } from "./idc";

export default function Home() {
  return (
    <SiteShell>
      <main>
        <section className="columns bossa-hero">
          <div className="col-6">
            <p className="label">Bossa</p>
          </div>
          <div className="col-6">
            <h1>{bossaIntro}</h1>
          </div>
        </section>
        <section className="columns bossa-work-gif" aria-label="Bossa work preview">
          <div className="col-12">
            <img src="/assets/bossa-work.gif" alt="Bossa work preview" />
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
        <CardGrid title="Work" items={selectedWork} type="work" href="/work" />
        <CardGrid title="Thinking" items={homeThinking} type="journal" href="/journal" />
      </main>
    </SiteShell>
  );
}
