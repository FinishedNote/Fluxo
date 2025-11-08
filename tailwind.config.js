/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app.{js,jsx,ts,tsx}",
        "./app/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                primary: "#1149FF",
                tint: "#242424",
                tintLight: "#949494",
                backgound: "#020202",
                card: "#121212",
                border: "#2C2C2C",
            }
        },
    },
    plugins: [],
};
