module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          1000: "#041B49",
        },
      },
      screens: {
        "max-sm": {
          max: "540px",
        },
        sm: {
          min: "540px",
        },
        md: "800px",
        hg: "1440px",
      },
      minWidth: {
        "nav-links": "450px",
        "nav-logo": "110px",
        280: "280px",
      },
      maxWidth: {
        xss: "240px",
        "nav-logo": "140px",
        "8xl": "1440px",
      },
      height: {
        "footer-body": "268px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  important: true,
};
