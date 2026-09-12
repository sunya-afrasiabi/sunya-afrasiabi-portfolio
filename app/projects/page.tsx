import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/lib/portfolio-data"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Engineering and robotics projects by Sunya Afrasiabi.",
}

export default function ProjectsPage() {
  // Filter out any items tagged with "Writing" or "Philosophy" so only pure engineering remains
  const engineeringProjects = projects.filter(
    (p) => !p.tags.includes("Writing") && !p.tags.includes("Philosophy")
  )

  return (
    <>
      <PageHeader
        label="Projects"
        title="Things I've made."
        intro="A record of the engineering projects I’ve built, from CAD and machining to software and experimental research."
      />

      {/* ================= ALL PROJECTS GRID ================= */}
      <section className="mx-auto max-w-5xl px-6 pb-24 lg:px-8">
        <h2 className="mb-8 border-t border-border pt-6 font-heading text-2xl font-semibold tracking-tight text-foreground">
          All Projects
        </h2>
        
        {/* Everything maps directly into the "Featured Projects" visual card layout */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {engineeringProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </>
  )
}
