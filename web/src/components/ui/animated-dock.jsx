import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs) {
  return twMerge(clsx(inputs))
}

/**
 * Social icon row — static links, no magnification.
 * Public API matches: items[{ link, target?, Icon, label? }]
 */
export function AnimatedDock({ items = [], className = '' }) {
  return (
    <div className={cn('flex items-center gap-5', className)}>
      {items.map((item, index) => {
        const isExternal =
          item.target === '_blank' || Boolean(item.link?.startsWith('http'))

        return (
          <a
            key={item.link ?? index}
            href={item.link}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noreferrer' : undefined}
            aria-label={item.label}
            className="flex items-center justify-center text-muted transition-colors hover:text-ink [&_svg]:h-5 [&_svg]:w-5"
          >
            {item.Icon}
          </a>
        )
      })}
    </div>
  )
}

export default AnimatedDock
