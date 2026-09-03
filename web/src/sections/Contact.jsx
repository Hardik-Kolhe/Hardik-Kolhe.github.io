import { useState } from 'react'
import { Download, Mail, Phone } from 'lucide-react'
import { FadeIn } from '../components/FadeIn'
import { InstagramIcon, LinkedInIcon } from '../components/icons/SocialIcons'
import { profile } from '../data/portfolio'

export default function Contact() {
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const formData = new FormData(form)
    const senderEmail = formData.get('Email')
    if (senderEmail) {
      formData.set('_replyto', senderEmail)
    }
    try {
      const res = await fetch('https://formspree.io/f/mgaeoyvn', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const fieldClass =
    'w-full min-h-11 rounded-xl border border-line bg-page px-3 py-2.5 text-base text-ink outline-none transition placeholder:text-faint focus:border-brand/50 sm:text-sm'

  return (
    <section className="section-y relative bg-page">
      <div className="section-shell">
        <FadeIn>
          <h1 className="heading-xl">Contact</h1>
        </FadeIn>

        <div className="mt-8 grid gap-8 sm:mt-10 lg:mt-12 lg:grid-cols-2 lg:gap-12">
          <FadeIn>
            <div>
              <h3 className="text-xl font-semibold text-balance text-ink sm:text-2xl">
                Let&apos;s Build Something Useful
              </h3>
              <p className="body-text mt-3 sm:mt-4">
                Have an AI idea, a data challenge, or an interesting opportunity?
              </p>
              <p className="body-text mt-2">
                Let&apos;s connect and explore how{' '}
                <strong className="font-medium text-ink-soft">
                  data, machine learning, and AI
                </strong>{' '}
                can turn it into something useful.
              </p>
              <p className="body-text mt-2">
                Whether it&apos;s a project, collaboration, career opportunity, or
                simply an interesting conversation, feel free to reach out.
              </p>
              <p className="mt-3 font-medium text-ink-soft">
                Looking forward to hearing from you.
              </p>

              <ul className="mt-6 flex flex-wrap items-center gap-2 sm:mt-8 sm:gap-3">
                <li>
                  <a
                    href={profile.resume}
                    download={profile.resumeFileName}
                    className="inline-flex min-h-11 items-center gap-2 rounded-full border border-brand/40 bg-brand-dim px-3.5 text-sm font-medium text-brand-soft transition hover:border-brand hover:bg-brand/15 hover:text-ink sm:gap-3 sm:px-4"
                  >
                    <Download size={18} className="shrink-0" />
                    Download Resume
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-surface px-3.5 text-sm text-ink-soft transition hover:border-brand/40 hover:text-ink sm:gap-3 sm:px-4"
                  >
                    <Mail size={18} className="shrink-0 text-brand-soft" />
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-surface px-3.5 text-sm text-ink-soft transition hover:border-brand/40 hover:text-ink sm:gap-3 sm:px-4"
                  >
                    <LinkedInIcon size={18} className="shrink-0 text-brand-soft" />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={profile.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-surface px-3.5 text-sm text-ink-soft transition hover:border-brand/40 hover:text-ink sm:gap-3 sm:px-4"
                  >
                    <InstagramIcon size={18} className="shrink-0 text-brand-soft" />
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href={profile.phoneHref}
                    className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-surface px-3.5 text-sm text-ink-soft transition hover:border-brand/40 hover:text-ink sm:gap-3 sm:px-4"
                  >
                    <Phone size={18} className="shrink-0 text-brand-soft" />
                    {profile.phone}
                  </a>
                </li>
              </ul>

              <div className="mt-6 border-l-2 border-brand pl-4 sm:mt-8">
                <p className="text-sm font-semibold uppercase tracking-wide text-ink">
                  Availability
                </p>
                <p className="mt-1 text-muted">Open to new opportunities</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-line bg-surface p-4 sm:p-6 lg:p-8"
            >
              <div className="space-y-4 sm:space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-ink-soft"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="Name"
                    type="text"
                    required
                    autoComplete="name"
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-ink-soft"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="Email"
                    type="email"
                    required
                    autoComplete="email"
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-ink-soft"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="Message"
                    rows={5}
                    required
                    className={`${fieldClass} resize-y`}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="min-h-11 w-full rounded-full bg-brand px-5 py-3 text-sm font-semibold tracking-wide text-on-brand transition hover:bg-brand-strong disabled:opacity-60"
                >
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </button>
                {status === 'success' && (
                  <p className="text-sm font-medium text-emerald-400">
                    Thank you! Your message has been sent.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-sm font-medium text-red-400">
                    Something went wrong. Please email me directly or update the
                    Formspree ID.
                  </p>
                )}
              </div>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
