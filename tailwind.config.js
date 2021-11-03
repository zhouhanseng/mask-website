module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            'sm': { 'max': '767px' },
            'md': { 'min': '768px', 'max': '1279px' },
            'lg': { 'min': '1280px', 'max': '1535px' },
            'max-md': { 'max': '1279px' },
            'min-lg': { 'min': '1280px' },
            '2xl': { 'min': '1536px' },
        },
        container: {
            padding: {
                DEFAULT: '1rem',
            },
            margin: {
                DEFAULT: '1rem',
                sm: '1rem',
                md: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
                'max-md': '2rem'
            },
        },
        extend: {
            zIndex: {
                2000: "2000",
            },
            dropShadow: {
                "news-letter": "0 6px 3px rgba(66, 135, 245, 0.15)",
            },
            colors: {
                blue: {
                    1000: "#041B49",
                    mask: "#1C68F3",
                    cookies: "#112F6C",
                },
                gray: {
                    1000: "#0B1117",
                    description: "#777E91",
                    background: "#F5F9FF",
                    h2: "#E6E8EC"
                },
            },
            // screens: {
            //   "max-xsm": {
            //     max: "400px",
            //   },
            //   "max-sm": {
            //     max: "540px",
            //   },
            //   sm: {
            //     min: "540px",
            //   },
            //   md: "850px",
            //
            //   hg: "1440px",
            // },
            minHeight: {
                "hg-about-content": "767px",
                "md-about-content": "567px",
                "screen-2/5": "40vh",
            },
            minWidth: {
                "nav-links": "450px",
                "nav-logo": "110px",
                "about-image": "480px",
                280: "280px",
                '2/5': '40%'
            },
            maxWidth: {
                xss: "240px",
                "nav-logo": "140px",
                "8xl": "1440px",
                "1/2": '50vw',
                "1/3": '33vw',
            },
            maxHeight: {
                'screen-1/3': "30vh"
            },
            height: {
                "footer-body": "268px",
            },
            width: {
                "download-badge": "180px",
                "download-badge-sm": "135px",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
    important: true,
}
