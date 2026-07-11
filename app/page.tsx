import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { ProjectCard } from "@/components/project-card"
import { profile, projects, writing } from "@/lib/portfolio-data"

// 1. IMPORT THE METADATA TYPE FROM NEXT
import type { Metadata } from "next"

// 2. EXPORT THE METADATA CONFIG TO SET THE TAB NAME TO "Home"
export const metadata: Metadata = {
  title: "Home", // This sets the browser tab name
  description: "Personal portfolio of Sunya Afrasiabi.",
}

export default function HomePage() {
  const featured = projects.filter((p) => p.featured)
  
  // Extracting only featured essays
  const selectedWriting = writing.filter((w) => w.featured)

  return (
    <>
      <section className="mx-auto max-w-5xl px-6 pb-16 pt-16 lg:px-8 lg:pt-24">
        {/* REMOVED THE PROFILE.MAJOR TEXT BLOCK FROM HERE */}
        <div className="flex flex-col-reverse items-start gap-6 sm:flex-row sm:items-center sm:gap-8">
          <h1 className="max-w-3xl text-balance font-heading text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <div className="relative size-36 shrink-0 overflow-hidden rounded-full border border-border sm:size-40 lg:size-48"> 
            <Image
              src="/sunya-profile.jpg"
              alt={`Portrait of ${profile.name}`}
              fill
              sizes="200px"
              className="object-cover"
              priority
            />
          </div>
        </div>
        <div className="mt-10 grid gap-8 border-t border-border pt-8 md:grid-cols-[1.5fr_1fr]">
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            Hey there! I'm a mechanical engineering and philosophy student at the University of Pennsylvania.
             My interests range from soft robotics and mechanics of materials to philosophy, logic,
             and the role of technology in national defense and aerospace applications.
          </p>
          
      {/* LINKS CONTAINER */}
          <div className="flex flex-col items-start gap-3 md:items-end">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 font-sans text-sm font-medium uppercase tracking-widest text-foreground transition-colors hover:text-primary"
            >
              See selected work
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
            
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 font-sans text-sm font-medium uppercase tracking-widest text-foreground transition-colors hover:text-primary"
            >
              Who am I?
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>

            {/* UPDATED: "Get in touch" now matches perfectly with font weight and arrow animations */}
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 font-sans text-sm font-medium uppercase tracking-widest text-foreground transition-colors hover:text-primary"
            >
              Get in touch
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= SELECTED PROJECTS SECTION ================= */}
      <section className="mx-auto max-w-5xl px-6 pb-24 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="font-sans text-xs uppercase tracking-[0.25em] text-primary">
              Selected Work
            </span>
            <h2 className="mt-3 text-balance font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Featured projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 font-sans text-sm uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
          >
            View all
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* ================= DYNAMIC WRITING SECTION ================= */}
      <section className="mx-auto max-w-5xl px-6 pb-24 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="font-sans text-xs uppercase tracking-[0.25em] text-primary">
              Selected Work
            </span>
            <h2 className="mt-3 text-balance font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Featured Writing
            </h2>
          </div>
          <Link
            href="/writing"
            className="group inline-flex items-center gap-2 font-sans text-sm uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
          >
            View all articles
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </Link>
        </div>
      
        <div className="divide-y border-b border-border divide-border">
          {selectedWriting.map((item) => (
            <article key={item.slug} className="py-6 sm:py-8 first:pt-0">
              <Link href={`/writing`} className="group block space-y-2">
                <div className="flex flex-col justify-between sm:flex-row sm:items-center">
                  <h3 className="text-xl font-medium tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-sm text-muted-foreground font-sans">{item.date}</span>
                </div>
                <p className="text-muted-foreground line-clamp-2 text-base leading-relaxed">
                  {item.excerpt}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
