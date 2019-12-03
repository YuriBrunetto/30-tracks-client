import styled from 'styled-components'

export const LoginWrapper = styled.section`
  height: 100vh;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  header {
    text-align: center;
    max-width: 600px;
    padding: 0 16px;

    h1 {
      font-size: 48px;
      font-weight: 900;
    }

    h2 {
      font-weight: normal;
      font-style: italic;
      font-size: 20px;
      margin-top: 2px;
      color: var(--green);
    }

    p {
      margin-top: 16px;
      line-height: 150%;
    }
  }

  .login {
    background-color: var(--green);
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    margin-top: 32px;
    padding: 16px 32px;
    letter-spacing: 4px;
    height: 50px;
    border-radius: 25px;
    font-size: 14px;
    transition: 0.3s;
    will-change: box-shadow, letter-spacing;

    &:hover {
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
      letter-spacing: 5px;
    }
  }
`
