import React from 'react'
import { SocioLogoIcon } from 'components/icons'
import HeaderMenu from './HeaderMenu'

require('./header.scss')

class Header extends React.Component {
  render () {
    return (
      <div className="header">
        <SocioLogoIcon />
        <HeaderMenu />
      </div>
    )
  }
}

export default Header
