import React, { useState } from 'react';
import { Col, Row, Card, Button } from "react-bootstrap";
import thumb1 from '../images/movie.png';
import thumb2 from '../images/note.png';

const Projects = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <section className="projects border-red" id="works">
            <div className="container border-red" >
                <p className="projects-title border-red text-center" >Works</p>
                <br></br>
                {/* <Carousel className="content-center" activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item className="carousel border-red"> */}

                <div >
                    < Row >
                        <Col sm={6} >
                            <Card >
                                <Card.Img variant="top" src={thumb1} />
                                <Card.Body>
                                    <Card.Title className="card-title">Movie App</Card.Title>
                                    <Card.Text className="card-sub">React/APIS</Card.Text>
                                    <Button variant="dark" style={{ marginRight: "1px" }} className="card-button" href="https://movie-jeesun.netlify.app/" target="_blank">Demo</Button>
                                    <Button variant="secondary" className="card-button" href="https://github.com/luckymeday/movie" target="_blank">Repository</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={6}>
                            <Card >
                                <Card.Img variant="top" src={thumb2} />
                                <Card.Body >
                                    <Card.Title className="card-title">To-do List</Card.Title>
                                    <Card.Text className="card-sub">CSS</Card.Text>
                                    <Button variant="dark" style={{ marginRight: "1px" }} className="card-button" href="https://todolist-jeesun.netlify.app/" target="_blank">Demo</Button>
                                    <Button variant="secondary" className="card-button" href="https://github.com/luckymeday/todolist" target="_blank">Repository</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                </div >

                {/* </Carousel.Item> */}

                {/* ------- need to add more project later ------- */}

                {/* <Carousel.Item className="carousel border-red">            
                </Carousel.Item> */}
                {/* </Carousel > */}

            </div>
        </section>
    );
}

export default Projects;