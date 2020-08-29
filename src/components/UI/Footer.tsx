import React, { FunctionComponent } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FaFacebook } from 'react-icons/fa';
import './Footer.css';

const Footer: FunctionComponent = () => {
    return (
        <div className="Footer">
            <Container>
                <Row>
                    <Col>
                        <i>All content is copyright © {new Date().getFullYear()} Wilmac Flooring.</i>
                        <div className="float-right">
                            <a href="https://www.facebook.com/pages/category/Home-Improvement/Wilmac-Flooring-368533426579825/">
                                <FaFacebook />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
