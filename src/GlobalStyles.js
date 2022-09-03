
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

const GlobalStyles = createGlobalStyle`

  ${normalize()}

  * {

    padding: 0;
    margin: 0;
    box-sizing: border-box;

  }

  html {

    font-family: sans-serif;
    font-size: 110%;

  }

`;

export default GlobalStyles;