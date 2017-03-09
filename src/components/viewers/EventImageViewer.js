import React from 'react'
import EventCard from 'components/cards/EventCard'
import { connect } from 'react-redux'
import { callModalEvent } from 'actions/modalActions'

require('./event-image-viewer.scss')

class EventImageViewer extends React.Component {
  static propTypes = {
    event: React.PropTypes.object,
    callModalEvent: React.PropTypes.func
  }

  get handleCallModal () {
    const { event: { title, date, location, description, image }, callModalEvent } = this.props
    return () => {
      callModalEvent(title, date, location, description, image)
    }
  }

  render () {
    const { event } = this.props

    if (!event) return null

    return (
      <div className="event-image-viewer">
        <div className="image-wrapper">
          <img src={event.image} />
        </div>
        <EventCard title={event.title} location={event.location} date={event.date} />
        <div className="description">
          <p>{event.description.split(' ').slice(0, 21).join(' ')}... <a href="#" onClick={this.handleCallModal}>more</a></p>
        </div>
      </div>
    )
  }
}

export default connect(null, { callModalEvent })(EventImageViewer)
