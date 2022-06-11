import logo from '../logo.svg'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar, Container, Nav } from 'react-bootstrap'

import { HashLink as Link } from 'react-router-hash-link';

export default function Appbar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="fixed-top">
            <Container>
                <Navbar.Brand as={Link} to="#">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    React-Bootstrap
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto ">
                        <Nav.Link as={Link} to="#home" smooth>Home</Nav.Link>
                        <Nav.Link as={Link} to="#projects" smooth>Projects</Nav.Link>
                        <Nav.Link as={Link} to="#contact" smooth>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
