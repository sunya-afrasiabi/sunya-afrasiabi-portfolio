import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { skillGroups, roles } from "@/lib/portfolio-data"

export const metadata: Metadata = {
  title: "About — Sunya Afrasiabi",
  description:
    "About Sunya Afrasiabi — Mechanical Engineering and Philosophy student at UPenn",
}

export default function AboutPage() {
  const technicalRoles = roles.filter((role) => role.category === "Technical")
  const leadershipRoles = roles.filter((role) => role.category === "Leadership")

  return (
    <>
      <PageHeader label="About" title="Nice to meet you! Here’s a bit about me:" />

      {/* ================= EDUCATION SECTION ================= */}
      <section className="mx-auto max-w-5xl px-6 pb-24 lg:px-8">
        <h2 className="mb-6 border-t border-border pt-6 font-heading text-2xl font-semibold tracking-tight text-foreground">
          Education
        </h2>
        <div className="grid gap-2 md:grid-cols-[180px_1fr] md:gap-8">
          <span className="font-sans text-sm uppercase tracking-wider text-muted-foreground">
            Sept 2024 — May 2028
          </span>
          <div>
            <h3 className="font-heading text-xl font-semibold text-foreground">
              University of Pennsylvania
            </h3>
            <ul className="mt-2 space-y-1 text-base text-muted-foreground">
              <li>
                <strong className="font-medium text-foreground">BSE in Mechanical Engineering:</strong>{" "}
                Dynamics, Controls, and Robotics Concentration
              </li>
              <li>
                <strong className="font-medium text-foreground">Double Major in Philosophy:</strong>{" "}
                Philosophy of Science Concentration
              </li>
            </ul>
            <div className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
              <span className="mb-1 block font-sans text-xs font-medium uppercase tracking-wider text-primary">
                Relevant Coursework
              </span>
              Thermal-Fluids Engineering, Statics & Strength of Materials, Thermodynamics, Dynamics, Python Programming, Mechanical Design, Linear Algebra, Differential Equations, Probability, Ethics, Social Contract
            </div>
          </div>
        </div>
      </section>

      {/* ================= SKILLS SECTION ================= */}
      <section className="mx-auto max-w-5xl px-6 pb-24 lg:px-8">
        <h2 className="mb-6 border-t border-border pt-6 font-heading text-2xl font-semibold tracking-tight text-foreground">
          Skills
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.heading}>
              <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-foreground">
                {group.heading}
              </h3>
              <ul className="mt-4 flex flex-col gap-2 text-muted-foreground">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TECHNICAL EXPERIENCE SECTION ================= */}
      <section className="mx-auto max-w-5xl px-6 pb-24 lg:px-8">
        <h2 className="mb-6 border-t border-border pt-6 font-heading text-2xl font-semibold tracking-tight text-foreground">
          Technical Experience
        </h2>
        <ol className="flex flex-col">
          {technicalRoles.map((role) => (
            <li
              key={role.title}
              className="grid gap-2 border-b border-border py-8 last:border-b-0 md:grid-cols-[180px_1fr] md:gap-8"
            >
              <span className="font-sans text-sm uppercase tracking-wider text-muted-foreground">
                {role.period}
              </span>
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  {role.title}
                </h3>
                <p className="mt-1 font-sans text-sm text-primary">{role.org}</p>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                  {role.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ================= LEADERSHIP EXPERIENCE SECTION ================= */}
      <section className="mx-auto max-w-5xl px-6 pb-24 lg:px-8">
        <h2 className="mb-6 border-t border-border pt-6 font-heading text-2xl font-semibold tracking-tight text-foreground">
          Leadership Experience
        </h2>
        <ol className="flex flex-col">
          {leadershipRoles.map((role) => (
            <li
              key={role.title}
              className="grid gap-2 border-b border-border py-8 last:border-b-0 md:grid-cols-[180px_1fr] md:gap-8"
            >
              <span className="font-sans text-sm uppercase tracking-wider text-muted-foreground">
                {role.period}
              </span>
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  {role.title}
                </h3>
                <p className="mt-1 font-sans text-sm text-primary">{role.org}</p>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                  {role.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </>
  )
}
