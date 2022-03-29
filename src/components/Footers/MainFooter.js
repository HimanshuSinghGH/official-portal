/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Col, Container } from "reactstrap";
import Logo from "../../assets/img/csegsa/csegsa_logo_inverted.webp";

function MainFooter() {
    return (
        <footer className="footer footer-black footer-white">
            <Container>
                <Row>
                    <Col md="6">
                        <nav className="footer-nav">
                            <img src={Logo} alt={"csegsa_logo"} style={{ width: 400 }} />
                        </nav>
                        <div className="credits ml-auto" style={{}}>
                            <span className="copyright">
                                © {new Date().getFullYear()}, CSEGSA, all rights reserved.
                            </span>
                        </div>
                    </Col>
                    <Col md="6">
                        <nav className="">
                            <div>
                                <div>
                                    <span style={{fontSize:"20px", fontWeight:"500", lineHeight: "45px"}}>Follow us</span>
                                </div>
                                <div>
                                    <span>
                                        <a
                                            href="https://www.creative-tim.com?ref=pkr-footer"
                                            target="_blank"
                                        >
                                            <i className="fa fa-twitter" />
                                        </a>
                                    </span>
                                    <span>
                                        <a
                                            href="https://www.creative-tim.com?ref=pkr-footer"
                                            target="_blank"
                                        >
                                            <i className="fa fa-linkedin" />
                                        </a>
                                    </span>
                                    <span>
                                        <a
                                            href="https://www.creative-tim.com?ref=pkr-footer"
                                            target="_blank"
                                        >
                                            <i className="fa fa-twitter" />
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </nav>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default MainFooter;