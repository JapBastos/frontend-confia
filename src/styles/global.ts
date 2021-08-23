import { createGlobalStyle } from 'styled-components';

import logoConfiax from '../assets/logo-confiax.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-size: 1.6rem;
    font-family: sans-serif;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: url(${logoConfiax}) no-repeat 70% top;
    background-color : #F0F0F5;
    -webkit-font-smoothing: antialiased;

  }

  img {
    max-width: 100%;
    display: block;
  }

  button {
    cursor: pointer;
  }

  #root {
    max-width: 96rem;
    margin: 0 auto;
    padding: 4rem 2rem;
  }
`;
