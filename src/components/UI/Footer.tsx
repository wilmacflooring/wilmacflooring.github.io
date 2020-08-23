import React, { FunctionComponent } from 'react';
import { Container, Row, Col } from 'reactstrap';

const Footer: FunctionComponent = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <p>All content is copyright © {new Date().getFullYear()} Wilmac Flooring.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
