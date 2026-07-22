"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { SiteShell, allWork } from "../../idc";

export default function WorkCaseStudyPage() {
  const params = useParams<{ slug: string }>();
  const activeIndex = allWork.findIndex((item) => item.slug === params.slug);
  const project = activeIndex >= 0 ? allWork[activeIndex] : allWork[0];
  const nextProject = allWork[(activeIndex + 1 + allWork.length) % allWork.length];

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
            <p>Selected work</p>
          </div>
        </section>
        <section className="columns case-study-hero">
          <div className="col-6">
            <h1>{project.name}</h1>
          </div>
          <div className="col-6">
            <p>{project.detail}</p>
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
            <p>Strategy, product design, prototyping, design direction.</p>
          </div>
          <div className="col-3">
            <p className="label">Team</p>
            <p>Senior partner squad built around the problem.</p>
          </div>
          <div className="col-6">
            <p className="label">Overview</p>
            <p>
              This page holds the project story: the problem, the decisions that
              shaped the work, and the product evidence that made the final
              direction feel clear.
            </p>
          </div>
        </section>
        <section className="columns case-study-body">
          <div className="col-6">
            <p className="label">Approach</p>
          </div>
          <div className="col-6 flow">
            <p>
              We start by making the product legible: what it does, who it is
              for, where trust breaks down, and which parts of the experience
              need sharper judgment before more screens are produced.
            </p>
            <p>
              From there, the work moves through fast prototypes, critique, and
              focused visual systems so the product can become clearer at the
              speed modern teams now expect.
            </p>
          </div>
        </section>
        <section className="columns case-study-body">
          <div className="col-6">
            <p className="label">Outcome</p>
          </div>
          <div className="col-6 flow">
            <p>
              The value becomes visible through a clear before, a few critical
              design moves, and the finished product moments that carry the
              story.
            </p>
          </div>
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
