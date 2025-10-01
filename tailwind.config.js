export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // make sure Tailwind scans your files
  ],
  theme: {
    extend: {
      screens: {
        'max-1400': {'max': '1400px'}, // custom breakpoint
      },
    },
  },
  plugins: [],
};
