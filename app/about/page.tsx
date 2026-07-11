import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { skillGroups, roles } from "@/lib/portfolio-data"

export const metadata: Metadata = {
  title: "About",
  description:
    "About Sunya Afrasiabi — Mechanical Engineering and Philosophy student at UPenn",
}

export default function AboutPage() {
  return (
    <>
      <PageHeader label="About" title="Nice to meet you! Here’s a bit about me:" />

      {/* ================= EDUCATION SECTION ================= */}
      <section className="mx-auto max-w-5xl px-6 pb-20 lg:px-8">
        <h2 className="mb-6 border-t border-border pt-6 font-heading text-2xl font-semibold tracking-tight text-foreground">
          Education
        </h2>
        
        <div className="space-y-10">
          {/* UPenn Entry */}
          <div className="grid gap-2 md:grid-cols-[180px_1fr] md:gap-8">
            <span className="font-sans text-sm tracking-wider text-muted-foreground uppercase">
              Sept 2024 — May 2028
            </span>
            <div>
              <h3 className="font-heading text-xl font-semibold text-foreground">
                University of Pennsylvania
              </h3>
              <ul className="mt-2 space-y-1 text-base text-muted-foreground">
                <li>
                  <strong className="text-foreground font-medium">BSE in Mechanical Engineering:</strong> Dynamics, Controls, and Robotics Concentration
                </li>
                <li>
                  <strong className="text-foreground font-medium">BA in Philosophy:</strong> Philosophy of Science Concentration
                </li>
              </ul>
              <div className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
                <span className="font-sans text-xs uppercase tracking-wider text-primary block mb-1 font-medium">
                  Relevant Coursework
                </span>
                Thermal-Fluids Engineering, Statics & Strength of Materials, Thermodynamics, Dynamics, Python Programming, Mechanical Design, Linear Algebra, Differential Equations, Probability, Ethics, Social Contract
              </div>
            </div>
          </div>

          {/* UBuffalo Entry */}
          <div className="grid gap-2 border-t border-border pt-8 md:grid-cols-[180px_1fr] md:gap-8">
            <span className="font-sans text-sm tracking-wider text-muted-foreground uppercase">
              Sept 2023 — Apr 2024
            </span>
            <div>
              <h3 className="font-heading text-xl font-semibold text-foreground">
                University at Buffalo
              </h3>
              <p className="mt-1 text-base text-muted-foreground">
                Dual Enrollment via Gifted Math Program
              </p>
              <div className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
                <span className="font-sans text-xs uppercase tracking-wider text-primary block mb-1 font-medium">
                  Coursework
                </span>
                College Calculus III, Introduction to Linear Algebra
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SKILLS SECTION ================= */}
      <section className="mx-auto max-w-5xl px-6 pb-20 lg:px-8">
        <h2 className="mb-8 border-t border-border pt-6 font-heading text-2xl font-semibold tracking-tight text-foreground">
          Skills
        </h2>
        <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.heading} className="bg-card p-6">
              <h3 className="font-heading text-lg font-semibold text-foreground">
                {group.heading}
              </h3>
              <ul className="mt-4 flex flex-col gap-2">
                {group.items.map((item) => (
                  <li key={item} className="leading-relaxed text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      
      {/* ================= EXPERIENCE SECTION ================= */}
      <section className="mx-auto max-w-5xl px-6 pb-24 lg:px-8">
        <h2 className="mb-6 border-t border-border pt-6 font-heading text-2xl font-semibold tracking-tight text-foreground">
          Experience
        </h2>
        <ol className="flex flex-col">
          {roles.map((role) => (
            <li
              key={role.title}
              className="grid gap-2 border-b border-border py-8 md:grid-cols-[180px_1fr] md:gap-8 last:border-b-0"
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
