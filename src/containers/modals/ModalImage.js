import React from 'react'
import { connect } from 'react-redux'
import { CloseCircleIcon } from 'components/icons'
import { dismissModalImage } from 'actions/modalActions'

class ModalImage extends React.Component {
  static propTypes = {
    modalImage: React.PropTypes.object,
    dismissModalImage: React.PropTypes.func
  }

  get handleModalDismiss () {
    const { dismissModalImage } = this.props
    return () => {
      dismissModalImage()
    }
  }

  render () {
    const { modalImage } = this.props

    if (!modalImage.active) return null

    return (
      <div className="modal-wrapper">
        <div className="modal-content modal-image">
          <img src={modalImage.src} alt={modalImage.title} />
          <div className="modal-close" onClick={this.handleModalDismiss}><CloseCircleIcon /></div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ modal }) => ({ modalImage: modal.modalImage })
export default connect(mapStateToProps, { dismissModalImage })(ModalImage)
