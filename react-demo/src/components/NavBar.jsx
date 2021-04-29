import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
    return (
         <div>        
            <Navbar sticky="top" className="navbar" collapseOnSelect>
                <Navbar.Toggle></Navbar.Toggle>
                <Navbar.Collapse className="pr-3" id="responsive-navbar-nav">
                    <Nav className="nav ml-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/calculator">Calculator</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar;