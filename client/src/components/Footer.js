import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

const Footer = () => {
    return (
        <div className="bg-primary text-light">
            <Container>
            <Row>
                <Col className="text-center py-3">
                    Copyright &copy; PetShop
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default Footer
