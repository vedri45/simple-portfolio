import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { Col, Container, ListGroup, Row } from 'react-bootstrap'

export default class Skills extends Component {
    code = ['HTML', 'CSS', 'JavaScript', 'PHP', 'Bootstrap', 'React']
    render() {
        return (
            <div id="skills">
                <Container>
                    <Row>
                        <h2 className="py-2 text-light text-center">Skills</h2>
                        {this.code.map(codes => {
                            return (
                                <Col sm={12} md={6}>
                                    <ListGroup className="text-start">
                                        <ListGroup.Item className="bg-dark text-white my-2">
                                            <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} /> {codes}</ListGroup.Item>
                                    </ListGroup>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </div>
        )
    }

}

