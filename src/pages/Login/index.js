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
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
        sint unde itaque sit nulla neque! Magni, voluptatibus quasi, esse
        inventore ullam architecto minus odit obcaecati impedit amet iste
        consectetur consequuntur.
      </p>
    </header>

    <a
      href="http://localhost:8888/login"
      title="Login to Spotify"
      className="login"
    >
      Login to Spotify
    </a>
  </LoginWrapper>
)

export default Login
