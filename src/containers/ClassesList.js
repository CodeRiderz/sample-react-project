import React from 'react'
import { NavigationList, NavigationListItem } from 'components/navigations'

class ClassesList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      activeKey: 0
    }
  }

  get handleNavigationChange () {
    return (selectedKey) => {
      this.setState({
        activeKey: selectedKey
      })
    }
  }

  render () {
    const { activeKey } = this.state
    return (
      <NavigationList activeKey={activeKey} onChange={this.handleNavigationChange}>
        <NavigationListItem eventKey={0}>Macroeconomics</NavigationListItem>
        <NavigationListItem eventKey={1}>New Product Development</NavigationListItem>
        <NavigationListItem eventKey={2} newItemCount={20}>Integrated Marketing Communication</NavigationListItem>
        <NavigationListItem eventKey={3}>Strategic Marketing Management</NavigationListItem>
      </NavigationList>
    )
  }
}

export default ClassesList
