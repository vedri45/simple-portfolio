import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const textStyle = {
    textDecoration: 'none',
}

export default function FooterSection() {
    return (
        <footer className="bg-dark">
            <Container>
                <Row>
                    <Col sm={12} md={6}>
                        <p className="text-white footer-inline my-0">
                            © Copyright 2022
                        </p>
                    </Col>
                    <Col sm={12} md={6} className="text-end">
                        <a className="text-white footer-details footer-inline" href="https://github.com/vedri45" target="_blank" rel="noreferrer" style={textStyle}>
                            <i className="fab fa-github"></i> Github
                        </a>
                        <a className="text-white footer-details footer-inline" href="https://www.linkedin.com/in/vedri45/" target="_blank" rel="noreferrer" style={textStyle}>
                            <i className="fab fa-linkedin"></i> LinkedIn
                        </a>
                        <a className="text-white footer-details footer-inline" href="mailto:vedri45@gmail.com" style={textStyle}>
                            <i className="fas fa-at"></i> Send me mail
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
