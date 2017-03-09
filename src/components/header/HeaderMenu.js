import React from 'react'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
import MenuIcon from './MenuIcon'
import DropdownButton from 'react-bootstrap/lib/DropdownButton'
import MenuItem from 'react-bootstrap/lib/MenuItem'
import _ from 'lodash'
import { NotificationIcon, MessageIcon } from 'components/icons'

class HeaderMenu extends React.Component {
  render () {
    return (
      <ButtonToolbar className="header-menu">
        <MenuIcon><MessageIcon /></MenuIcon>
        <MenuIcon count={10}><NotificationIcon /></MenuIcon>
        <DropdownButton title={<Title text="Teresa" imageUrl="" />} id="header-menu" className="profile-dropdown">
          <MenuItem eventKey="1">My Profile</MenuItem>
          <MenuItem eventKey="2">Logout</MenuItem>
        </DropdownButton>
      </ButtonToolbar>
    )
  }
}

function Title ({ text, imageUrl }) {
  return (
    <div>
      {text}
      <div className="avatar">
        {_.isEmpty(imageUrl) ? null : <img src={imageUrl} alt={text - 'Socio'} />}
      </div>
    </div>
  )
}

Title.prototype.propTypes = {
  text: React.PropTypes.string,
  imageUrl: React.PropTypes.string
}

export default HeaderMenu
