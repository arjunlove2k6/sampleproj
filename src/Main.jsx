import React from 'react';
// import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Container, Navbar, Nav } from 'react-bootstrap';
import './main.css';
import AppRouter from './AppRouter';

class Main extends React.Component {
    render() {
        return (
            <Container className={'MainBody'}>
                <h1 className="text-center">Welcome to website</h1>
                <Navbar bg="light" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link href="/register">Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <AppRouter />
            </Container>
        );
    }
}
export default Main;