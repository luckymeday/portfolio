import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../images/spaceman.png';

const Navigation = () => {
    return (
        <div className="border-red">
            <Navbar expand="lg" style={{ backgroundColor: "rgba(235,235,255,0.5)", fontFamily: 'Press Start 2P, cursive;', fontSize: "18px" }} className="navigation-bar fixed-top" alt="">
                <Navbar.Brand href="#main">  <img src={logo} style={{ width: "70px", marginTop: "-8px", marginBottom: "-8px", marginLeft: "-10px", marginRight: "-18px" }} alt=""></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#main" style={{ color: "white", fontSize: "18px" }}>Home</Nav.Link>
                        <Nav.Link href="#about" style={{ color: "white", fontSize: "18px" }}>About</Nav.Link>
                        <Nav.Link href="#works" style={{ color: "white", fontSize: "18px" }}>Works</Nav.Link>
                        <Nav.Link href="#contact" style={{ color: "white", fontSize: "18px" }}> Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navigation;