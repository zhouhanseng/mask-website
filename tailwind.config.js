module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          1000: "#041B49",
          mask: "#1C68F3",
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
      minHeight: {
        "hg-about-content": "767px",
        "md-about-content": "567px",
      },
      minWidth: {
        "nav-links": "450px",
        "nav-logo": "110px",
        "about-image": "480px",
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
