import React from "react";

import Header from "../component/navbarfooter/navbar";
import Footer from "../component/navbarfooter/footer"

import ProfilePict from "../component/img/myphoto.jpeg"

import {Row,Col, Container} from "react-bootstrap"

import "../style/style.css"


const Index = () =>{
    return(
        <>
        <Header/>
            <Container>
                <Row style={{padding:'10px',backgroundColor:'#D3DEDC'}}>
                    <Col lg="6">
                    <img src={ProfilePict} className="pictsizer" alt="matthewpict" />
                    </Col>
                    <Col lg="6">
                        <p className="intro" style={{textAlign:'justify'}}>Hello my name is Santo Matthew. Undergraduated Computer Science Student.</p>
                    </Col>
                </Row>
                <Row>

                </Row>
            </Container>
        <Footer/>
        </>
    )
}

export default Index