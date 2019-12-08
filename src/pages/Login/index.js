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
      href="https://thirty-tracks-backend.herokuapp.com/login"
      title="Login to Spotify"
      className="login"
    >
      Login to Spotify
    </a>

    <div className="github">
      Source on{' '}
      <a
        href="https://github.com/YuriBrunetto/30-tracks-client"
        title="Source on GitHub"
        target="_blank"
      >
        GitHub
      </a>
    </div>
  </LoginWrapper>
)

export default Login
