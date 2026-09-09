/**
 * Aurora — satellite Dripnex theme.
 * Token layer only. Same contract as a community theme repo.
 * Must be CommonJS.
 *
 * Northern lights. Teal/violet aurora.
 */

const TOKENS = {
  '--bg-base': '#07101a',
  '--bg-surface': '#0c1a28',
  '--bg-elevated': '#142838',
  '--bg-inset': '#040a12',
  '--bg-hover': 'rgba(224, 255, 246, 0.06)',
  '--bg-active': 'rgba(224, 255, 246, 0.1)',
  '--text-primary': '#e0fff6',
  '--text-secondary': 'rgba(224, 255, 246, 0.74)',
  '--text-muted': 'rgba(224, 255, 246, 0.52)',
  '--text-faint': 'rgba(224, 255, 246, 0.34)',
  '--border': 'rgba(224, 255, 246, 0.12)',
  '--border-subtle': 'rgba(224, 255, 246, 0.07)',
  '--border-strong': 'rgba(224, 255, 246, 0.18)',
  '--accent': '#5ef0c8',
  '--accent-hover': '#7ff5d6',
  '--accent-muted': 'rgba(94, 240, 200, 0.2)',
  '--accent-subtle': 'rgba(94, 240, 200, 0.1)',
  '--glass-bg': 'rgba(7, 16, 26, 0.92)',
  '--glass-border': 'rgba(224, 255, 246, 0.1)',
  '--glass-bg-menu': 'rgba(20, 40, 56, 0.96)',
  '--glass-border-menu': 'rgba(224, 255, 246, 0.1)',
  '--status-active': '#5ef0c8',
  '--status-on-hold': '#c9a45c',
  '--status-completed': '#6ad4a0',
  '--status-dropped': '#cf6875',
};

module.exports = {
  id: 'theme-aurora',
  name: 'Aurora',
  version: '0.1.0',
  description: "Northern lights. Teal/violet aurora.",

  activate(context) {
    const remove = context.registerTheme({
      id: 'dripnex-aurora',
      name: 'Aurora',
      description: "Northern lights. Teal/violet aurora.",
      author: 'Dripnex',
      colorScheme: 'dark',
      tokens: TOKENS,
    });

    return {
      dispose() {
        remove();
      },
    };
  },
};
