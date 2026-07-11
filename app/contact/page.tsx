import type { Metadata } from "next"
import { Download, Mail, ArrowUpRight } from "lucide-react"
import { profile } from "@/lib/portfolio-data"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Sunya Afrasiabi by email, LinkedIn, or GitHub.",
}

const socials = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "LinkedIn", value: "in/sunya-afrasiabi", href: profile.socials.linkedin },
  { label: "GitHub", value: "@sunya-afrasiabi", href: profile.socials.github },
]

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-24 pt-16 lg:px-8 lg:pt-20">
      <div className="border-t border-border pt-6">
        <span className="font-sans text-xs uppercase tracking-[0.25em] text-primary">
          Contact
        </span>
      </div>
      <h1 className="mt-6 max-w-3xl text-balance font-heading text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
        Let&apos;s chat.
      </h1>
      <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
        I&apos;m open to research roles, engineering & analytical internships, and good conversations.
The best way to reach me is through email.
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-sans text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          <Mail className="size-4" aria-hidden="true" />
          Say hello
        </a>
        <a
          href={profile.resume}
          download
          className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-sans text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
        >
          <Download className="size-4" aria-hidden="true" />
          Download résumé
        </a>
      </div>

      <ul className="mt-14 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-3">
        {socials.map((s) => (
          <li key={s.label} className="bg-card">
            <a
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex flex-col gap-1 p-6 transition-colors hover:bg-secondary"
            >
              <span className="flex items-center gap-1 font-sans text-xs uppercase tracking-widest text-muted-foreground">
                {s.label}
                <ArrowUpRight className="size-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </span>
              <span className="text-foreground transition-colors group-hover:text-primary">
                {s.value}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
