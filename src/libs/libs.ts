export const THEME_VALUES = ['light', 'dark']
export const THEME_LABELS = ['Светлая', 'Темная']

export function readTheme(): number {
  let themeApp = Number(window.localStorage.getItem('theme') || window.matchMedia('(prefers-color-scheme: dark)').matches)
  if (themeApp !== 0 && themeApp !== 1) {
    themeApp = 0;
  }
  return themeApp
}

export function showTheme(theme: number) {
  document.documentElement.dataset.theme = THEME_VALUES[theme]
}
export function toggleTheme() {
  const theme = (readTheme() + 1) % 2
  window.localStorage.setItem('theme', theme.toString())
  showTheme(theme)
}