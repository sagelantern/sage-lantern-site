export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Recursive"', 'system-ui', 'sans-serif'],
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
      },
      colors: {
        'bg-harbor': '#111618',
        'bg-watch': '#182126',
        'bg-chart': '#0B0F11',
        'line-tide': '#2A353A',
        'text-salt': '#E6DDCF',
        'text-fog': '#B8AE9D',
        'text-dim': '#7D7A72',
        lantern: '#D38A2C',
        'lantern-soft': '#B56E1F',
        glass: '#6E8B8C',
        copper: '#9B5C43',
        'signal-red': '#B6543A',
        'moss-ash': '#6F7C6C',
      },
    },
  },
  plugins: [],
};
