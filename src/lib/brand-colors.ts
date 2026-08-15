/**
 * Three.js materials read raw color values, not CSS custom properties, so these
 * mirror the brand tokens defined in src/index.css (--color-brand-*). Keep the
 * two in sync if the palette changes.
 */
export const brandColors = {
  navy: '#0b1b33',
  navyLight: '#16293f',
  gold: '#deb13b',
  goldLight: '#edc964',
  goldDark: '#9b7414',
  cream: '#f8f6ef',
  slate: '#4d5968',
  muted: '#b8c2d0',
} as const
