/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./docs/**/*.{md,mdx}",
        "./src/**/*.{js,jsx,ts,tsx}",
        "./blog/**/*.{md,mdx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    corePlugins: {
        preflight: false,
    },
};
