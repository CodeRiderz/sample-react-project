import React from 'react'
import { Link } from 'react-router'

function PostCardHeader ({ name, url, timePosted, location, children }) {
  return (
    <div className="post-header">
      <div className="post-avatar">

      </div>
      <h4><Link to={url}>{name}</Link></h4>
      <p>{timePosted} <strong>in {location}</strong></p>

      <div className="post-message">
        {children}
      </div>

    </div>
  )
}

PostCardHeader.prototype.propTypes = {
  name: React.PropTypes.string,
  url: React.PropTypes.string,
  timePosted: React.PropTypes.string,
  location: React.PropTypes.string,
  children: React.PropTypes.string
}

export default PostCardHeader
