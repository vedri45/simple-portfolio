import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Col, Row } from 'react-bootstrap';

export default function Hero() {
    return (
        <section id="home" className="jumbotron container-section active">
            <Row className="mx-0">
                <Col sm={12} md={12} lg={6} className="my-5 py-5 align-self-center text-center">
                    <h1 className="display-4 text-light">Hi, I'm Vedri</h1>
                    <p className="lead text-light">I design website user interfaces<br/>and love to create beautiful websites</p>
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" href="#projects" role="button">Resume</a>
                    </p>
                </Col>
                <Col sm={12} md={12} lg={6}>
                    <img src="/illustration.png" className="img-fluid" alt="" />
                </Col>
            </Row>
        </section>
    )
}
