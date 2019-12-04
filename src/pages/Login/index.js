import React from 'react'

// Styles
import { LoginWrapper } from './styles'

const Login = () => (
  <LoginWrapper>
    <header>
      <h1>30 Tracks</h1>
      <h2>
        Monthly top 30 Spotify tracks by <strong>you</strong>.
      </h2>

      <p>
        Simply login with your Spotify account and see a mosaic of your 30
        favorites tracks of the <em>last 4 weeks</em>!
      </p>
    </header>

    <a
      href="https://hungry-yalow-d003ef.netlify.com/.netlify/functions/server/login"
      title="Login to Spotify"
      className="login"
    >
      Login to Spotify
    </a>
  </LoginWrapper>
)

export default Login
