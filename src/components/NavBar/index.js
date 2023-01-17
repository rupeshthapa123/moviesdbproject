import React from "react";
import { Nav, Navbar, Container, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavWrapper } from "./style";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

export default function Navbars() {
    return (
        <NavWrapper>
            <Container>
                <Navbar expand="lg">
                    <Link to='/'>
                        <img alt="img" src="/image/logo.svg" />
                    </Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Form className="d-flex">
                            <FiSearch className="mt-2" />
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                        </Form>
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link to='/' className="nav-link">Home</Link>
                            <Link to='/' className="nav-link">TV Show</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </NavWrapper>
    );
}