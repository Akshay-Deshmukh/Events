import React, { Component } from "react"
import { Menu, Container, Button } from "semantic-ui-react"
import { NavLink, Link, withRouter } from "react-router-dom"
import SignedOutMenu from "../Menus/SignedOutMenu"
import SignedInMenu from "../Menus/SignedInMenu"

class NavBar extends Component {
  state = {
    authenicated: false,
  }

  handleSignIn = () => {
    this.setState({ authenicated: true })
  }
  handleSignOut = () => {
    this.setState({ authenicated: false });
    this.props.history.push('/');
  }
  render() {
    const { authenicated } = this.state
    return (
      <Menu inverted fixed='top'>
        <Container>
          <Menu.Item as={NavLink} exact to='/' header>
            <img src='assets/logo.png' alt='logo' />
            Events-Host
          </Menu.Item>
          <Menu.Item  name='Events' exact as={NavLink} to='/events' />
          <Menu.Item  name='People' as={NavLink} to='/people' />

          <Menu.Item>
            <Button
              floated='right'
              as={Link}
              to='/createEvent'
              positive
              inverted
              content='Create Event'
            />
          </Menu.Item>
          {authenicated ? (
            <SignedInMenu SignedOutMenu={this.handleSignOut} />
          ) : (
            <SignedOutMenu SignIn={this.handleSignIn} />
          )}
        </Container>
      </Menu>
    )
  }
}
export default withRouter(NavBar);