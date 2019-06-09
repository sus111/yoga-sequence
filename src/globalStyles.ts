import reset from 'styled-reset';

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

const colors = {
  gulfStream: '#7BAFA8',
  opaqueBlack: 'rgba(0, 0, 0, 0.5)',
  mineShaft: '#303030',
  white: '#FFF',
};

export {
  colors,
  globalStyles,
};
