/** @type {import('tailwindcss').Config} */
module.exports = {
  // Tailwind przeszukuje te pliki i generuje CSS tylko dla klas, których naprawdę używasz.
  content: ['./*.html'],
  theme: {
    extend: {
      colors: { sign: '#0b4f9c', signal: '#ffc800', ink: '#13202f', paper: '#eef1f4', line: '#c9d2dc', muted: '#4a5968' },
      fontFamily: { display: ['"Barlow Condensed"', 'sans-serif'], sans: ['Barlow', 'sans-serif'] }
    }
  }
};
