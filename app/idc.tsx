"use client";

import Link from "next/link";

type CardItem = {
  name: string;
  detail: string;
  slug?: string;
  href?: string;
  image?: string;
  video?: string;
};

export const bossaIntro = "Good technology deserves better design. We build it with care, at the pace AI makes possible.";
export const bossaHeroIntro = "We partner with teams building ambitious technology and help shape it into products that feel clear, useful, and human. Our process combines thoughtful design craft with the speed AI now makes possible, so great ideas can become better experiences faster.";

export const clientList = "Apple, Google, Marriott Hotels, Vercel, JPMorgan, Forrester, FOX, Facebook, 99, NBA, XP Inc, C6 Bank, Brex, and others.";

export const selectedWork: CardItem[] = [
  { name: "Product design", slug: "product-design", detail: "Interfaces, systems, and products that feel as good as they work.", image: "https://www.bossa.work/_nuxt/nda-01.ua3bU0CJ.png" },
  { name: "AI experience design", slug: "ai-experience-design", detail: "Workflows and tools shaped around the new speed of making.", image: "https://www.bossa.work/_nuxt/mapfry-01.B57pXxUk.png" },
  { name: "Brand systems", slug: "brand-systems", detail: "Clear identities that can stretch across product, content, and teams.", image: "https://www.bossa.work/_nuxt/mapfry-02.DsenbU3c.png" },
  { name: "Prototyping", slug: "prototyping", detail: "High-fidelity product thinking before the expensive decisions harden.", image: "https://www.bossa.work/_nuxt/nda-03.C6GdEwKB.png" },
  { name: "Design direction", slug: "design-direction", detail: "Senior critique, taste, and product judgment for ambitious teams.", image: "https://www.bossa.work/_nuxt/nda-04.CBgNQrk5.png" },
  { name: "Launch craft", slug: "launch-craft", detail: "The final layer of polish that makes technology easier to trust.", image: "https://www.bossa.work/_nuxt/nda-06.BxZTFW2Q.png" },
];

export const homeWork = selectedWork.filter(
  (item) => item.slug !== "brand-systems" && item.slug !== "design-direction",
);

export const allWork: CardItem[] = [
  ...selectedWork,
  { name: "Product audits", slug: "product-audits", detail: "A sharp read on what is confusing, missing, or slowing people down.", image: "https://www.bossa.work/_nuxt/nda-07.N8SKnqKp.png" },
  { name: "Founding narratives", slug: "founding-narratives", detail: "The words and interface decisions that make a product legible.", image: "https://www.bossa.work/_nuxt/mapfry-03.KUzu-NMC.png" },
  { name: "Design systems", slug: "design-systems", detail: "Reusable foundations for faster product teams and clearer decisions.", image: "https://www.bossa.work/_nuxt/nda-09.CQ5frJat.png" },
  { name: "Executive prototypes", slug: "executive-prototypes", detail: "Clickable conviction for boards, founders, and product leads.", image: "https://www.bossa.work/_nuxt/cover-mapfry.BkgfZcXe.png" },
  { name: "AI product strategy", slug: "ai-product-strategy", detail: "Where automation should help, where it should disappear, and where design must lead.", image: "https://www.bossa.work/_nuxt/mapfry-img-01.uEVlMiXZ.png" },
  { name: "Partner squads", slug: "partner-squads", detail: "Small senior teams that move with the focus of a studio and the speed of AI.", image: "https://www.bossa.work/_nuxt/mapfry-img-02.ZqsFuOx_.png" },
];

export const homeThinking: CardItem[] = [
  {
    name: "AI Didn’t Kill SaaS. It Killed Average Products",
    detail: "The real impact of AI isn’t replacing software, it’s changing what makes software worth paying for.",
    href: "https://medium.com/@macethinho/ai-didnt-kill-saas-it-killed-average-products-e0c5ffa74bb4",
    image: "https://miro.medium.com/v2/resize:fit:1200/1*3rUsGFqMWlXQdRvZqxE1aw.jpeg",
  },
  {
    name: "AI Won’t Replace Product Designers. But It Will Split Us Into Three Groups.",
    detail: "Your future could be defined by a single question that almost no one asks themselves: do you like to think?",
    href: "https://medium.com/@macethinho/ai-wont-replace-product-designers-but-it-will-split-us-into-three-groups-3a30ab78a654",
    image: "https://miro.medium.com/v2/resize:fit:1200/1*YgxulxwQCOQiO4uoPqsxtw.png",
  },
  {
    name: "Voice and AI-powered digital assistants are challenging the user interfaces as we know them",
    detail: "Voice-controlled LLMs and assistants are reshaping how we interact with computers.",
    href: "https://medium.com/@macethinho/voice-and-ai-powered-digital-assistants-are-challenging-the-user-interfaces-as-we-know-them-4a38d6f97286",
    image: "https://miro.medium.com/v2/resize:fit:1200/1*Zz_fo_GbVpa94ZDb_SFvrQ.jpeg",
  },
  {
    name: "Measuring the beauty of an interface",
    detail: "Use numbers to prove that a more beautiful interface converts more.",
    href: "https://uxdesign.cc/measuring-the-beauty-of-an-interface-3b49360504fd",
    image: "https://miro.medium.com/v2/resize:fit:1200/1*SHOwfn9ltZu5pM-QKr-IZg.png",
  },
  {
    name: "Thoughts on AI in the Everyday Lives of Ordinary People",
    detail: "How AI is becoming an invisible assistant inside everyday decisions.",
    href: "https://www.lucascruz.work/thoughts-on-ai-in-the-everyday-lives-of-ordinary-people",
    image: "https://cdn.prod.website-files.com/667b31082afed248049c6296/67ae76ad9edac47d3560e42b_Thoughts%20on%20AI%20in%20the%20Everyday%20Lives%20of%20Ordinary%20People.jpg",
  },
  {
    name: "Entre o processo e o instinto",
    detail: "O dilema de todo designer que quer ir além do correto e criar algo memorável.",
    href: "https://lucazcrus.substack.com/p/entre-o-processo-e-o-instinto",
    image: "https://substackcdn.com/image/fetch/$s_!jzQJ!,w_1200,h_675,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc5882341-a3ee-40e9-85ed-4c22bd3a6530_1200x630.png",
  },
];

export const allThinking: CardItem[] = [
  ...homeThinking,
  {
    name: "Você não está sem ideias. Você está sem intervalos.",
    detail: "Quando foi a última vez que você teve uma boa ideia longe da tela?",
    href: "https://lucazcrus.substack.com/p/voce-nao-esta-sem-ideias-voce-esta",
    image: "https://substackcdn.com/image/fetch/$s_!FDKb!,w_1200,h_675,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fda222a54-e021-4185-a10e-80d06486df07_1200x630.png",
  },
  {
    name: "A Tecnologia Não Nos Roubou Nada. Nós Entregamos.",
    detail: "Reflexões sobre o dia em que paramos de usar tecnologia e começamos a ser usados por ela.",
    href: "https://lucazcrus.substack.com/p/a-tecnologia-nao-nos-roubou-nada",
    image: "https://substackcdn.com/image/fetch/$s_!XdA_!,w_1200,h_675,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ffdf6108a-0e77-4ef4-b437-d93b137a63db_1200x630.png",
  },
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
  const href = item.href ?? (item.slug ? `/work/${item.slug}` : "#");
  const linkProps = item.href ? { target: "_blank", rel: "noreferrer" } : {};

  return (
    <article className={`col-2 card ${hiddenAfter ? "hide-small" : ""}`}>
      <Link href={href} className="media" {...linkProps}>
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
      </Link>
      <div className="card-info">
        <Link href={href} className="detail-title" {...linkProps}>
          {item.name}
        </Link>
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

export function ListingGrid({ items, type = "work" }: { items: CardItem[]; type?: "work" | "journal" }) {
  return (
    <main className={`listing-main ${type}-listing-main`}>
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
      </div>
      <div className="footer-brand" aria-hidden="true">
        <img src="/assets/logo_bossa.svg" alt="" />
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
