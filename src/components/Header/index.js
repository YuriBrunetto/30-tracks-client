import React from 'react'
import { Link } from 'react-router-dom'

// Styles
import { HeaderWrapper } from './styles'

const Header = props => (
  <HeaderWrapper>
    <Link to="/" className="logo" title="30 Tracks">
      30 Tracks
    </Link>

    {props.user && (
      <div className="user">
        <div className="avatar">
          <img src={props.user.images[0].url} alt={props.user.display_name} />
        </div>
        <p>
          Hey, <strong>{props.user.display_name}</strong>!
        </p>
      </div>
    )}
  </HeaderWrapper>
)

export default Header
