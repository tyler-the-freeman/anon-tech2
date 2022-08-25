const theme = {
  config: {
    useCustomProperties: true,
  },
  colors: {
    primary: `#ffffff`,
    secondary: `#00ffe5`,
    text: `#ffffff`,
    accent: `#ffffff`,
    highlight: `#ffffff`,
    heading: `#ffffff`,
    background: `#000000`,
  },
  fonts: {
    body: '\'DM Sans\', sans-serif',
    heading: '\'Bebas Neue\', cursive',
  },
  breakpoints: [`400px`, `600px`, `900px`, `1200px`, `1600px`],
  styles: {
    root: {
      margin: 0,
      padding: 0,
    },
    p: {
      fontSize: [14, 14, 18, 18, 18],
      fontFamily: 'body',
      mx: 10,
      color: `text`,
      lineHeight: `2`,
      textDecorationColor: `none`
    },
    h1: {
      fontSize: [50, 60, 94, 94, 94],
      fontFamily: 'heading',
      mt: 0,
      mb: -10,
      mx: 10,
      color: `heading`,
    },
    h2: {
      fontSize: 70,
      fontFamily: 'heading',
      color: `heading`,
    },
    h3: {
      fontSize: 25,
      fontFamily: 'heading',
      color: `yellow`,
    },
    h4: {
      fontSize: [24, 40, 50, 50, 50],
      mt: 0,
      mb: 0,
      fontFamily: 'heading',
      color: `primary`,
    },
    h5: {
      fontSize: 24,
      fontFamily: 'heading',
      mt: 20,
      mx: 10,
      color: `secondary`,
    },
    h6: {
      fontSize: [14, 20, 20, 20,20],
      fontFamily: 'heading',
      mt: 0,
      mb: -10,
      mx: 10,
      color: `heading`,
    },
    h8: {
      fontSize: [14, 20, 20, 20,20],
      fontFamily: 'heading',
      mt: 0,
      mb: -10,
      mx: 10,
      color: `heading`,
    },
  },
}

export default theme