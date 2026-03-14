/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                gymfinity: {
                    50: '#e6f7f6',
                    100: '#def2f1',
                    200: '#b8e6e4',
                    300: '#7dd3d0',
                    400: '#3aafa9',
                    500: '#2f9d97',
                    600: '#2b7a78',
                    700: '#245f5d',
                    800: '#1f4e4c',
                    900: '#17252a',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
                display: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
