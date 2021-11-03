module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            'sm': { 'max': '667px' },
            'md': { 'min': '668px', 'max': '1279px' },
            'md-container': { 'min': '1024px', 'max': '1279px' },
            'lg': { 'min': '1280px', 'max': '1535px' },
            'max-md': { 'max': '1279px' },
            'min-lg': { 'min': '1280px' },
            '2xl': { 'min': '1536px' },
        },
        container: {
            padding: {
                DEFAULT: '1rem',
            },
            maxWidth: {
                'md-container': '968px',
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
            animation: {
                'spin-once': 'spin 3s linear',
            },
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
                black: {
                    main: '#1B1B1B'
                }
            },
            minHeight: {
                "hg-about-content": "767px",
                "md-about-content": "567px",
                "screen-2/5": "40vh",
                "276": "290px",
                "396": "305px",
                "564": "564px",
                "300": "300px",
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
                800: "800px",
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
