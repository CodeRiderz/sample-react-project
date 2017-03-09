import React from 'react'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import DashboardView from 'components/views/DashboardView'
import { Sidebar, SidebarWidget } from 'components/sidebar'
import { ClassesIcon, UpcomingEventIcon, UpcomingConverencesIcon } from 'components/icons'
import ClassesList from 'containers/ClassesList'
import UpcomingEventList from 'containers/UpcomingEventList'
import UpcomingConverencesList from 'containers/UpcomingConverencesList'
import PublicPost from 'containers/posts/PublicPost'
import OfficialPost from 'containers/posts/OfficialPost'
import ModalImage from 'containers/modals/ModalImage'
import ModalEvent from 'containers/modals/ModalEvent'

class Home extends React.Component {
  render () {
    return (
      <DashboardView className="with-sidebar">
        <Sidebar>
          <SidebarWidget title="My Classes" icon={<ClassesIcon />}>
            <ClassesList />
          </SidebarWidget>
          <SidebarWidget title="Upcoming Events" icon={<UpcomingEventIcon />} completeUrl="/#">
            <UpcomingEventList />
          </SidebarWidget>
          <SidebarWidget title="Upcoming Converences" icon={<UpcomingConverencesIcon />} completeUrl="/#">
            <UpcomingConverencesList />
          </SidebarWidget>
        </Sidebar>
        <DashboardView.MainWrapper>
          <Grid className="gutter-0" fluid>
            <Row>
              <Col xs={6} className="dashboard-column">
                <PublicPost />
              </Col>
              <Col xs={6} className="dashboard-column">
                <OfficialPost />
              </Col>
            </Row>
          </Grid>
        </DashboardView.MainWrapper>
        <ModalImage />
        <ModalEvent />
      </DashboardView>
    )
  }
}

export default Home
