module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                wallpaper:
                    "url('/images/background-with-plane-blank-space-father-s-day (1).jpg')",
            },
            cart: {
                svg: "url('/Users/nikolozchiradze/Downloads/shopping-cart-outline-svgrepo-com.svg')",
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
