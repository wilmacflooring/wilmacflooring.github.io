import React, { FunctionComponent } from 'react';
import Helmet from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';

const ScreensGallery: FunctionComponent = () => {
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
                        <h1>Photo Gallery</h1>
                        <h2>By Room</h2>
                        <p>
                            <a
                                href="https://www.flickr.com/photos/wilmac/sets/72157629007281247"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Accents and Features
                            </a>
                        </p>
                        <p>
                            <a
                                href="https://www.flickr.com/photos/wilmac/sets/72157629007254369"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Backsplashes
                            </a>
                        </p>
                        <p>
                            <a
                                href="https://www.flickr.com/photos/wilmac/sets/72157629007415455"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Bathrooms and Showers
                            </a>
                        </p>
                        <h2>By Material</h2>
                        <p>
                            <a
                                href="https://www.flickr.com/photos/wilmac/sets/72157629007397515"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Stone and Tile
                            </a>
                        </p>
                        <p>
                            <a
                                href="https://www.flickr.com/photos/wilmac/sets/72157629007385565"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Hard Wood
                            </a>
                        </p>
                        <p>
                            <a
                                href="https://www.flickr.com/photos/wilmac/albums"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                View All
                            </a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ScreensGallery;
