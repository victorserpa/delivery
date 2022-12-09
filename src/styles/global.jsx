import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: "background";
    color: "base-text";
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font-family: 'Baloo 2', cursive, 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
  
  /* @media (min-width: 700px) and (max-width:1200px){
    body{
      background: red;
    }
  } */
`;
