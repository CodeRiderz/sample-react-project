import React from 'react'
import { Link } from 'react-router'
import moment from 'moment'
import { ConverenceIcon, WebinarIcon } from 'components/icons'

require('./conference-card.scss')

class ConverenceCard extends React.Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
    type: React.PropTypes.oneOf(['converence', 'webinar']),
    date: React.PropTypes.string.isRequired
  }

  render () {
    const { title, type, date } = this.props
    const eventDate = moment(date)

    return (
      <div className="conference-card">
        <div className="conference-icon">{getConverenceIcon(type)}</div>
        <h4>{title}</h4>
        <p><strong>{eventDate.format('ddd, MMM DD [at] HH:mm A')}</strong></p>
        <Link to="#" className="join-button" style={{ marginTop: '10px' }}>Join</Link>
      </div>
    )
  }
}

function getConverenceIcon (type) {
  switch (type) {
    case 'converence':
      return <ConverenceIcon />
    case 'webinar':
      return <WebinarIcon />
    default :
      return null
  }
}

export default ConverenceCard
