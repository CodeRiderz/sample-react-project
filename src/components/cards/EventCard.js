import React from 'react'
import moment from 'moment'

require('./event-card.scss')

class EventCard extends React.Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
    location: React.PropTypes.string.isRequired,
    date: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ])
  }

  render () {
    const { title, date, location } = this.props
    const eventDate = moment(date)

    return (
      <div className="event-card">
        <div className="event-date">
          <div className="month">{eventDate.format('MMMM')}</div>
          <div className="date">{eventDate.format('DD')}</div>
        </div>
        <h4>{title}</h4>
        <p><strong>{eventDate.format('ddd, MMM DD [at] HH:mm A')}</strong></p>
        <p>@{location}</p>
      </div>
    )
  }
}

export default EventCard
