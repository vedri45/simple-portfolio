import React from 'react'
import { Col, Container } from 'react-bootstrap'
import BasicForm from './BasicForm'

export default function Contact() {
  return (
    <div id="contact">
      <Container>
        <Col sm={12} md={12} lg={6}>
          <h2 className="text-start text-light">Contact</h2>
          <BasicForm />
        </Col>
      </Container>
    </div>
  )
}
