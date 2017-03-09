import React from 'react'
import axios from 'axios'
import _ from 'lodash'
import LinkCard from 'components/cards/LinkCard'

require('./external-links.scss')

class ExternalLinks extends React.Component {
  static propTypes = {
    urls: React.PropTypes.array,
    value: React.PropTypes.array,
    onChange: React.PropTypes.func
  }

  static defaultProps = {
    onChange: (urls) => {}
  }

  componentWillReceiveProps (nextProps) {
    if ((!_.isEmpty(nextProps.value) || !_.isEmpty(nextProps.urls)) && !_.isEqual(nextProps.urls, this.props.urls)) {
      this.fetchLinks(nextProps.urls)
    }
  }

  fetchLinks (urls) {
    const { onChange, value } = this.props
    const savedUrls = _.chain(value).map('url').values().value()
    const omittedUrls = _.without(urls, ...savedUrls) // for memoization purpose

    /* Uncomment this for connecting to API

    // Requests the urls to get META attributes
    const urlRequests = omittedUrls.map((url) => axios.get(url))

    axios.all(urlRequests).then((res) => {
      onChange([...value, ...fakeResponse])
    })

    */

    // fake response
    const fakeResponse = omittedUrls.map((url, index) => ({
      id: `${value.length + index}`,
      url,
      title: 'Some Site Title',
      description: 'Lorem ipsum dolor sit amet.',
      image: ''
    }))

    onChange([...value, ...fakeResponse])
  }

  get handleRemoveLink () {
    const { onChange, value } = this.props
    return (id) => {
      const targetIndex = _.findIndex(value, { id })
      const metaResults = [ ...value.slice(0, targetIndex), ...value.slice(targetIndex + 1) ]
      onChange(metaResults)
    }
  }

  renderLinks () {
    const { value } = this.props

    return value.map((meta, index) => (
      <LinkCard
        key={`ext-link-item-${index}`}
        id={meta.id}
        title={meta.title}
        description={meta.description}
        url={meta.url}
        thumbnailUrl={meta.image}
        onRemove={this.handleRemoveLink} />
    ))
  }

  render () {
    const { value } = this.props

    if (_.isEmpty(value)) return null

    return (
      <div className="external-links">
        {this.renderLinks()}
      </div>
    )
  }
}

export default ExternalLinks
