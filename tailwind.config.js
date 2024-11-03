module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // This ensures Tailwind scans your files
  ],
  theme: {
    extend: {
      colors: {
        pinkPanda: '#ff0087', // Your custom color in HEX
      },
    },
  },
  plugins: [],
};
