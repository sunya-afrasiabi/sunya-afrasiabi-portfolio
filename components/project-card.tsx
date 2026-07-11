import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import type { Project } from "@/lib/portfolio-data"

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-md border border-border bg-card transition-colors hover:border-primary"
    >
      <div className="overflow-hidden border-b border-border bg-secondary">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={800}
          height={600}
          className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="font-sans text-xs uppercase tracking-[0.25em] text-muted-foreground">
          {project.year}
        </span>
        <h3 className="mt-3 flex items-start gap-2 font-heading text-xl font-semibold tracking-tight text-foreground">
          <span className="text-balance transition-colors group-hover:text-primary">
            {project.title}
          </span>
          <ArrowUpRight
            className="mt-1 size-4 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
            aria-hidden="true"
          />
        </h3>
        <p className="mt-3 flex-1 text-pretty leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-border px-3 py-1 font-sans text-xs uppercase tracking-wide text-muted-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  )
}
