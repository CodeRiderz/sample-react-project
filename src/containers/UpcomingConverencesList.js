import React from 'react'
import ConverenceCard from 'components/cards/ConverenceCard'

class UpcomingConverencesList extends React.Component {
  render () {
    return (
      <div>
        <ConverenceCard
          title="Explore Milineial HTML 5 Keynote"
          date="Thu Apr 30 2017 15:30:00 GMT+0700 (WIB)"
          type="converence" />
        <ConverenceCard
          title="Explore Milineial HTML 5 Keynote"
          date="Thu Apr 30 2017 15:30:00 GMT+0700 (WIB)"
          type="webinar" />
      </div>
    )
  }
}

export default UpcomingConverencesList
