import React, { Component } from 'react';
import { Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap';

class Projects extends Component {
    state = {
        web: [],
        loading: true,
        error: null,
    };

    componentDidMount() {
        this.fetchProjects();
    }

    fetchProjects = async () => {
        try {
            const response = await fetch('/.netlify/functions/getProjects');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const projects = await response.json();
            this.setState({ web: projects, loading: false });
        } catch (error) {
            this.setState({ error: error.message, loading: false });
        }
    };

    render() {
        const { web, loading, error } = this.state;

        if (loading) {
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
            <section id="projects" className="container-section">
                <Container>
                    <Row>
                        <h2 className="py-2 text-light text-center">Projects</h2>
                        {web.map((item, i) => (
                            <Col sm={12} md={4} className="d-flex" key={i}>
                                <Card style={{ width: '18rem' }} className="mx-auto my-3">
                                    <Card.Img variant="top" src={item.image} />
                                    <Card.Body className="bg-dark text-light">
                                        <Card.Title>{item.name}</Card.Title>
                                        <Card.Text>
                                            {item.description}
                                        </Card.Text>
                                        {item.githubUrl ? (
                                            <Button variant="primary" href={item.githubUrl} target="_blank" className="me-2">
                                                <i className="fab fa-github">&nbsp;</i>Github
                                            </Button>
                                        ) : null}
                                        {item.url ? (
                                            <Button variant="outline-primary" href={item.url} target="_blank">Live</Button>
                                        ) : null}
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Projects;