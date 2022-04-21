import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Raleway', sans-serif;
    font-size: 18px;
  }
  
  #root {
    max-width: 1440px;
    margin: 0 auto;
  }
`
