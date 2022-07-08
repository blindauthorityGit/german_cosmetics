// /** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primaryColor: "#A54399",
                darkPurple: "#473046",
                overlay: "#A54399",
                pink: "#e41aff",
            },
            fontFamily: {
                ...fontFamily,
                sans: ["Montserrat", "sans-serif"],
                europa: ["europa", "sans-serif"],
            },
        },
    },
    plugins: [],
};
