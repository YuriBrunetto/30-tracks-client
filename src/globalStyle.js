import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --green: #1db954;
    --black: #191414;
  }

  * {
    box-sizing: border-box;
  }

  h1, h2, h3, p, img {
    margin: 0;
  }

  body {
    background-color: #fff;
    color: var(--black);
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
  }
`

export default GlobalStyle
