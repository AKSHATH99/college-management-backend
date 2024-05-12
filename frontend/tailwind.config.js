module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px',
        'phone': {'max': '500px'}, // Custom breakpoint for phone screens
      },
    },
  },
  plugins: [],
}