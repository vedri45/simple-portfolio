import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

export default class Projects extends React.Component {

    web = [
        {
            name: 'Asia Mega Pasifik',
            url: 'https://asiamegapasifik.com/',
            code: 'Wordpress',
            image: 'project_sample_1.png'
        },
        {
            name: 'Storm Age Capital Fund',
            url: 'https://sacfglo.com/',
            code: 'PHP',
            image: 'project_sample_2.png'
        },
        {
            name: 'Manga Database App',
            url: 'https://manga-database-app.netlify.app/',
            githubUrl: 'https://github.com/vedri45/manga-database-app',
            code: 'React JS',
            image: 'project_sample_3.png'
        },
    ];

    render() {
        return (
            <section id="projects" className="container-section">
                <Container>
                    <Row>
                        <h2 className="py-2 text-light text-center">Projects</h2>
                        {this.web.map((item, i) => (
                            <Col sm={12} md={4} className="d-flex" key={i}>
                                <Card style={{ width: '18rem' }} className="mx-auto my-3">
                                    <Card.Img variant="top" src={item.image} />
                                    <Card.Body className="bg-dark text-light">
                                        <Card.Title>{item.name}</Card.Title>
                                        <Card.Text>
                                            This project was built with {item.code}
                                        </Card.Text>
                                        {(item.githubUrl ? (<Button variant="primary" href={item.githubUrl} target="_blank" className="me-2"><i className="fab fa-github">&nbsp;</i>Github</Button>) : null )}   
                                        <Button variant="outline-primary" href={item.url} target="_blank">Live</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        )
    }
}

