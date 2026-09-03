import { FadeIn } from '../components/FadeIn'
import { SkillCard } from '../components/ui/skill-card'
import { skillCategories } from '../data/portfolio'

export default function Skills() {
  return (
    <section className="section-y bg-page">
      <div className="section-shell">
        <FadeIn>
          <h2 className="heading-xl">Skills</h2>
          <p className="body-text mt-3 max-w-2xl">
            Tools and technologies used to build, deploy, and scale data-driven
            AI systems.
          </p>
        </FadeIn>

        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:mt-12 lg:grid-cols-3 lg:gap-6">
          {skillCategories.map((category, i) => (
            <FadeIn key={category.title} delay={i * 0.06}>
              <SkillCard title={category.title} items={category.items} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
