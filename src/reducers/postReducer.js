import _ from 'lodash'
import { ADD_POST, PUSH_POSTS, ADD_COMMENT, TOGGLE_LIKE_POST } from 'actions/postActions'

const initialState = {
  posts: [
    {
      id: '1',
      user: {
        fullname: 'Tiffany Price',
        url: '#',
        avatar: null
      },
      posted_date: Date.now(),
      message: 'You can access to my sample repository here: https://github.com/sample/sample-repo',
      location: 'University',
      liked: false,
      likes: 2,
      links: [
        {
          id: '0',
          url: 'https://github.com/sample/sample-repo',
          title: 'Some Site Title',
          description: 'Lorem ipsum dolor sit amet.',
          image: '',
          wide: false
        }
      ],
      comments: [
        {
          user: {
            fullname: 'Margaret Hamilton',
            url: '#',
            avatar: null
          },
          comment_date: Date.now(),
          message: 'Really great job with this, changes is needed!',
          attachments: [
            {
              name: 'Attachment.zip',
              url: 'Attachment.zip'
            }
          ],
          likes: 8
        },
        {
          user: {
            fullname: 'Margaret Hamilton',
            url: '#',
            avatar: null
          },
          comment_date: Date.now(),
          message: 'Really great job',
          attachments: [],
          likes: 8
        }
      ],
      official: false
    },
    {
      id: '2',
      user: {
        fullname: 'Tiffany Price',
        url: '#',
        avatar: null
      },
      posted_date: Date.now(),
      message: 'Good day man ! :smile: :+1:',
      location: 'University',
      liked: false,
      likes: 4,
      comments: [
        {
          user: {
            fullname: 'Margaret Hamilton',
            url: '#',
            avatar: null
          },
          comment_date: Date.now(),
          message: 'Really great job',
          attachments: [],
          likes: 8
        }
      ],
      links: [
        {
          id: '0',
          url: 'https://github.com/sample/sample-repo',
          title: 'Sample of Wide Link',
          description: 'Lorem ipsum dolor sit amet.',
          image: '',
          wide: true
        }
      ],
      official: false
    },
    {
      id: '3',
      user: {
        fullname: 'Tiffany Price',
        url: '#',
        avatar: null
      },
      posted_date: Date.now(),
      message: 'The phone of this person hanged suddenly, but Cristiano gave him time to restart it, CR7 brother you beauty Must watch this video',
      location: 'University',
      liked: false,
      likes: 0,
      comments: [],
      official: false
    },
    {
      id: '4',
      user: {
        fullname: 'Joyce Herrera',
        url: '#',
        avatar: null
      },
      posted_date: Date.now(),
      message: 'The phone of this person hanged suddenly, but Cristiano gave him time to restart it, CR7 brother you beauty Must watch this video',
      location: 'University',
      liked: false,
      likes: 0,
      comments: [],
      official: true
    },
    {
      id: '5',
      user: {
        fullname: 'Calvin Perry',
        url: '#',
        avatar: null
      },
      posted_date: Date.now(),
      message: 'The phone of this person hanged suddenly, but Cristiano gave him time to restart it, CR7 brother you beauty Must watch this video',
      location: 'University',
      liked: false,
      likes: 0,
      attachments: [],
      eventPost: {
        title: 'Explore Milenial HTML 5 Keynote',
        date: Date.now(),
        location: 'Telkom Jakdiva',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor. Ut eget imperdiet neque. In volutpat ante semper diam molestie, et aliquam erat laoreet. Sed sit amet arcu aliquet, molestie justo at, auctor nunc. Phasellus ligula ipsum, volutpat eget semper id, viverra eget nibh. Suspendisse luctus mattis cursus. Nam consectetur ante at nisl hendrerit gravida. Donec vehicula rhoncus mattis. Mauris dignissim semper mattis. Fusce porttitor a mi at suscipit. Praesent facilisis dolor sapien, vel sodales augue mollis ut. Mauris venenatis magna eu tortor posuere luctus. Aenean tincidunt turpis sed dui aliquam vehicula. Praesent nec elit non dolor consectetur tincidunt sed in felis. Donec elementum, lacus at mattis tincidunt, eros magna faucibus sem, in condimentum est augue tristique risus.',
        image: '/static/google-event-thumb.png'
      },
      comments: [],
      official: true
    },
    {
      id: '6',
      user: {
        fullname: 'Calvin Perry',
        url: '#',
        avatar: null
      },
      posted_date: Date.now(),
      message: 'The phone of this person hanged suddenly, but Cristiano gave him time to restart it, CR7 brother you beauty Must watch this video',
      location: 'University',
      liked: false,
      likes: 0,
      attachments: [
        { url: '#', name: 'Attachment_1.zip' },
        { url: '#', name: 'The Skinny On Lcd Monitors.jpg' },
        { url: '#', name: 'A Guide To Mri Scans.doc' },
        { url: '#', name: 'Las Vegas How To Have Non Gambling Related Fun.xls' }
      ],
      comments: [],
      images: [
        {
          thumbSrc: '/static/sample-image.png',
          src: '/static/gdg-poster.jpg',
          title: 'Sample Image'
        },
        {
          thumbSrc: '/static/sample-image-2.png',
          src: '/static/gdg-poster.jpg',
          title: 'Sample Image'
        },
        {
          thumbSrc: '/static/sample-image-3.png',
          src: '/static/gdg-poster.jpg',
          title: 'Sample Image'
        },
        {
          thumbSrc: '/static/sample-image-2.png',
          src: '/static/gdg-poster.jpg',
          title: 'Sample Image'
        },
        {
          thumbSrc: '/static/sample-image-3.png',
          src: '/static/gdg-poster.jpg',
          title: 'Sample Image'
        },
        {
          thumbSrc: '/static/sample-image-2.png',
          src: '/static/gdg-poster.jpg',
          title: 'Sample Image'
        },
        {
          thumbSrc: '/static/sample-image-3.png',
          src: '/static/gdg-poster.jpg',
          title: 'Sample Image'
        },
        {
          thumbSrc: '/static/sample-image-2.png',
          src: '/static/gdg-poster.jpg',
          title: 'Sample Image'
        },
        {
          thumbSrc: '/static/sample-image-3.png',
          src: '/static/gdg-poster.jpg',
          title: 'Sample Image'
        },
        {
          thumbSrc: '/static/sample-image-2.png',
          src: '/static/gdg-poster.jpg',
          title: 'Sample Image'
        }
      ],
      official: false
    }
  ]
}

function toggleLike (postId) {
  return (state) => {
    const postIndex = _.findIndex(state.posts, { id: postId })
    const managedPost = _.assign({}, state.posts[postIndex], {
      liked: !state.posts[postIndex].liked
    })

    return _.assign({}, state, {
      posts: [ ...state.posts.slice(0, postIndex), managedPost, ...state.posts.slice(postIndex + 1) ]
    })
  }
}

function addComment (postId, message, user) {
  return (state) => {
    const postIndex = _.findIndex(state.posts, { id: postId })
    const selectedPost = state.posts[ postIndex ]
    const managedPost = _.assign({}, selectedPost, {
      comments: [ ...selectedPost.comments, {
        user,
        comment_date: Date(),
        message: message,
        attachments: [],
        likes: 0
      }]
    })

    return _.assign({}, state, {
      posts: [ ...state.posts.slice(0, postIndex), managedPost, ...state.posts.slice(postIndex + 1) ]
    })
  }
}

function addPost (message, links, attachments, eventDate, user) {
  return (state) => {
    const newPost = {
      id: `${state.posts.length + 1}}`,
      user: user,
      posted_date: Date.now(),
      event_date: eventDate,
      message: message,
      location: 'University',
      liked: false,
      likes: 0,
      links,
      attachments,
      comments: [],
      official: false
    }
    return _.assign({}, state, { posts: [ ...state.posts, newPost ] })
  }
}

function postReducer (state = initialState, action = {}) {
  switch (action.type) {
    case ADD_POST:
      return addPost(action.message, action.links, action.attachments, action.eventDate, action.user)(state)
    case PUSH_POSTS:
      return _.assign({}, state, { posts: [...state.posts, ...action.posts] })
    case TOGGLE_LIKE_POST:
      return toggleLike(action.postId)(state)
    case ADD_COMMENT:
      return addComment(action.postId, action.message, action.user)(state)
    default :
      return state
  }
}

export default postReducer
