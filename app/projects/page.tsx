import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/lib/portfolio-data"

export const metadata: Metadata = {
  title: "Projects — Sunya Afrasiabi",
  description:
    "Featured and archived engineering and robotics projects by Sunya Afrasiabi.",
}

export default function ProjectsPage() {
  // Filter out any items tagged with "Writing" or "Philosophy" so only pure engineering remains
  const engineeringProjects = projects.filter(
    (p) => !p.tags.includes("Writing") && !p.tags.includes("Philosophy")
  )

  const featured = engineeringProjects.filter((p) => p.featured)
  const archive = engineeringProjects.filter((p) => !p.featured)

  return (
    <>
      <PageHeader
        label="Projects"
        title="Things I've made and questioned."
        intro="A collection of my engineering, robotics, and hardware design work."
      />

      <section className="mx-auto max-w-5xl px-6 pb-24 lg:px-8">
        {/* FEATURED PROJECTS GRID */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {/* ARCHIVE PROJECTS SECTION (Only shows if there are non-featured projects) */}
        {archive.length > 0 && (
          <div className="mt-24">
            <div className="mb-10 border-t border-border pt-6">
              <span className="font-sans text-xs uppercase tracking-[0.25em] text-primary">
                Archive
              </span>
              <h2 className="mt-3 text-balance font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Other technical work
              </h2>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {archive.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  )
}
