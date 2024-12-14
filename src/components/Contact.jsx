import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BasicForm from './BasicForm';

export default function Contact() {
  return (
    <section id="contact" className="container-section">
      <Container>
        <h2 className="py-2 text-light text-center">Contact</h2>
        <Row>
          <Col sm={12} md={6} className="text-light">
            <p className="fw-bold">Get in Touch</p>
            <p>If you want to contact me, Please send me a messages.</p>
            <p><i className="fa fa-building"></i> &nbsp;Genesis Digital</p>
            <p><i className="fas fa-map-marker"></i> &nbsp;Indonesia</p>
            <p><i className="fas fa-envelope"></i> &nbsp;vedri45@gmail.com</p>
          </Col>
          <Col sm={12} md={6}>
            <BasicForm />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
