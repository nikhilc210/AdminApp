import React from 'react'
import {Navbar,Nav,NavDropdown,Form,FormControl,Button,Container} from 'react-bootstrap';
import {NavLink, Link} from 'react-router-dom';
/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
           
            <Navbar bg="dark" variant="dark">
                <Container>            
                  
                <Navbar.Brand href="home">Admin Dashboard</Navbar.Brand>
                <Nav className="mr-auto">
               
                </Nav>
                <Nav inline>
                
                {/* <Nav.Link href="#signup">Signup</Nav.Link>
                <Nav.Link href="#signin">Signin</Nav.Link> */}
                <li className="nav-item">
                <NavLink to="/signin" className="nav-link">Signin</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/signup" className="nav-link">Signup</NavLink>
                </li>

                
               
                
                </Nav>
                </Container>

            </Navbar>

  
   )

 }

export default Header