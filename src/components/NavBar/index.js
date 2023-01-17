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
                            <FiSearch className="m-auto" />
                            <Form.Control
                                type="text"
                                placeholder="Search"
                                className="me-sm-2"
                            />
                        </Form>
                        <Nav className="ms-auto">
                            <Link to='/' className="nav-link">Home</Link>
                            <Link to='/' className="nav-link">TV Show</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </NavWrapper>
    );
}