import type { Metadata } from "next"
import { ArrowUpRight } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { writing } from "@/lib/portfolio-data"

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Essays and reflections on engineering, ethics, and the machines we build, by Sunya Afrasiabi.",
}

export default function WritingPage() {
  return (
    <>
      <PageHeader
        label="Writing"
        title="Things I’ve written."
        intro="A collection of my writing, from expository research essays and technical reports to philosophical inquiry."
      />

      <section className="mx-auto max-w-3xl px-6 pb-24 lg:px-8">
        <ul className="flex flex-col border-t border-border">
          {writing.map((piece) => (
            <li key={piece.slug} className="border-b border-border">
              <a
                href={piece.href}
                className="group flex flex-col gap-3 py-8 transition-colors"
              >
                <span className="font-sans text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  {piece.tag} — {piece.date}
                </span>
                <h2 className="flex items-start gap-2 font-heading text-2xl font-semibold tracking-tight text-foreground">
                  <span className="text-balance transition-colors group-hover:text-primary">
                    {piece.title}
                  </span>
                  <ArrowUpRight
                    className="mt-1 size-5 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
                    aria-hidden="true"
                  />
                </h2>
                <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                  {piece.excerpt}
                </p>
                <span className="font-sans text-sm uppercase tracking-widest text-primary">
                  Read full piece
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
