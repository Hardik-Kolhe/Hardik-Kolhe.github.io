import { FadeIn } from '../components/FadeIn'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/portfolio'

export default function Projects() {
  return (
    <section className="section-y bg-page">
      <div className="section-shell">
        <FadeIn>
          <h1 className="heading-xl">Projects</h1>
          <p className="body-text mt-3 max-w-2xl">
            Selected work across machine learning, analytics, and cloud data
            systems.
          </p>
        </FadeIn>

        <div className="mt-8 grid gap-5 sm:mt-10 sm:gap-6 md:grid-cols-2 lg:mt-12 lg:gap-8">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={(i % 2) * 0.08}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
