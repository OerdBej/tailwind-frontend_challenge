/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./*.html'],
    theme: {
        screens: {
            sm: '480',
            md: '768',
            lg: '976',
            xl: '1440px',
        },
        extend: {
            fontFamily: {
                sans: ['Josefin Sans', 'sans-serif'],
                alata: ['Alata'],
            },
        },
    },
    plugins: [],
};
