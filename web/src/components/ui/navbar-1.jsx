import { NavLink } from 'react-router-dom'
import {
  Briefcase,
  Home,
  LayoutGrid,
  Mail,
  Moon,
  Sun,
  UserCircle,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { navLinks } from '../../data/portfolio'
import { useTheme } from '../../theme/ThemeContext'
import { cn } from '../../utils'

const navIcons = {
  home: Home,
  user: UserCircle,
  briefcase: Briefcase,
  'layout-grid': LayoutGrid,
  mail: Mail,
}

function NavDivider() {
  return (
    <span
      className="mx-0.5 h-4 w-px shrink-0 bg-line/70"
      aria-hidden
    />
  )
}

function NavIcon({ name, size = 15 }) {
  const Icon = navIcons[name] ?? Home
  return <Icon size={size} strokeWidth={1.75} aria-hidden />
}

export function Navbar1() {
  const { theme, toggleTheme } = useTheme()

  const homeLink = navLinks[0]
  const mainLinks = navLinks.slice(1)

  const iconLinkClass = ({ isActive }) =>
    cn(
      'inline-flex h-8 w-8 items-center justify-center rounded-full transition-colors',
      isActive
        ? 'bg-surface-strong text-ink'
        : 'text-muted hover:bg-surface-strong/60 hover:text-ink',
    )

  const desktopMainLinkClass = ({ isActive }) =>
    cn(
      'inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-xs font-medium transition-colors sm:px-2.5 sm:py-1.5',
      isActive
        ? 'text-ink'
        : 'text-muted hover:bg-surface-strong/60 hover:text-ink',
    )

  const themeButton = (
    <motion.button
      type="button"
      onClick={toggleTheme}
      aria-label={
        theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
      }
      className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-muted transition hover:bg-surface-strong/60 hover:text-ink"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {theme === 'dark' ? (
        <Sun size={15} strokeWidth={1.75} />
      ) : (
        <Moon size={15} strokeWidth={1.75} />
      )}
    </motion.button>
  )

  return (
    <header className="fixed top-0 z-50 flex w-full justify-center px-3 py-3 sm:px-4 sm:py-3.5">
      <div className="relative z-10 flex items-center rounded-full border border-line/80 bg-surface/95 px-1.5 py-1 shadow-md shadow-shadow/50 backdrop-blur-xl sm:px-2 sm:py-1.5">
        {/* Mobile: all 6 icons */}
        <div className="flex items-center gap-0.5 md:hidden">
          <NavLink
            to={homeLink.to}
            end
            aria-label={homeLink.label}
            className={iconLinkClass}
          >
            <NavIcon name={homeLink.icon} />
          </NavLink>

          <NavDivider />

          <nav className="flex items-center gap-0.5">
            {mainLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                aria-label={item.label}
                className={iconLinkClass}
              >
                <NavIcon name={item.icon} />
              </NavLink>
            ))}
          </nav>

          <NavDivider />

          {themeButton}
        </div>

        {/* Desktop: icons + labels */}
        <div className="hidden items-center md:flex">
          <NavLink
            to={homeLink.to}
            end
            aria-label={homeLink.label}
            className={iconLinkClass}
          >
            <NavIcon name={homeLink.icon} />
          </NavLink>

          <NavDivider />

          <nav className="flex items-center gap-0.5">
            {mainLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={desktopMainLinkClass}
              >
                <NavIcon name={item.icon} />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>

          <NavDivider />

          {themeButton}
        </div>
      </div>
    </header>
  )
}

export default Navbar1
