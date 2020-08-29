import React, { FunctionComponent } from 'react';
import Helmet from 'react-helmet';
import { Container, Row, Col, Card, CardBody, CardTitle } from 'reactstrap';

const flickrGallery = [
    {
        title: 'Accents and Features',
        image: (
            <a
                data-flickr-embed="true"
                href="https://www.flickr.com/photos/wilmac/albums/72157629007281247"
                title="Accents and Features"
            >
                <img
                    src="https://live.staticflickr.com/7150/6753022485_8ff826d531_z.jpg"
                    width="100%"
                    alt="Accents and Features"
                />
            </a>
        ),
    },
    {
        title: 'Backsplashes',
        image: (
            <a
                data-flickr-embed="true"
                href="https://www.flickr.com/photos/wilmac/albums/72157629007254369"
                title="Backsplashes"
            >
                <img
                    src="https://live.staticflickr.com/7015/6753027165_ceaf04b99a_z.jpg"
                    width="100%"
                    alt="Backsplashes"
                />
            </a>
        ),
    },
    {
        title: 'Bathrooms and Showers',
        image: (
            <a
                data-flickr-embed="true"
                href="https://www.flickr.com/photos/wilmac/albums/72157629007281247"
                title="Accents and Features"
            >
                <img
                    src="https://live.staticflickr.com/7150/6753022485_8ff826d531_z.jpg"
                    width="100%"
                    alt="Accents and Features"
                />
            </a>
        ),
    },
    {
        title: 'Entrys',
        image: (
            <a
                data-flickr-embed="true"
                href="https://www.flickr.com/photos/wilmac/albums/72157629007281247"
                title="Accents and Features"
            >
                <img
                    src="https://live.staticflickr.com/7150/6753022485_8ff826d531_z.jpg"
                    width="100%"
                    alt="Accents and Features"
                />
            </a>
        ),
    },
    {
        title: 'Fireplaces',
        image: (
            <a
                data-flickr-embed="true"
                href="https://www.flickr.com/photos/wilmac/albums/72157629007281247"
                title="Accents and Features"
            >
                <img
                    src="https://live.staticflickr.com/7150/6753022485_8ff826d531_z.jpg"
                    width="100%"
                    alt="Accents and Features"
                />
            </a>
        ),
    },
    {
        title: 'Stairs',
        image: (
            <a
                data-flickr-embed="true"
                href="https://www.flickr.com/photos/wilmac/albums/72157629007281247"
                title="Accents and Features"
            >
                <img
                    src="https://live.staticflickr.com/7150/6753022485_8ff826d531_z.jpg"
                    width="100%"
                    alt="Accents and Features"
                />
            </a>
        ),
    },
    {
        title: 'Stone and Tile Floors',
        image: (
            <a
                data-flickr-embed="true"
                href="https://www.flickr.com/photos/wilmac/albums/72157629007281247"
                title="Accents and Features"
            >
                <img
                    src="https://live.staticflickr.com/7150/6753022485_8ff826d531_z.jpg"
                    width="100%"
                    alt="Accents and Features"
                />
            </a>
        ),
    },
    {
        title: 'Hardwood Floors',
        image: (
            <a
                data-flickr-embed="true"
                href="https://www.flickr.com/photos/wilmac/albums/72157629007281247"
                title="Accents and Features"
            >
                <img
                    src="https://live.staticflickr.com/7150/6753022485_8ff826d531_z.jpg"
                    width="100%"
                    alt="Accents and Features"
                />
            </a>
        ),
    },
];

const NewGallery: FunctionComponent = () => {
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
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <CardBody>
                                <CardTitle>{flickrGallery[0].title}</CardTitle>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <CardBody>
                                <CardTitle>{flickrGallery[1].title}</CardTitle>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <Card>
                            <CardBody>
                                <CardTitle>{flickrGallery[2].title}</CardTitle>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <CardBody>
                                <CardTitle>{flickrGallery[3].title}</CardTitle>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <CardBody>
                                <CardTitle>{flickrGallery[4].title}</CardTitle>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <CardBody>
                                <CardTitle>{flickrGallery[5].title}</CardTitle>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <CardBody>
                                <CardTitle>{flickrGallery[6].title}</CardTitle>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <CardBody>
                                <CardTitle>{flickrGallery[7].title}</CardTitle>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NewGallery;
