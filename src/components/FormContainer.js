import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


function FormContainer({ children }) {
    return (
        <Container className='con'>
            <Row className="formcon" >
                <Col xs={20} md={12}>
                    {children}
                </Col>
            </Row>
        </Container>
    )
}

export default FormContainer
