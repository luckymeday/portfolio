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
        <div className="projects border-red" id="works">
            <div className="container border-red">
                <p className="projects-title border-red text-center">Works</p>
                {/* <Carousel className="content-center" activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item className="carousel border-red"> */}

                <div className="border-red" >

                    < Row style={{ marginTop: "4%" }}>
                        <Col md={6} xs={12} >
                            <Card style={{ width: 'max' }}>
                                <Card.Img variant="top" src={thumb1} />
                                <Card.Body>
                                    <Card.Title className="card-title">Movie App</Card.Title>
                                    <Card.Text className="card-sub">React/APIS</Card.Text>
                                    <Button variant="dark" style={{ marginRight: "3%" }} className="card-button" href="https://movie-jeesun.netlify.app/" target="_blank">Demo</Button>
                                    <Button variant="secondary" className="card-button" href="https://github.com/luckymeday/movie" target="_blank">Repository</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} xs={12}>
                            <Card style={{ width: 'max' }}>
                                <Card.Img variant="top" src={thumb2} />
                                <Card.Body >
                                    <Card.Title className="card-title">To-do List</Card.Title>
                                    <Card.Text className="card-sub">CSS</Card.Text>
                                    <Button variant="dark" style={{ marginRight: "3%" }} className="card-button" href="https://todolist-jeesun.netlify.app/" target="_blank">Demo</Button>
                                    <Button variant="secondary" className="card-button" href="https://github.com/luckymeday/todolist" target="_blank">Repository</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <br></br>
                    </Row>
                </div >

                {/* </Carousel.Item> */}

                {/* ------- need to add more project later ------- */}

                {/* <Carousel.Item className="carousel border-red">            
                </Carousel.Item> */}
                {/* </Carousel > */}

            </div >
        </div >
    );
}

export default Projects;