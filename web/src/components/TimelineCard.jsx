function RichText({ text }) {
  const parts = String(text).split(/(\*\*[^*]+\*\*)/g)

  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-medium text-ink-soft">
          {part.slice(2, -2)}
        </strong>
      )
    }
    return <span key={i}>{part}</span>
  })
}

export function TimelineCard({ name, meta, logo, entries }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-line bg-surface p-4 shadow-lg shadow-shadow/40 transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-1.5 hover:scale-[1.02] hover:border-brand/40 hover:shadow-xl hover:shadow-glow sm:p-5">
      <div className="relative z-10 flex items-start gap-3 sm:gap-4">
        <img
          src={logo}
          alt={`${name} logo`}
          className="h-12 w-12 shrink-0 rounded-lg bg-white object-contain p-1 ring-1 ring-line transition-transform duration-500 group-hover:scale-110 sm:h-14 sm:w-14 sm:p-1.5"
        />
        <div className="min-w-0 transition-transform duration-300 group-hover:-translate-y-0.5">
          <h4 className="text-base font-semibold text-ink group-hover:text-brand sm:text-lg">
            {name}
          </h4>
          {meta ? (
            <p className="text-xs text-faint sm:text-sm">{meta}</p>
          ) : null}
        </div>
      </div>

      <div className="relative z-10 mt-4 space-y-5 sm:mt-5">
        {entries.map((entry) => (
          <div key={`${entry.title}-${entry.date}`} className="space-y-1.5">
            <h5 className="text-sm font-semibold text-ink sm:text-base">
              {entry.title}
            </h5>
            <p className="text-xs text-faint">{entry.date}</p>
            {entry.highlights?.length ? (
              <div className="mt-2 space-y-2 pl-4 text-sm leading-relaxed text-muted sm:pl-6">
                {entry.highlights.map((item) => (
                  <p key={item.slice(0, 48)}>
                    <RichText text={item} />
                  </p>
                ))}
              </div>
            ) : null}
            {entry.thesis ? (
              <p className="mt-2 text-sm leading-relaxed text-muted">
                <span className="font-medium text-ink-soft">Thesis:</span>{' '}
                {entry.thesis}
              </p>
            ) : null}
            {entry.focus ? (
              <p className="mt-2 text-xs leading-relaxed text-brand-soft sm:text-sm">
                <span className="font-medium text-ink-soft">Focus:</span>{' '}
                {entry.focus}
              </p>
            ) : null}
          </div>
        ))}
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl border border-brand/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
    </article>
  )
}
