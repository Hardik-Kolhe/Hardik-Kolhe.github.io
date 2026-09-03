import { FadeIn } from '../components/FadeIn'
import { TimelineCard } from '../components/TimelineCard'
import { education, experience } from '../data/portfolio'

export default function ExperiencePage() {
  return (
    <section className="section-y relative bg-page">
      <div className="section-shell">
        <FadeIn>
          <h1 className="heading-xl">Experience</h1>
        </FadeIn>

        <div className="mt-8 space-y-12 sm:mt-10 lg:mt-12 lg:space-y-14">
          <div>
            <FadeIn>
              <h2 className="heading-lg">Work Experience</h2>
            </FadeIn>
            <div className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
              {experience.map((job) => (
                <FadeIn key={job.company}>
                  <TimelineCard
                    name={job.company}
                    meta={`${job.duration}${job.location ? ` · ${job.location}` : ''}`}
                    logo={job.logo}
                    entries={job.roles}
                  />
                </FadeIn>
              ))}
            </div>
          </div>

          <div>
            <FadeIn>
              <h2 className="heading-lg">Education</h2>
            </FadeIn>
            <div className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
              {education.map((edu) => (
                <FadeIn key={edu.school}>
                  <TimelineCard
                    name={edu.school}
                    meta={edu.duration}
                    logo={edu.logo}
                    entries={edu.programs}
                  />
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
