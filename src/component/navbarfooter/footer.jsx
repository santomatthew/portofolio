import React from "react";


import {Row,Col, Container} from "react-bootstrap"

const Footer = () =>{
    return(
    <>
    <Container>
        <Row>
            <Col style={{backgroundColor:'pink'}} lg="12">
            Copyright © 2022 || Santo Matthew
            </Col>
        </Row>
    </Container>
    </>
    
    )    
}

export default Footer