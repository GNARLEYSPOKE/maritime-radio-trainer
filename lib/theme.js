// Centralized color tokens per view.
// Each key maps to a view name used in the router.
// Components read from here so a palette swap is a single-file edit.

export const viewThemes = {
  home: {
    headerBg: 'bg-blue-900',
    headerText: 'text-white',
    headerSubtext: 'text-blue-200',
    accent: 'bg-blue-600',
    accentHover: 'hover:bg-blue-700',
  },
  section: {
    headerBg: 'bg-blue-900',
    headerText: 'text-white',
    headerSubtext: 'text-blue-200',
    accent: 'bg-blue-600',
    accentHover: 'hover:bg-blue-700',
  },
  phonetic: {
    headerBg: 'bg-purple-700',
    headerText: 'text-white',
    headerSubtext: 'text-purple-200',
    accent: 'bg-purple-600',
    accentHover: 'hover:bg-purple-700',
  },
  distress: {
    headerBg: 'bg-red-800',
    headerText: 'text-white',
    headerSubtext: 'text-red-200',
    accent: 'bg-red-600',
    accentHover: 'hover:bg-red-700',
  },
  exam: {
    headerBg: 'bg-green-800',
    headerText: 'text-white',
    headerSubtext: 'text-green-200',
    accent: 'bg-green-600',
    accentHover: 'hover:bg-green-700',
  },
};

// Shared palette tokens used across the shell (NavBar, Footer, SponsorsBar)
export const shell = {
  navBg: 'bg-blue-950',
  navText: 'text-white',
  navActive: 'bg-blue-600',
  navHover: 'hover:bg-blue-800',
  footerBg: 'bg-blue-950',
  footerText: 'text-blue-300',
  footerLink: 'text-blue-200 hover:text-white',
  footerMuted: 'text-blue-400',
  sponsorsBg: 'bg-gray-100',
  sponsorsText: 'text-gray-500',
  sponsorsHeading: 'text-gray-700',
  pageBg: 'bg-gray-50',
};
