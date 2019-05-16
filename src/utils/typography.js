import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: [
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Georgia", "serif"],
  googleFonts: [
  {
    name: 'Montserrat',
    styles: [
      '700',
    ],
  },
  {
    name: 'Merriweather',
    styles: [
      '400',
      '400i',
      '700',
      '700i',
    ],
  },
  {
    name: 'Abril Fatface',
    styles: [
      'cursive'
    ],
  },
  {
    name: 'Source Sans Pro',
    styles: [
      '200',
      '200i',
      '300',
      '300i',
      '400',
      '400i',
      '600',
      '600i'
    ],
  },
  {
    name: 'Pacifico',
    styles: [
      '400',
    ],
  },
],
})

export default typography
