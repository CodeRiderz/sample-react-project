import React from 'react'
import EventCard from 'components/cards/EventCard'

class UpcomingEventList extends React.Component {
  render () {
    return (
      <div>
        <EventCard
          title="Explore Milineial HTML 5 Keynote"
          date={'Thu Apr 30 2017 15:30:00 GMT+0700 (WIB)'}
          location="New Yourk Universty" />
        <EventCard
          title="Explore Milineial HTML 5 Keynote"
          date={'Thu Apr 30 2017 15:30:00 GMT+0700 (WIB)'}
          location="New Yourk Universty" />
        <EventCard
          title="Explore Milineial HTML 5 Keynote"
          date={'Thu Apr 30 2017 15:30:00 GMT+0700 (WIB)'}
          location="New Yourk Universty" />
      </div>
    )
  }
}

export default UpcomingEventList
