import React from 'react'
import { connect } from 'react-redux'
import { addPost, pushPosts } from 'actions/postActions'
import ScreenHeightAdjuster from 'components/enhancer/ScreenHeightAdjuster'
import PostList from './PostList'
import AddPostForm from './AddPostForm'
import PostScrollFetcher from './PostScrollFetcher'
import _ from 'lodash'

class PublicPost extends React.Component {
  static propTypes = {
    post: React.PropTypes.object,
    me: React.PropTypes.object,
    className: React.PropTypes.string,
    addPost: React.PropTypes.func,
    pushPosts: React.PropTypes.func
  }

  static defaultProps = {
    className: ''
  }

  get filters () {
    return [
      { value: 'university', name: 'University' },
      { value: 'my-faculty', name: 'My Faculty' },
      { value: 'my-program', name: 'My Program' }
    ]
  }

  get handleSubmitPost () {
    const { me, addPost } = this.props
    return ({ message, links, attachments, eventDate }) => {
      addPost(message, links, attachments, eventDate, me)
    }
  }

  get handleFetch () {
    const { pushPosts } = this.props
    return (next) => {
      setTimeout(() => {
        pushPosts([
          {
            id: '123',
            user: {
              fullname: 'Post Sample 1',
              url: '#',
              avatar: null
            },
            posted_date: 1470029975469,
            message: 'Post Sample',
            location: 'University',
            liked: false,
            likes: 2,
            links: [],
            comments: [],
            official: false
          },
          {
            id: '321',
            user: {
              fullname: 'Post Sample 2',
              url: '#',
              avatar: null
            },
            posted_date: 1469929975469,
            message: 'Post Sample',
            location: 'University',
            liked: false,
            likes: 2,
            links: [],
            comments: [],
            official: false
          }
        ])

        next()
      }, 2000)
    }
  }

  render () {
    const { post } = this.props
    const publicPosts = _.filter(post.posts, { official: false })

    return (
      <ScreenHeightAdjuster className="scrollbar-wrapper" reduceValue={49}>
        <PostScrollFetcher onFetch={this.handleFetch}>
          <AddPostForm onSubmit={this.handleSubmitPost} />
          <PostList eventKey="public-post" filterLabel="filter post by:" posts={publicPosts} filters={this.filters} multiFilter />
        </PostScrollFetcher>
      </ScreenHeightAdjuster>
    )
  }
}

const mapStateToProps = ({ post, app }) => ({ post, me: app.me })

export default connect(mapStateToProps, { addPost, pushPosts })(PublicPost)
