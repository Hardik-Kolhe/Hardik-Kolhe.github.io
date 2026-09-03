import { Mail } from 'lucide-react'
import { profile } from '../../data/portfolio'
import { GitHubIcon, InstagramIcon, LinkedInIcon } from '../icons/SocialIcons'
import { AnimatedDock } from '../ui/animated-dock'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-page py-8 sm:py-10">
      <div className="section-shell flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:gap-6 sm:text-left">
        <p className="max-w-md text-xs leading-relaxed text-faint sm:text-sm">
          Copyright © {year} {profile.name}. All rights reserved.
        </p>

        <AnimatedDock
          items={[
            {
              link: profile.linkedin,
              target: '_blank',
              label: 'LinkedIn',
              Icon: <LinkedInIcon size={22} />,
            },
            {
              link: `mailto:${profile.email}`,
              label: 'Email',
              Icon: <Mail size={22} />,
            },
            {
              link: profile.github,
              target: '_blank',
              label: 'GitHub',
              Icon: <GitHubIcon size={22} />,
            },
            {
              link: profile.instagram,
              target: '_blank',
              label: 'Instagram',
              Icon: <InstagramIcon size={22} />,
            },
          ]}
        />
      </div>
    </footer>
  )
}
