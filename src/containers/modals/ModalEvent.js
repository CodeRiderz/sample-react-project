import React from 'react'
import { connect } from 'react-redux'
import { CloseCircleIcon } from 'components/icons'
import { dismissModalEvent } from 'actions/modalActions'
import EventCard from 'components/cards/EventCard'

require('./modal-event.scss')

class ModalEvent extends React.Component {
  static propTypes = {
    modalEvent: React.PropTypes.object,
    dismissModalEvent: React.PropTypes.func
  }

  get handleModalDismiss () {
    const { dismissModalEvent } = this.props
    return () => {
      dismissModalEvent()
    }
  }

  render () {
    const { modalEvent } = this.props

    if (!modalEvent.active) return null

    return (
      <div className="modal-wrapper">
        <div className="modal-content modal-event">
          <div className="image-wrapper">
            <img src={modalEvent.image} />
          </div>
          <EventCard title="" location={modalEvent.location} date={modalEvent.date} />
          <div className="description">
            <h3>{modalEvent.title}</h3>
            <p>{modalEvent.description}</p>
          </div>
          <div className="modal-close" onClick={this.handleModalDismiss}><CloseCircleIcon /></div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ modal }) => ({ modalEvent: modal.modalEvent })
export default connect(mapStateToProps, { dismissModalEvent })(ModalEvent)
