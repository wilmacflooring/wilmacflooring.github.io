import React, { FunctionComponent } from 'react';
import Helmet from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';

const ScreensProducts: FunctionComponent = () => {
    return (
        <div>
            <Helmet>
                <title>Wilmac Flooring - Our Products</title>
                <meta name="description" content="Out Products page for Wilmac Flooring." />
                <meta name="subject" content="Products" />
            </Helmet>
            <Container>
                <Row>
                    <Col>
                        <h1>Our Products</h1>
                        <p>Dal-Tile</p>
                        <p>Mannington</p>
                        <p>Marazzi</p>
                        <p>Mullican Flooring</p>
                        <p>Bella Cera Floors</p>
                        <p>Anderson Tuftex</p>
                        <p>US Floors LLC</p>
                        <p>Karndean</p>
                        <p>Nova</p>
                        <p>We Cork</p>
                        <p>Tile Gallery PA</p>
                        <p>Shaw Floors</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ScreensProducts;
