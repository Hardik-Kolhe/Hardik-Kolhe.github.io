(function () {
  const root = document.documentElement
  const themeButton = document.getElementById('theme-toggle')
  const sunIcon = document.getElementById('theme-icon-sun')
  const moonIcon = document.getElementById('theme-icon-moon')

  function syncThemeIcons() {
    const isDark = root.getAttribute('data-theme') !== 'light'
    if (sunIcon) sunIcon.style.display = isDark ? 'block' : 'none'
    if (moonIcon) moonIcon.style.display = isDark ? 'none' : 'block'
  }

  function setTheme(theme) {
    root.setAttribute('data-theme', theme)
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* ignore */
    }
    syncThemeIcons()
  }

  if (themeButton) {
    themeButton.addEventListener('click', function () {
      const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light'
      setTheme(next)
    })
  }

  syncThemeIcons()

  const path = window.location.pathname.replace(/\/index\.html$/, '').replace(/\/$/, '')
  const onProjectDetail = /\/projects\/[^/]+$/.test(path)

  document.querySelectorAll('[data-nav-path]').forEach(function (link) {
    const target = link.getAttribute('data-nav-path')

    if (onProjectDetail && target === '/projects') {
      link.classList.add('is-active')
      return
    }

    if (target === '/') {
      if (!onProjectDetail && !path.match(/\/(about|experience|projects|contact)(\/|$)/)) {
        link.classList.add('is-active')
      }
      return
    }

    if (path.endsWith(target)) {
      link.classList.add('is-active')
    }
  })
})()
