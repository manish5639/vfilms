module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif']
      },
      colors: {
        vfRed: '#e74a3b',
        vfNavy: '#17223b',
        vfPeach: '#f7eae6'
      }
    }
  },
  plugins: []
};