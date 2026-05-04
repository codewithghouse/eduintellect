/**
 * Edullent brand theme — extracted from src/index.css and the dashboard pages.
 * Used across every Remotion scene so colors / fonts stay consistent with the
 * marketing site.
 */

export const theme = {
  fontStack:
    "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Arial, sans-serif",
  fontMono:
    'ui-monospace, SFMono-Regular, Menlo, Monaco, "Courier New", monospace',

  // Apple-style canvas backgrounds (light surfaces used by the website)
  bgLight: '#fbfbfd',
  bgLightAlt: '#f5f5f7',

  // Premium dark canvas used by the video keynote scenes
  bgDark: '#000000',
  bgDarkAlt: '#0a0a0f',
  bgDarkPanel: '#111118',

  // Brand colors (from --color-brand-* tokens + dashboard accents)
  brand500: '#0071e3',
  brand600: '#0077ed',
  brand700: '#005bb5',
  brand900: '#003570',
  ink: '#1d1d1f',
  inkSoft: '#86868b',
  inkSofter: '#d2d2d7',

  // Per-role accent colors (extracted from each dashboard's eyebrow hex)
  ownerAccent: '#0055FF',
  principalAccent: '#0055FF',
  teacherAccent: '#0055FF',
  parentAccent: '#0044CC',

  // Severity / status palette used inside USP cards
  red: '#FF3355',
  amber: '#FF8800',
  green: '#00C853',
  gold: '#FFD700',
  purple: '#6741d9',

  // Typography helpers
  letterSpacingTight: '-0.035em',
  letterSpacingDisplay: '-0.022em',

  // Radii from the website (Tailwind: rounded-3xl = 24, rounded-[12px], etc.)
  radius: {
    sm: 10,
    md: 14,
    lg: 18,
    xl: 24,
    '2xl': 32,
  },
} as const;
