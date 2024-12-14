import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Col, Container, ListGroup, Row, Spinner } from 'react-bootstrap';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';

const onInit = () => {
    console.log('lightGallery has been initialized');
};

export default class Skills extends Component {
    state = {
        skills: [],
        images: [],
        loading: true,
        error: null,
    };

    componentDidMount() {
        this.fetchSkills();
        this.fetchImages();
    }

    fetchSkills = async () => {
        try {
            const response = await fetch('/.netlify/functions/getSkills');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const skills = await response.json();
            this.setState({ skills });
        } catch (error) {
            this.setState({ error: error.message });
        }
    };

    fetchImages = async () => {
        try {
            const response = await fetch('/.netlify/functions/getImages');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const images = await response.json();
            this.setState({ images, loading: false });
        } catch (error) {
            this.setState({ error: error.message, loading: false });
        }
    };

    render() {
        const { skills, images, loading, error } = this.state;

        if (loading ) {
            return (
                <div className="text-center">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            );
        }

        if (error) {
            return <div>Error: {error}</div>;
        }

        return (
            <section id="skills" className="container-section">
                <Container>
                    <Row>
                        <h2 className="py-2 text-light text-center">Skills</h2>
                        {skills.map((skill, i) => (
                            <Col sm={12} md={6} key={i}>
                                <ListGroup className="text-start">
                                    <ListGroup.Item className="bg-dark text-white my-2">
                                        <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} /> &nbsp;{skill.name}
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                        ))}
                    </Row>
                    <div className="pt-4">
                        <h2 className="py-2 text-light text-center">Certificate</h2>
                        <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail]} elementClassNames="row text-center">
                            {images.map((item, e) => (
                                <a href={item.src} key={e} className="col-sm-12 col-md-3 col-lg-2 pb-4">
                                    <img alt={item.caption} src={item.src} width={item.width} height={item.height} />
                                </a>
                            ))}
                        </LightGallery>
                    </div>
                </Container>
            </section>
        );
    }
}