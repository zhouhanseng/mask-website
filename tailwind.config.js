module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minWidth: {
        "nav-links": "400px",
      },
      maxWidth: {
        "nav-logo": "140px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
