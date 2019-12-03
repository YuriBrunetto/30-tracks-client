import React from 'react'
import { Link } from 'react-router-dom'

// Styles
import { HeaderWrapper } from './styles'

const Header = () => (
  <HeaderWrapper>
    <Link to="/" className="logo" title="30 Tracks">
      30 Tracks
    </Link>
    <div className="user">
      <div className="avatar">
        <img
          src="https://tinyfac.es/data/avatars/AEF44435-B547-4B84-A2AE-887DFAEE6DDF-200w.jpeg"
          alt="Yuri Brunetto"
        />
      </div>
      <p>
        Hey, <strong>Yuri Brunetto</strong>!
      </p>
    </div>
  </HeaderWrapper>
)

export default Header
