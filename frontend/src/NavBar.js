import React from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import JoblyApi from './JoblyApi'
import './NavBar.css'

function NavBar({loggedIn, setLoggedIn}) {
  const history = useHistory();

  function logOut(){
    JoblyApi.logout();
    setLoggedIn(false);
    history.push('/')

  }

  if(!loggedIn){
    return(
      <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">
          Jobly
        </NavLink>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/login">Login</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    )
  }


  return (
    <div>
      <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">
          Jobly
        </NavLink>

        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/companies">Companies</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/jobs">Jobs</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/profile">Profile</NavLink>
          </NavItem>
          <NavItem>
            <Link className="logOut" onClick={logOut}>Log Out</Link>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
