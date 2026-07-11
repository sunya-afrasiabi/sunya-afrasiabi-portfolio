export function PageHeader({
  label,
  title,
  intro,
}: {
  label: string
  title: string
  intro?: string
}) {
  return (
    <header className="mx-auto max-w-5xl px-6 pb-14 pt-16 lg:px-8 lg:pt-20">
      <span className="font-sans text-xs uppercase tracking-[0.25em] text-primary">
        {label}
      </span>
      <h1 className="mt-4 max-w-3xl text-balance font-heading text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      {intro && (
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          {intro}
        </p>
      )}
    </header>
  )
}
