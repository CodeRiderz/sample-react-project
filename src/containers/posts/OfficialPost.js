import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { pushPosts } from 'actions/postActions'
import ScreenHeightAdjuster from 'components/enhancer/ScreenHeightAdjuster'
import PostList from './PostList'
import PostScrollFetcher from './PostScrollFetcher'

class OfficialPost extends React.Component {
  static propTypes = {
    post: React.PropTypes.object,
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
            official: true
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
            official: true
          }
        ])

        next()
      }, 2000)
    }
  }

  render () {
    const { post } = this.props
    const officialPosts = _.filter(post.posts, { official: true })

    return (
      <ScreenHeightAdjuster className="scrollbar-wrapper" reduceValue={49}>
        <PostScrollFetcher onFetch={this.handleFetch}>
          <PostList eventKey="official-post" filterLabel="Show official post from:" posts={officialPosts} filters={this.filters} multiFilter />
        </PostScrollFetcher>
      </ScreenHeightAdjuster>
    )
  }
}

const mapStateToProps = ({ post }) => ({ post })

export default connect(mapStateToProps, { pushPosts })(OfficialPost)
