import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Montserrat";
    src: url('/Montserrat-Regular.ttf');
    font-weight: normal;
  }

  *, *::before, *::after{
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 0;
    margin: 0;
  }
 
  body{
    min-height: 100vh;
    font-family: "Montserrat", sans-serif;
  }
`;

export default GlobalStyles;
