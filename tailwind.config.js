module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      center: true,
    },
    height: {
      pfull: '100%',
      p25: '25%',
      p50: '50%',
      v25: '25vh',
      v50: '50vh',
      v75: '75vh',
      v100: '100vh',
    },
    width: {
      pfull: '100%',
      p50: '50%',
      p75: '75%',
      v2: '2vw',
      v25: '25vw',
      v50: '50vw',
      v75: '75vw',
      v98: '98vw',
      v100: '100vw',
    },
    margin: {
      rem05: '0,5rem',
      rem: '1rem',
      rem2: '2rem',
      vh15: '15vh',
      vh25: '25vh',
      vh30: '30vh',
      vh50: '50vh',
      vw25: '25vw',
      p10: '10%',
      p25: '25%',
      p50: '50%',
      auto: 'auto',
    },
    padding: {
      rem05: '0,5rem',
      rem: '1rem',
      rem2: '2rem',
      auto: 'auto',
      p50: '50%',
      vh25: '25vh',
    },
    maxWidth: {
      '1/2': '50%',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
