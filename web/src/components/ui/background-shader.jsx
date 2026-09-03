import { MeshGradient } from '@paper-design/shaders-react'
import { useTheme } from '../../theme/ThemeContext'

const darkColors = [
  'hsl(222, 42%, 4%)',
  'hsl(230, 50%, 12%)',
  'hsl(221, 65%, 28%)',
  'hsl(214, 70%, 38%)',
]

/* White base + darker brand blues so motion stays visible in light mode */
const lightColors = [
  'hsl(0, 0%, 100%)',
  'hsl(214, 45%, 72%)',
  'hsl(221, 50%, 58%)',
  'hsl(224, 55%, 42%)',
]

/**
 * Mesh background with strong theme-aware contrast layers.
 */
export default function BackgroundShader({ className = '' }) {
  const { isDark } = useTheme()

  return (
    <div
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}
      aria-hidden
    >
      <MeshGradient
        style={{ height: '100%', width: '100%' }}
        distortion={0.7}
        swirl={0.08}
        offsetX={0}
        offsetY={0}
        scale={1}
        rotation={0}
        speed={0.5}
        colors={isDark ? darkColors : lightColors}
      />

      {/* Base wash — keep light mode mostly white, don’t bury the blues */}
      <div
        className={`absolute inset-0 ${
          isDark ? 'bg-black/50' : 'bg-white/65'
        }`}
      />

      {/* Vertical fade */}
      <div
        className={`absolute inset-0 ${
          isDark
            ? 'bg-gradient-to-b from-black/40 via-transparent to-black/70'
            : 'bg-gradient-to-b from-white/55 via-transparent to-white/75'
        }`}
      />
    </div>
  )
}
