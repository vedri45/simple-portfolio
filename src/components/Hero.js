import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Col, Row } from 'react-bootstrap'

export default function Hero() {
    return (
        <div id="home" className="jumbotron">
            <Row className="mx-0">
                <Col sm={12} md={12} lg={6} className="my-5 py-5 align-self-center text-center">
                    <h1 className="display-4 text-light">Hi, I'm Vedri</h1>
                    <p className="lead text-light">I design website user interfaces</p>
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" href="#projects" role="button">Learn more</a>
                    </p>
                </Col>
                <Col sm={12} md={12} lg={6}>
                    <img src="/illustration.png" className="img-fluid" alt="" />
                </Col>
            </Row>
        </div>
    )
}
