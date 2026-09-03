import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  Briefcase,
  Home,
  LayoutGrid,
  Mail,
  Menu,
  Moon,
  Sun,
  UserCircle,
  X,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
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
      className="mx-0.5 hidden h-4 w-px shrink-0 bg-line/70 md:block"
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
  const [isOpen, setIsOpen] = useState(false)

  const homeLink = navLinks[0]
  const mainLinks = navLinks.slice(1)

  const toggleMenu = () => setIsOpen((v) => !v)
  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const mainLinkClass = ({ isActive }) =>
    cn(
      'inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-xs font-medium transition-colors sm:px-2.5 sm:py-1.5',
      isActive
        ? 'text-ink'
        : 'text-muted hover:bg-surface-strong/60 hover:text-ink',
    )

  const homeLinkClass = ({ isActive }) =>
    cn(
      'inline-flex h-8 w-8 items-center justify-center rounded-full transition-colors',
      isActive
        ? 'bg-surface-strong text-ink'
        : 'text-muted hover:bg-surface-strong/60 hover:text-ink',
    )

  const mobileLinkClass = ({ isActive }) =>
    cn(
      'flex items-center gap-3 rounded-full px-4 py-2.5 text-base font-medium transition-colors',
      isActive
        ? 'bg-surface-strong text-ink'
        : 'text-ink hover:bg-surface-strong/70',
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
      {theme === 'dark' ? <Sun size={15} strokeWidth={1.75} /> : <Moon size={15} strokeWidth={1.75} />}
    </motion.button>
  )

  return (
    <header className="fixed top-0 z-50 flex w-full justify-center px-4 py-3 sm:py-3.5">
      <div className="relative z-10 flex items-center rounded-full border border-line/80 bg-surface/95 px-1.5 py-1 shadow-md shadow-shadow/50 backdrop-blur-xl sm:px-2 sm:py-1.5">
        {/* Desktop dock nav */}
        <div className="hidden items-center md:flex">
          <NavLink
            to={homeLink.to}
            end
            aria-label={homeLink.label}
            className={homeLinkClass}
          >
            <NavIcon name={homeLink.icon} />
          </NavLink>

          <NavDivider />

          <nav className="flex items-center gap-0.5">
            {mainLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={mainLinkClass}
              >
                <NavIcon name={item.icon} />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>

          <NavDivider />

          {themeButton}
        </div>

        {/* Mobile nav */}
        <div className="flex items-center gap-1 md:hidden">
          <NavLink
            to={homeLink.to}
            end
            aria-label={homeLink.label}
            className={homeLinkClass}
          >
            <NavIcon name={homeLink.icon} />
          </NavLink>

          <NavDivider />

          {themeButton}

          <motion.button
            type="button"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full text-ink"
            onClick={toggleMenu}
            aria-label="Open menu"
            whileTap={{ scale: 0.9 }}
          >
            <Menu className="h-4 w-4" strokeWidth={1.75} />
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-page px-6 pt-24 md:hidden"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <motion.button
              type="button"
              className="absolute top-6 right-6 p-2 text-ink"
              onClick={closeMenu}
              aria-label="Close menu"
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
            >
              <X className="h-6 w-6" />
            </motion.button>

            <div className="flex flex-col space-y-2">
              {navLinks.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 + 0.1 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={mobileLinkClass}
                    onClick={closeMenu}
                  >
                    <NavIcon name={item.icon} size={18} />
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar1
