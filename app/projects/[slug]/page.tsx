import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react"
import { projects } from "@/lib/portfolio-data"

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return { title: "Project not found" }
  return {
    title: `${project.title} — Sunya Afrasiabi`,
    description: project.description,
  }
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 2)
  
  // Detect if the project features a vertical portrait layout requirement
  const isPortraitProject = project.slug === "butane-rocket-targeting"

  return (
    <article className="mx-auto max-w-4xl px-6 pb-24 pt-12 lg:px-8">
      <Link
        href="/projects"
        className="group inline-flex items-center gap-2 font-sans text-sm uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" aria-hidden="true" />
        Back to projects
      </Link>

      <header className="mt-10 border-t border-border pt-8">
        <span className="font-sans text-xs uppercase tracking-[0.25em] text-primary">
          {project.year}
          {project.role ? ` — ${project.role}` : ""}
        </span>
        <h1 className="mt-4 text-balance font-heading text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
          {project.title}
        </h1>
        <ul className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-border px-3 py-1 font-sans text-xs uppercase tracking-wide text-muted-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>
      </header>

      {/* DYNAMIC IMAGE WRAPPER: Smart containment framing tailored for portrait aspect properties */}
      <div 
        className={`mt-10 overflow-hidden rounded-md border border-border bg-secondary/30 flex items-center justify-center p-4 ${
          isPortraitProject 
            ? "max-w-md mx-auto aspect-[3/4] h-[550px]" 
            : "w-full max-h-[450px] aspect-[3/2]"
        }`}
      >
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={1200}
          height={800}
          className="max-w-full max-h-full w-auto h-auto object-contain"
          priority
        />
      </div>

      <div className="mt-10 grid gap-10 md:grid-cols-[1.6fr_1fr]">
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          {project.longDescription.map((paragraph, i) => (
            <p key={i} className="text-pretty text-base">
              {paragraph}
            </p>
          ))}
          {project.href && (
            <a
              href={project.href}
              className="inline-flex items-center gap-2 font-sans text-sm font-medium uppercase tracking-widest text-foreground transition-colors hover:text-primary"
            >
              Visit project
              <ExternalLink className="size-4" aria-hidden="true" />
            </a>
          )}
        </div>

        {/* COMBINED SIDEBAR */}
        <div className="space-y-8">
          {project.outcomes && project.outcomes.length > 0 && (
            <aside className="h-fit rounded-md border border-border bg-card p-6">
              <h2 className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
                Outcomes
              </h2>
              <ul className="mt-4 flex flex-col gap-4">
                {project.outcomes.map((outcome) => (
                  <li key={outcome} className="border-l-2 border-primary pl-4 text-sm leading-relaxed text-foreground">
                    {outcome}
                  </li>
                ))}
              </ul>
            </aside>
          )}

          {/* DYNAMIC COMPONENT LINKS */}
          {"links" in project && Array.isArray(project.links) && project.links.length > 0 && (
            <aside className="h-fit rounded-md border border-border bg-card p-6">
              <h2 className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
                Project Assets
              </h2>
              <ul className="mt-4 flex flex-col gap-3">
                {project.links.map((link: { label: string; url: string }) => (
                  <li key={link.url}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-between w-full rounded-sm border border-border bg-secondary/50 p-3 text-sm text-foreground transition-all hover:border-primary hover:bg-secondary"
                    >
                      <span className="font-medium transition-colors group-hover:text-primary">
                        {link.label}
                      </span>
                      <ArrowUpRight className="size-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
          )}
        </div>
      </div>

      <nav className="mt-16 border-t border-border pt-8">
        <span className="font-sans text-xs uppercase tracking-[0.25em] text-primary">
          More work
        </span>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {others.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/projects/${p.slug}`}
                className="group flex items-center justify-between gap-4 rounded-md border border-border bg-card p-5 transition-colors hover:border-primary"
              >
                <span className="font-heading text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                  {p.title}
                </span>
                <ArrowUpRight
                  className="size-4 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </article>
  )
}
