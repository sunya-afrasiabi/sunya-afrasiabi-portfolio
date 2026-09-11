import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { writing } from "@/lib/portfolio-data"

export function generateStaticParams() {
  return writing.map((w) => ({ slug: w.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const piece = writing.find((w) => w.slug === slug)
  if (!piece) return { title: "Article not found" }
  return {
    title: `${piece.title} — Sunya Afrasiabi`,
    description: piece.excerpt,
  }
}

export default async function WritingDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const piece = writing.find((w) => w.slug === slug)
  
  if (!piece) notFound()

  return (
    <article className="mx-auto max-w-4xl px-6 pb-24 pt-12 lg:px-8">
      {/* Back Button */}
      <Link
        href="/writing"
        className="group inline-flex items-center gap-2 font-sans text-sm uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" aria-hidden="true" />
        Back to writing
      </Link>

      {/* Article Header */}
      <header className="mt-10 border-t border-border pt-8">
        <div className="flex items-center justify-between gap-4">
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-primary">
            {piece.tag} — {piece.date}
          </span>
          <a
            href={piece.pdfUrl.replace("/preview", "/view")}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
          >
            Open in Drive
            <ExternalLink className="size-3" aria-hidden="true" />
          </a>
        </div>
        <h1 className="mt-4 text-balance font-heading text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
          {piece.title}
        </h1>
        <p className="mt-6 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground">
          {piece.excerpt}
        </p>
      </header>

      {/* Embedded PDF Viewer */}
      <div className="mt-12 overflow-hidden rounded-xl border border-border bg-secondary/20 shadow-sm">
        <iframe
          src={piece.pdfUrl}
          className="h-[800px] w-full border-0"
          title={piece.title}
          allow="autoplay"
        />
      </div>
    </article>
  )
}
