import React from 'react'
import { connect } from 'react-redux'
import { toggleLikePost, addComment } from 'actions/postActions'
import PostCard from 'components/cards/PostCard'
import PostFilter from './PostFilter'
import _ from 'lodash'

class PostList extends React.Component {
  static propTypes = {
    eventKey: React.PropTypes.string.isRequired,
    me: React.PropTypes.object,
    filterLabel: React.PropTypes.string,
    filters: React.PropTypes.array,
    posts: React.PropTypes.array,
    multiFilter: React.PropTypes.bool,
    toggleLikePost: React.PropTypes.func,
    addComment: React.PropTypes.func
  }

  static defaultProps = {
    multiFilter: false,
    filterLabel: ''
  }

  get handleSubmitLike () {
    const { toggleLikePost } = this.props
    return (postId, liked) => {
      toggleLikePost(postId)
    }
  }

  get handleSubmitComment () {
    const { addComment, me } = this.props
    return (postId, values) => {
      addComment(postId, values.comment, me)
    }
  }

  renderPosts () {
    const { posts } = this.props
    return _.orderBy(posts, ['posted_date'], ['desc']).map((post, index) => (
      <PostCard
        id={post.id}
        key={`post-card-${index}`}
        user={post.user}
        location={post.location}
        date={post.posted_date}
        likes={post.likes}
        comments={post.comments}
        liked={post.liked}
        links={post.links}
        attachments={post.attachments}
        images={post.images}
        eventPost={post.eventPost}
        onLike={this.handleSubmitLike}
        onComment={this.handleSubmitComment}>
        {post.message}
      </PostCard>
    ))
  }

  renderFilters () {
    const { filters } = this.props

    return filters.map((filter, index) => (
      <option key={`filter-item-${index}`} value={filter.value}>{filter.name}</option>
    ))
  }

  render () {
    const { eventKey, multiFilter, filterLabel } = this.props
    return (
      <div>
        <PostFilter label={filterLabel} formKey={eventKey} multi={multiFilter}>
          {this.renderFilters()}
        </PostFilter>
        {this.renderPosts()}
      </div>
    )
  }
}

const mapStateToProps = ({ app }) => ({ me: app.me })
export default connect(mapStateToProps,
  {
    toggleLikePost,
    addComment
  }
)(PostList)
