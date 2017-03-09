import React from 'react'
import classNames from 'classnames'
import _ from 'lodash'

require('./link-card.scss')

class LinkCard extends React.Component {
  static propTypes = {
    id: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    thumbnailUrl: React.PropTypes.string.isRequired,
    wide: React.PropTypes.bool,
    onRemove: React.PropTypes.func
  }

  static defaultProps = {
    wide: false
  }

  get handleRemove () {
    const { id, onRemove } = this.props
    return (e) => {
      e.preventDefault()
      onRemove(id)
    }
  }

  render () {
    const { thumbnailUrl, title, description, url, wide, onRemove } = this.props
    return (
      <div className={classNames('link-card', { wide })}>
        <a href={url} target="_blank">
          <div className="link-thumbnail">
            {_.isEmpty(thumbnailUrl) ? null : <img src={thumbnailUrl} alt={title} />}
          </div>
          <div className="content">
            <h4>{title}</h4>
            {wide ? <p className="link">{url}</p> : null}
            <p>{description}</p>
          </div>
        </a>
        {onRemove ? <div className="remove-link" onClick={this.handleRemove} /> : null}
      </div>
    )
  }
}

export default LinkCard
