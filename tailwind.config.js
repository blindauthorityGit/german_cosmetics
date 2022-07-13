// /** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        container: {
            screens: {
                sm: "100%",
                md: "100%",
                lg: "1024px",
                xl: "1280px",
            },
        },
        extend: {
            colors: {
                primaryColor: "#A54399",
                darkPurple: "#473046",
                overlay: "#A54399",
                pink: "#e41aff",
                rosa: "#d77bbf",
                footer: "#526576",
                text: "#414646",
                lightGray: "#EEF0F2",
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
