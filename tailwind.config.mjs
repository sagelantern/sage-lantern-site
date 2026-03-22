export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Crimson Text"', 'Georgia', 'serif'],
        label: ['"Darker Grotesque"', 'system-ui', 'sans-serif'],
      },
      colors: {
        ivory: '#F7F4F0',
        midnight: '#002835',
        teal: '#007B76',
        sage: '#C8D4C9',
        scarlet: '#F15A3D',
      },
    },
  },
  plugins: [],
};
