import { FadeIn } from '../components/FadeIn'
import Skills from '../sections/Skills'
import { InfoCard } from '../components/ui/info-card'
import { interests, profile } from '../data/portfolio'

export default function AboutPage() {
  return (
    <>
      <section className="section-y relative bg-page">
        <div className="section-shell">
          <FadeIn>
            <h1 className="heading-xl">About Me</h1>
          </FadeIn>

          <div className="mt-8 grid items-start gap-3 sm:mt-10 sm:gap-4 md:grid-cols-[auto_1fr] md:gap-8 lg:mt-12 lg:gap-10">
            <FadeIn delay={0.05}>
              <aside className="mx-auto flex w-[200px] flex-col items-center text-center sm:w-[220px] md:mx-0 md:items-start md:text-left lg:w-[240px]">
                <img
                  src={profile.photo}
                  alt={profile.name}
                  width={240}
                  height={240}
                  loading="eager"
                  decoding="async"
                  className="aspect-square h-40 w-40 rounded-full object-cover object-center ring-1 ring-line sm:h-48 sm:w-48 md:h-[200px] md:w-[200px] lg:h-[220px] lg:w-[220px]"
                />

                <div className="mt-8 w-[92%] self-center rounded-2xl border border-line bg-surface p-4 text-center shadow-lg shadow-shadow/40 sm:mt-10 sm:p-5 md:self-start md:text-left">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brand-soft sm:text-xs">
                    {profile.beyondCode.title}
                  </p>
                  <p className="mt-2 text-sm font-medium text-ink-soft sm:text-base">
                    Travel · Learn · Explore
                  </p>
                  <div className="mt-3 space-y-1 text-sm leading-relaxed text-muted">
                    {profile.beyondCode.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
              </aside>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="body-text space-y-3 text-justify hyphens-auto sm:space-y-4">
                {profile.about.map((paragraph, index) => (
                  <p
                    key={paragraph.slice(0, 32)}
                    className={
                      index === 0
                        ? 'text-base font-medium text-ink sm:text-lg'
                        : undefined
                    }
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </FadeIn>
          </div>

          <FadeIn className="mt-14 sm:mt-16 lg:mt-20" delay={0.05}>
            <h2 className="heading-lg">Areas of Interest</h2>
          </FadeIn>

          <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5 lg:mt-10 lg:grid-cols-3 lg:gap-6">
            {interests.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.05}>
                <InfoCard title={item.title} description={item.description} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Skills />
    </>
  )
}
