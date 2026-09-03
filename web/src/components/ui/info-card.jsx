import { useState } from 'react'
import { cn } from '../../utils'

/**
 * Interest card — fixed height for full text; content centered.
 * Description fades in on hover (desktop) or tap (mobile).
 */
export function InfoCard({
  title,
  description,
  className = '',
}) {
  const [open, setOpen] = useState(false)

  return (
    <article
      role="button"
      tabIndex={0}
      aria-expanded={open}
      onClick={() => setOpen((v) => !v)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          setOpen((v) => !v)
        }
      }}
      className={cn(
        'group relative h-full cursor-pointer overflow-hidden rounded-2xl border border-line bg-surface p-4 sm:p-5 lg:p-6',
        'shadow-lg shadow-shadow/40',
        'transition-[transform,box-shadow,border-color] duration-500',
        'hover:-translate-y-1.5 hover:scale-[1.02] hover:border-brand/40 hover:shadow-xl hover:shadow-glow',
        open &&
          '-translate-y-1.5 scale-[1.02] border-brand/40 shadow-xl shadow-glow',
        className,
      )}
    >
      {/* Invisible sizer — keeps box at full title + description height */}
      <div className="invisible text-center" aria-hidden>
        <h4 className="text-base font-semibold sm:text-lg">{title}</h4>
        <p className="mt-2 text-sm leading-relaxed">{description}</p>
      </div>

      {/* Centered visible content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-4 text-center sm:px-5 lg:px-6">
        <div className="flex w-full flex-col items-center justify-center">
          <h4
            className={cn(
              'text-base font-semibold text-ink transition-colors duration-300 sm:text-lg',
              'group-hover:text-brand',
              open && 'text-brand',
            )}
          >
            {title}
          </h4>
          <p
            className={cn(
              'overflow-hidden text-sm leading-relaxed text-muted transition-all duration-500 ease-out',
              open
                ? 'mt-2 max-h-40 translate-y-0 opacity-100'
                : 'mt-0 max-h-0 translate-y-2 opacity-0 group-hover:mt-2 group-hover:max-h-40 group-hover:translate-y-0 group-hover:opacity-100 group-hover:text-ink-soft',
            )}
          >
            {description}
          </p>
        </div>
      </div>

      <div
        aria-hidden
        className={cn(
          'pointer-events-none absolute inset-0 rounded-2xl border border-brand/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100',
          open && 'opacity-100',
        )}
      />
    </article>
  )
}

export default InfoCard
