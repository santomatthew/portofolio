import React from "react";

import "../../style/style.css"

import {Container,Nav,Navbar,Row,Col} from "react-bootstrap"

const Header = () =>{
    return(
    <>
        <Container className="navbarcolor">
            <Navbar expand="lg">
            <Container fluid>
                <Row>
                    <Col lg="3">
                        <Navbar.Brand style={{fontSize:'35px'}} href="#">Welcome</Navbar.Brand>
                    </Col>
                </Row>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 "
                            style={{ maxHeight: '100px',fontSize:'20px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">About Me</Nav.Link>
                            <Nav.Link href="#action2">Projects</Nav.Link>
                        </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            </Container>
    </>
    
    )    
}

export default Header