import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';

import LightGallery from 'lightgallery/react';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail';

const onInit = () => {
    console.log('lightGallery has been initialized');
};

export default class Skills extends Component {
    code = ['HTML', 'CSS', 'JavaScript', 'PHP', 'Bootstrap', 'React JS', 'jQuery', 'Wordpress'];

    images = [
        {
            src: 'https://www.sololearn.com/Certificate/1014-26127225/jpg',
            caption: 'HTML course',
            width: '100%',
            height: 'auto'
        },
        {
            src: 'https://www.sololearn.com/Certificate/CT-Q5QJQDEK/jpg',
            caption: 'CSS course',
            width: '100%',
            height: 'auto'
        },
        {
            src: 'https://www.sololearn.com/certificates/course/en/26127225/1024/landscape/png',
            caption: 'JavaScript',
            width: '100%',
            height: 'auto'
        },
        {
            src: 'https://www.sololearn.com/Certificate/CT-T5XVOMGB/jpg',
            caption: 'React + Redux course',
            width: '100%',
            height: 'auto'
        },
        {
            src: 'img/cert/9763DA99F4A2.jpg',
            caption: 'JavaScript (Basic)',
            width: '100%',
            height: 'auto'
        },
        {
            src: '/img/cert/D33A38574E77.jpg',
            caption: 'React (Basic)',
            width: '100%',
            height: 'auto'
        },
        {
            src: '/img/cert/responsive-web-design.jpg',
            caption: 'Responsive Web Design',
            width: '100%',
            height: 'auto'
        },
    ];

    render() {
        return (
            <section id="skills" className="container-section">
                <Container>
                    <Row>
                        <h2 className="py-2 text-light text-center">Skills</h2>
                        {this.code.map((codes, i) => (
                            <Col sm={12} md={6} key={i}>
                                <ListGroup className="text-start">
                                    <ListGroup.Item className="bg-dark text-white my-2">
                                        <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} /> &nbsp;{codes}</ListGroup.Item>
                                </ListGroup>
                            </Col>
                        ))}
                    </Row>
                    <div className="pt-4">
                        <h2 className="py-2 text-light text-center">Certificate</h2>
                        <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail]} elementClassNames="row text-center">
                            {this.images.map((item, e) => (
                                <a href={item.src} key={e} className="col-sm-12 col-md-3 pb-4">
                                    <img alt={item.caption} src={item.src} width={item.width} height={item.height} />
                                </a>
                            ))}
                        </LightGallery>
                    </div>
                </Container>
            </section>
        )
    }

}

