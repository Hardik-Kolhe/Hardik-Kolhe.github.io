import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 320, damping: 24 }}
      className="group h-full"
    >
      <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface">
        <div className="aspect-[16/10] overflow-hidden bg-media-wash">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        </div>
        <div className="flex flex-1 flex-col p-4 sm:p-5 lg:p-6">
          <h3 className="text-lg font-semibold text-balance text-ink sm:text-xl">
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {project.description}
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-line bg-page px-2 py-1 text-[0.7rem] font-medium text-muted sm:px-2.5 sm:text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-auto flex justify-center pt-4 sm:pt-5">
            <a
              href={project.href}
              className="group/cta inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-brand-soft transition hover:text-brand"
            >
              Read case study
              <ArrowRight
                size={14}
                strokeWidth={2}
                className="transition-transform group-hover/cta:translate-x-0.5"
                aria-hidden
              />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
