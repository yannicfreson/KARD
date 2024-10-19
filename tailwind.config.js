/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            fontFamily: {
                aring: ['"Aring"', "sans-serif"],
                balbek: ['"Balbek"', "sans-serif"],
                wanderer: ['"Wanderer"', "sans-serif"],
                asteroid: ['"Asteroid"', "sans-serif"],
                ringstun: ['"Ringstun"', "sans-serif"],
            },
            colors: {
                "accent-light": "#eea20c",
                "accent-dark": "#f0980e",
            },
        },
    },
    plugins: [],
}
