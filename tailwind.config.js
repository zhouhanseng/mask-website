module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        "max-sm": {
          max: "540px",
        },
        sm: {
          min: "540px",
        },
        md: "800px",
      },
      minWidth: {
        "nav-links": "450px",
        "nav-logo": "110px",
        280: "280px",
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
