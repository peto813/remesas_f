import React, { Component } from 'react';
import { Navbar, NavDropdown, MenuItem, NavItem, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { userActions } from '../../actions/';
import { connect } from 'react-redux';
import { history } from '../../helpers/';
class NavComponent extends Component {
  constructor(props) {
        super(props);

        // reset login status
        //this.props.dispatch(userActions.logout());
         this.logout = this.logout.bind(this);
  }

    logout(event) {
        event.preventDefault();
        this.props.dispatch(userActions.logout());
        history.push('/dashboard');
        //alert('peo')
        //this.props.history.push('/dashboard')
    }

  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">React-Bootstrap</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">
              Link
            </NavItem>
            <NavItem eventKey={2} href="#">
              Link
            </NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              Transacciones
            </NavItem>
            <NavDropdown eventKey={3} title={<span><FontAwesomeIcon icon="user" /></span>} id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem onClick={this.logout} eventKey={3.3}>Salir</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

function mapStateToProps(state) {//this function is used as an argument to the connetor 
    const { loggingIn } = state.authentication;
    //console.log('loginform index js')
    return {
        loggingIn
    };
}
const NavbarComponent = connect(mapStateToProps)(NavComponent);//this connects the above class to the dispatcher

export default NavbarComponent;
