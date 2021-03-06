import React from 'react';
import Profile from '../images/profile.jpg';
import { Row, Col, Card } from "react-bootstrap";

const About = () => {
    return (
        <section className="about" id="about">
            <div className="container border-red">

                <Row className="border-red">

                    <Col sm={6} className="border-red">
                        <Card className="card-main border-red">
                            <Card.Img variant="top" src={Profile} className="text-center rounded-circle " style={{ height: "25rem", width: "20rem" }} />
                            <Card.Body>
                                <Card.Title >JEESUN LEE</Card.Title>
                                <Card.Text>
                                    <p style={{ margin: "0" }}>Web Developer</p>
                                    <p style={{ margin: "0" }}>former Marketer</p>
                                </Card.Text>
                            </Card.Body>

                        </Card>
                    </Col>

                    <Col sm={6} className="border-red tools">
                        <br></br>
                        <p className="skills-title border-red text-center">Skills</p>
                        <br></br>
                        <Row className="border-red" >
                            <div>
                                <img
                                    src="https://img.icons8.com/color/96/000000/html-5.png"
                                    alt="HTML5"
                                    className="img-fluid"
                                ></img>
                                <img
                                    src="https://img.icons8.com/color/96/000000/css3.png"
                                    alt="CSS"
                                    className="img-fluid"
                                ></img>
                                <img
                                    src="https://img.icons8.com/color/96/000000/javascript.png"
                                    alt="JavaScript"
                                ></img>
                                <img
                                    src="https://img.icons8.com/color/96/000000/bootstrap.png"
                                    alt="Bootstrap"
                                    className="img-fluid"
                                ></img>
                                <img
                                    src="https://img.icons8.com/color/96/000000/git.png"
                                    alt="Git"
                                    className="img-fluid"
                                ></img>
                                <img
                                    src="https://img.icons8.com/plasticine/96/000000/react.png"
                                    alt="Reactjs"
                                    className="img-fluid"
                                ></img>
                                <img
                                    src="https://img.icons8.com/color/96/000000/nodejs.png"
                                    alt="Nodejs"
                                    className="img-fluid"
                                ></img>
                                <img
                                    src="https://img.icons8.com/color/96/000000/mongodb.png"
                                    alt="MongoDB"
                                    className="img-fluid"
                                ></img>
                                <img
                                    src="https://img.icons8.com/color/96/000000/npm.png"
                                    alt="NPM"
                                    className="img-fluid"
                                ></img>
                            </div>
                        </Row>
                        <br></br>
                        <br></br>
                        <div className="border-red">


                            {/* <br></br>
                            <p className="card-title"><EmailButton >christina.hohng@gmail.com</EmailButton></p> */}


                            <ul className="resume-btns">

                                <li className="list-inline-item">
                                    <a className="rounded-circle text-white mr-3" href="https://www.facebook.com/lyejean/" target="_blank">
                                        < i class="fab fa-facebook-f fa-3x" >
                                        </i>
                                    </a>
                                </li>

                                <li className="list-inline-item">
                                    <a className="rounded-circle text-white mr-3" href="https://www.linkedin.com/in/christina-jeesun-lee-84bb43154/" target="_blank" >
                                        <i class="fab fa-linkedin-in fa-3x">
                                        </i>
                                    </a>
                                </li>

                                <li className="list-inline-item">
                                    <a className="rounded-circle text-white mr-3" href="https://github.com/luckymeday" target="_blank">
                                        <i class="fab fa-github fa-3x" >
                                        </i>
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </Col>
                </Row>
            </div>
        </section >
    )
}

export default About;