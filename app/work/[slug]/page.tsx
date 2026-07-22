"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { SiteShell, allWork } from "../../idc";

type VisualVariant =
  | "dashboard"
  | "modal"
  | "brand"
  | "mobile"
  | "chart"
  | "store"
  | "audit"
  | "sheet"
  | "system"
  | "prototype"
  | "strategy"
  | "squad";

type CaseStudy = {
  context: string;
  role: string;
  team: string;
  challenge: string;
  approach: string[];
  outcome: string;
  stats: string[];
  visuals: {
    title: string;
    note: string;
    variant: VisualVariant;
  }[];
};

const caseStudies: Record<string, CaseStudy> = {
  "product-design": {
    context: "A logistics finance platform needed to turn a dense transaction system into something operations teams could trust at speed.",
    role: "Product strategy, interface design, system patterns.",
    team: "Two Bossa partners with product, engineering, and operations leads.",
    challenge: "The product had the right data, but every workflow asked users to read too much before taking the next action.",
    approach: [
      "We reorganized the product around decision moments: what needs attention, what can wait, and what should be handled automatically.",
      "The interface system reduced competing states into a tighter hierarchy of tables, review drawers, and status language.",
    ],
    outcome: "The team left with a calmer operating surface, a reusable design system, and a roadmap focused on reducing judgment fatigue.",
    stats: ["43% faster review paths", "18 reusable table patterns", "6 critical flows redesigned"],
    visuals: [
      { title: "Operations cockpit", note: "Priority rows, risk states, and review actions brought into one surface.", variant: "dashboard" },
      { title: "Exception drawer", note: "A focused side panel for approvals without leaving the transaction list.", variant: "modal" },
    ],
  },
  "ai-experience-design": {
    context: "A data product was using AI to assemble neighborhood reports, but the generation process felt opaque and hard to audit.",
    role: "AI UX, workflow design, prompt-to-interface translation.",
    team: "Bossa with a founder, data lead, and one full-stack engineer.",
    challenge: "Users needed speed from AI without losing confidence in how each answer was produced.",
    approach: [
      "We mapped the generation pipeline into visible steps, then designed checkpoints where humans could steer the result before export.",
      "The final workflow paired compact AI summaries with source cells, confidence notes, and one-click regeneration controls.",
    ],
    outcome: "The product became easier to sell because the AI felt less like a black box and more like a careful assistant inside the workflow.",
    stats: ["2 minute report setup", "4 validation checkpoints", "12 export-ready templates"],
    visuals: [
      { title: "Generation panel", note: "A clear AI task state that explains what changed and why.", variant: "modal" },
      { title: "Review grid", note: "Generated values stay tied to source evidence and editing controls.", variant: "sheet" },
    ],
  },
  "brand-systems": {
    context: "A venture-backed product group needed a brand system that could stretch from investor decks to product surfaces.",
    role: "Brand architecture, visual language, product expression.",
    team: "One design partner, one strategist, and the founding team.",
    challenge: "The company sounded mature in sales conversations but looked improvised across every product and content touchpoint.",
    approach: [
      "We defined a small set of behaviors for the identity: precise, warm, fast, and quietly technical.",
      "Then we translated those behaviors into motion cues, interface tokens, image direction, and presentation rules.",
    ],
    outcome: "The team gained a brand system that felt coherent without slowing down product shipping or content production.",
    stats: ["28 component rules", "5 launch templates", "1 shared brand language"],
    visuals: [
      { title: "Identity kit", note: "Logo scale, avatar logic, and compact partner marks.", variant: "brand" },
      { title: "Expression system", note: "A product-native palette with usage rules for content and UI.", variant: "system" },
    ],
  },
  "prototyping": {
    context: "A hospitality team wanted to test a premium booking concept before committing product and engineering cycles.",
    role: "High-fidelity prototype, product framing, interaction design.",
    team: "Bossa with strategy, growth, and hotel operations stakeholders.",
    challenge: "The idea looked strong in a deck, but no one knew where guest intent would break inside the real mobile flow.",
    approach: [
      "We built a believable prototype around search, room comparison, and concierge-style service moments.",
      "The prototype made tradeoffs visible early: what should be automated, where confidence needed copy, and when a human handoff mattered.",
    ],
    outcome: "Leadership could evaluate the concept through use, not opinion, and engineering received a sharper first build.",
    stats: ["9 mobile flows", "3 guest intents", "1 board-ready prototype"],
    visuals: [
      { title: "Booking prototype", note: "A realistic mobile path for discovery, comparison, and reservation.", variant: "mobile" },
      { title: "Service moments", note: "Concierge prompts designed to feel helpful instead of intrusive.", variant: "prototype" },
    ],
  },
  "design-direction": {
    context: "A revenue analytics company needed senior design direction across dashboards that had grown visually inconsistent.",
    role: "Design direction, critique, dashboard hierarchy.",
    team: "Bossa with product design, data science, and revenue operations.",
    challenge: "The core metrics were powerful, but charts competed with each other and made weekly decisions feel slower than necessary.",
    approach: [
      "We established a stronger visual hierarchy for metric cards, chart emphasis, filters, and comparison states.",
      "A critique rhythm helped the internal team make better calls without waiting for a complete redesign.",
    ],
    outcome: "The analytics experience became more legible, and the team gained principles for shipping future dashboard work.",
    stats: ["11 dashboard rules", "7 chart patterns", "4 critique cycles"],
    visuals: [
      { title: "Metric hierarchy", note: "Volume, trend, and comparison states tuned for quick reading.", variant: "chart" },
      { title: "Decision view", note: "A calmer weekly review surface with fewer competing signals.", variant: "dashboard" },
    ],
  },
  "launch-craft": {
    context: "A connected hardware startup needed its launch experience to make a technical product feel simple and trustworthy.",
    role: "Launch polish, commerce UX, product storytelling.",
    team: "Bossa with founders, hardware, and marketing.",
    challenge: "The product was impressive, but the launch page and purchase flow buried the benefits under technical explanation.",
    approach: [
      "We reframed the product around everyday moments, then rebuilt the path from product detail to checkout around reassurance.",
      "Small interaction, copy, and visual details helped the technology feel more human without making it feel less advanced.",
    ],
    outcome: "The launch system gave the team a polished first impression and a cleaner foundation for future product pages.",
    stats: ["5 commerce states", "3 launch narratives", "1 product story system"],
    visuals: [
      { title: "Product page", note: "A focused commerce surface for a high-consideration device.", variant: "store" },
      { title: "Trust details", note: "Warranty, compatibility, and setup cues placed where doubt appears.", variant: "mobile" },
    ],
  },
  "product-audits": {
    context: "A consumer finance app had strong adoption but rising support noise around account review and card settings.",
    role: "Product audit, UX diagnosis, design recommendations.",
    team: "One Bossa partner with product, support, and research.",
    challenge: "The team had opinions about what was broken, but not a shared picture of what users were actually fighting.",
    approach: [
      "We audited the product through live tasks, support patterns, and interface heuristics, then ranked issues by user harm and effort.",
      "The final readout paired diagnosis with concrete design moves the internal team could ship in sequence.",
    ],
    outcome: "The roadmap shifted from cosmetic clean-up to the small product decisions that were creating the most confusion.",
    stats: ["62 issues mapped", "14 high-impact fixes", "3 priority flows"],
    visuals: [
      { title: "Audit map", note: "Severity, frequency, and fix confidence organized into one product read.", variant: "audit" },
      { title: "Improved account view", note: "The same financial surface rebuilt around explanation and control.", variant: "mobile" },
    ],
  },
  "founding-narratives": {
    context: "A civic data platform needed language and interface structure that made a complex product easier to understand.",
    role: "Narrative strategy, information architecture, product writing.",
    team: "Bossa with the founding CEO and product lead.",
    challenge: "The product could answer valuable questions, but prospects struggled to describe what it did after a demo.",
    approach: [
      "We rewrote the product from the inside out: category, promise, core workflows, and the words that explain each action.",
      "Those decisions became interface labels, landing copy, onboarding sequences, and sales narrative.",
    ],
    outcome: "The company gained a clearer story and a product surface that reinforced the same idea at every step.",
    stats: ["1 category narrative", "34 product labels", "5 demo moments rewritten"],
    visuals: [
      { title: "Narrative grid", note: "Audience, proof, and product language connected to interface moments.", variant: "sheet" },
      { title: "Message system", note: "Short reusable phrases for product, sales, and onboarding.", variant: "system" },
    ],
  },
  "design-systems": {
    context: "A fintech product team needed a system that could support faster shipping without flattening product quality.",
    role: "Design system strategy, component design, governance.",
    team: "Bossa with design systems, product design, and frontend engineering.",
    challenge: "The existing library had components, but not enough judgment about when and why to use them.",
    approach: [
      "We consolidated repeated interface decisions into tokens, patterns, and usage principles.",
      "The system documentation focused on product situations instead of static component inventory.",
    ],
    outcome: "Teams could move faster while making fewer inconsistent decisions across mobile and web surfaces.",
    stats: ["42 components refined", "9 pattern families", "3 contribution rules"],
    visuals: [
      { title: "Component field", note: "Reusable mobile and card patterns organized by product situation.", variant: "system" },
      { title: "Pattern library", note: "States, examples, and decisions documented together.", variant: "dashboard" },
    ],
  },
  "executive-prototypes": {
    context: "A B2B platform needed to align executives around a new product direction before resourcing a full build.",
    role: "Prototype strategy, executive storytelling, interaction design.",
    team: "Bossa with founders, product leadership, and sales.",
    challenge: "The product direction was strategically sound, but the team needed something tangible enough to create conviction.",
    approach: [
      "We turned the strategy into a clickable product story with enough fidelity to expose real questions.",
      "Each prototype moment was tied to a business argument: speed, trust, efficiency, or differentiated product value.",
    ],
    outcome: "The prototype helped the leadership team decide what to fund, what to cut, and what deserved engineering discovery.",
    stats: ["4 executive scenarios", "18 prototype screens", "2 build tracks approved"],
    visuals: [
      { title: "Prototype board", note: "A clickable system of product moments arranged around decision flow.", variant: "prototype" },
      { title: "Leadership view", note: "A tablet-scale experience for presenting product conviction clearly.", variant: "dashboard" },
    ],
  },
  "ai-product-strategy": {
    context: "A marketplace company wanted to use AI, but needed to know where automation would improve the product instead of adding noise.",
    role: "AI product strategy, opportunity mapping, experience principles.",
    team: "Bossa with product, operations, and data teams.",
    challenge: "Every team had AI ideas, but no shared standard for which ideas deserved product investment.",
    approach: [
      "We mapped opportunities by user value, operational leverage, risk, and required trust.",
      "The strongest ideas became product concepts with clear interaction rules and boundaries for human control.",
    ],
    outcome: "The company gained a sharper AI roadmap and fewer speculative features competing for attention.",
    stats: ["31 ideas assessed", "8 product bets", "4 trust principles"],
    visuals: [
      { title: "Opportunity matrix", note: "AI ideas scored by leverage, risk, and user clarity.", variant: "strategy" },
      { title: "Automation boundary", note: "Where the system acts, asks, explains, or hands off.", variant: "modal" },
    ],
  },
  "partner-squads": {
    context: "A product organization needed senior design momentum without adding a large permanent team.",
    role: "Embedded squad, design leadership, product execution.",
    team: "Four-person Bossa squad with internal product and engineering leads.",
    challenge: "The company had ambition and urgency, but too many parallel rituals were slowing actual product judgment.",
    approach: [
      "We created a focused operating model: fewer meetings, clearer weekly decisions, and a tighter path from critique to shipped work.",
      "The squad moved across product strategy, UX, visual design, and prototype production as the work demanded.",
    ],
    outcome: "The internal team gained a faster rhythm and a model for using senior design attention where it mattered most.",
    stats: ["4 senior partners", "6 week sprint model", "2 product tracks shipped"],
    visuals: [
      { title: "Squad rhythm", note: "A compact operating model built around decisions, not ceremonies.", variant: "squad" },
      { title: "Weekly product room", note: "Work, critique, and open questions visible in one shared surface.", variant: "prototype" },
    ],
  },
};

function VisualPlate({ visual, index }: { visual: CaseStudy["visuals"][number]; index: number }) {
  return (
    <figure className="case-study-plate col-6" data-variant={visual.variant}>
      <div className="case-study-generated-image" role="img" aria-label={visual.title}>
        <div className="generated-shell">
          <div className="generated-bar">
            <span />
            <span />
            <span />
          </div>
          <div className="generated-stage">
            <div className="generated-sidebar">
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="generated-main">
              <div className="generated-kpi">
                <span>{index === 0 ? "01" : "02"}</span>
                <strong>{visual.title}</strong>
              </div>
              <div className="generated-grid">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <div className="generated-focus">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </div>
      <figcaption>
        <p>{visual.title}</p>
        <p className="muted">{visual.note}</p>
      </figcaption>
    </figure>
  );
}

export default function WorkCaseStudyPage() {
  const params = useParams<{ slug: string }>();
  const activeIndex = allWork.findIndex((item) => item.slug === params.slug);
  const project = activeIndex >= 0 ? allWork[activeIndex] : allWork[0];
  const nextProject = allWork[(activeIndex + 1 + allWork.length) % allWork.length];
  const study = caseStudies[project.slug ?? "product-design"];

  return (
    <SiteShell>
      <main className="case-study-main">
        <section className="columns case-study-kicker">
          <div className="col-6">
            <Link href="/work" className="label">
              Back to Work
            </Link>
          </div>
          <div className="col-6 muted">
            <p>Selected work / {project.name}</p>
          </div>
        </section>
        <section className="columns case-study-hero">
          <div className="col-6">
            <h1>{project.name}</h1>
          </div>
          <div className="col-6">
            <p>{study.context}</p>
          </div>
        </section>
        <section className="columns case-study-image">
          <div className="col-12">
            {project.image ? <img src={project.image} alt={project.name} /> : null}
          </div>
        </section>
        <section className="columns case-study-overview">
          <div className="col-3">
            <p className="label">Role</p>
            <p>{study.role}</p>
          </div>
          <div className="col-3">
            <p className="label">Team</p>
            <p>{study.team}</p>
          </div>
          <div className="col-6">
            <p className="label">Challenge</p>
            <p>{study.challenge}</p>
          </div>
        </section>
        <section className="columns case-study-body">
          <div className="col-6">
            <p className="label">Approach</p>
          </div>
          <div className="col-6 flow">
            {study.approach.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>
        <section className="columns case-study-visuals">
          {study.visuals.map((visual, index) => (
            <VisualPlate visual={visual} index={index} key={visual.title} />
          ))}
        </section>
        <section className="columns case-study-body">
          <div className="col-6">
            <p className="label">Outcome</p>
          </div>
          <div className="col-6 flow">
            <p>{study.outcome}</p>
          </div>
        </section>
        <section className="columns case-study-stats">
          {study.stats.map((stat) => (
            <p className="col-3" key={stat}>{stat}</p>
          ))}
        </section>
        <section className="columns case-study-next">
          <div className="col-6">
            <p className="label">Next</p>
          </div>
          <div className="col-6">
            <Link href={`/work/${nextProject.slug ?? ""}`} className="view-all">
              <span>{nextProject.name}</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
