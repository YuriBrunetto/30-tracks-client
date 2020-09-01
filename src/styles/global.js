import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --green: #1db954;
    --black: #111;
  }

  ::selection {
    background-color: var(--black);
    color: var(--green);
  }

  * {
    box-sizing: border-box;
  }

  h1, h2, h3, p, img {
    margin: 0;
  }

  h1 {
    font-size: 48px;
    font-weight: 900;

    @media (max-width: 959px) {
      font-size: 24px;
    }
  }

  body {
    background-color: var(--black);
    color: #fff;
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

  .common-limiter {
    max-width: 960px;
    margin: 0 auto;

    @media (max-width: 1024px) {
      padding: 0 16px;
    }
  }
`

export default GlobalStyle
