import reset from 'styled-reset';

const colors = {
  white: 'hsl(0, 0%, 100%)',
  gorse: 'hsl(58, 100%, 66%)', // brand yellow
  pampas: 'hsl(60, 23%, 97%)', // BG
  grayChateau: 'hsl(210, 7%, 62%)', // subheader
  shark: 'hsl(210, 6%, 20%)',
};

const globalStyles = `
  ${reset};

  body {
    font-family: 'Futura Tee', arial, sans-serif;
    margin: 0;
    font-family: 'Palanquin', 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export {
  colors,
  globalStyles,
};
