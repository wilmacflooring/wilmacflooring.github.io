import React, { FunctionComponent } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FaFacebook, FaCaretRight, FaFlickr } from 'react-icons/fa';
import './Footer.css';

const Footer: FunctionComponent = () => {
    return (
        <div className="Footer">
            <Container>
                <Row className="GoodSpacing">
                    <Col>
                        <h5>FOLLOW WILMAC FLOORING</h5>
                        <div className="FooterIcons">
                            <FaCaretRight size={36} />
                            <a href="https://www.facebook.com/pages/category/Home-Improvement/Wilmac-Flooring-368533426579825/">
                                <FaFacebook size={36} />
                            </a>
                            <a href="https://www.flickr.com/photos/wilmac/albums">
                                <FaFlickr size={36} />
                            </a>
                        </div>
                    </Col>
                </Row>
                <Row className="Border">
                    <Col>
                        <i>All content is copyright © {new Date().getFullYear()} Wilmac Flooring.</i>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
