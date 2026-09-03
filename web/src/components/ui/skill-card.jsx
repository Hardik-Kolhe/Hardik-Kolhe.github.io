import { cn } from '../../utils'

/**
 * Skills category card — same popup + title style as Areas of Interest.
 * Skill chips always visible.
 */
export function SkillCard({ title, items = [], className = '' }) {
  return (
    <article
      className={cn(
        'group relative h-full overflow-hidden rounded-2xl border border-line bg-surface p-4 text-center sm:p-5 lg:p-6',
        'shadow-lg shadow-shadow/40',
        'transition-[transform,box-shadow,border-color] duration-500',
        'hover:-translate-y-1.5 hover:scale-[1.02] hover:border-brand/40 hover:shadow-xl hover:shadow-glow',
        'active:-translate-y-1.5 active:scale-[1.02] active:border-brand/40 active:shadow-xl active:shadow-glow',
        className,
      )}
    >
      <h3 className="text-base font-semibold text-ink transition-colors duration-300 group-hover:text-brand group-active:text-brand sm:text-lg">
        {title}
      </h3>
      <ul className="mt-3 flex flex-wrap justify-center gap-2 sm:mt-4">
        {items.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-line bg-page px-2.5 py-1.5 text-xs font-medium text-ink-soft sm:px-3 sm:text-sm"
          >
            {skill}
          </li>
        ))}
      </ul>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl border border-brand/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-active:opacity-100"
      />
    </article>
  )
}

export default SkillCard
