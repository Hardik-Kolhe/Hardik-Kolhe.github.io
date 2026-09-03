import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { profile } from '../data/portfolio'
import { useTheme } from '../theme/ThemeContext'
import BackgroundShader from '../components/ui/background-shader'

const heroEase = [0.22, 1, 0.36, 1]

function RoleBadge({ label, isDark }) {
  return (
    <p
      className={`mx-auto mb-8 inline-flex max-w-full items-center justify-center rounded-full border px-5 py-2 text-center text-[0.7rem] font-medium tracking-[0.04em] sm:mb-10 sm:px-6 sm:py-2.5 sm:text-sm ${
        isDark
          ? 'border-line bg-surface text-ink-soft'
          : 'border-brand/20 bg-brand-dim text-ink-soft'
      }`}
    >
      {label}
    </p>
  )
}

export default function Hero() {
  const { isDark } = useTheme()
  const reduceMotion = useReducedMotion()

  const headingClass = isDark
    ? 'text-white [text-shadow:0_2px_28px_rgba(0,0,0,0.5)]'
    : 'text-slate-950 [text-shadow:0_1px_18px_rgba(255,255,255,0.85)]'
  const subClass = isDark
    ? 'text-slate-300 [text-shadow:0_2px_14px_rgba(0,0,0,0.35)]'
    : 'text-slate-700 [text-shadow:0_1px_12px_rgba(255,255,255,0.75)]'

  const ctaEffectClass = isDark
    ? 'border-sky-300/50 bg-sky-300/10 text-sky-300 shadow-lg shadow-shadow/30 hover:border-sky-200 hover:bg-sky-300/20 hover:text-white'
    : 'border-blue-800/40 bg-blue-800/10 text-blue-800 shadow-lg shadow-shadow/20 hover:border-blue-900 hover:bg-blue-800/15 hover:text-slate-950'

  const ctaHoverMotionClass =
    'transition-[transform,box-shadow,border-color,background-color] duration-500 hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-xl hover:shadow-glow'

  const enter = (delay) =>
    reduceMotion
      ? { initial: false }
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay, ease: heroEase },
        }

  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-page px-5 pb-24 pt-28 text-center sm:px-8 sm:pb-28 sm:pt-32">
      <BackgroundShader />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-1">
        <motion.div {...enter(0.05)}>
          <RoleBadge label={profile.badgeLabel} isDark={isDark} />
        </motion.div>

        <motion.h1
          {...enter(0.18)}
          className={`mx-auto max-w-4xl whitespace-pre-line text-[clamp(1.85rem,6.2vw,3.75rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-balance uppercase ${headingClass}`}
        >
          {profile.headline}
        </motion.h1>

        <motion.p
          {...enter(0.32)}
          className={`mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-pretty sm:mt-6 sm:text-base md:text-lg ${subClass}`}
        >
          {profile.summary}
        </motion.p>

        <motion.div
          {...enter(0.46)}
          className="mt-8 flex flex-col items-center gap-4 sm:mt-10 sm:gap-5"
        >
          <Link
            to="/about"
            className={`group inline-flex items-center gap-2 rounded-full border py-1 pl-1 pr-3.5 sm:gap-2.5 sm:py-1.5 sm:pl-1.5 sm:pr-4 ${ctaHoverMotionClass} ${ctaEffectClass}`}
          >
            <img
              src={profile.photo}
              alt=""
              width={32}
              height={32}
              className="h-7 w-7 shrink-0 rounded-full object-cover object-center ring-1 ring-line/60 transition-transform duration-500 group-hover:scale-105 sm:h-8 sm:w-8"
            />
            <span className="text-xs font-medium tracking-[-0.01em] sm:text-sm">
              {profile.ctaLabel}
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
