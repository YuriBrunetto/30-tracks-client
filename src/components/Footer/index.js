import React from 'react'

// Styles
import { FooterWrapper } from './styles'

const Footer = () => (
  <FooterWrapper>
    &copy; {new Date().getFullYear()} &mdash; Created by{' '}
    <a
      href="https://yuribrunetto.com.br"
      title="Created with 💚 by Yuri Brunetto"
    >
      Yuri Brunetto
    </a>
  </FooterWrapper>
)

export default Footer
