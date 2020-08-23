import React from 'react';
import Helmet from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';
import './About.css';

const ScreensAbout = () => {
    return (
        <div>
            <Helmet>
                <title>Wilmac Flooring - About</title>
                <meta name="description" content="About Page for Wilmac Flooring." />
                <meta name="subject" content="About" />
            </Helmet>
            <Container>
                <Row>
                    <Col>
                        <h1>About Us</h1>
                        <p>
                            Wilmac Flooring is a customer-focused, quality-driven, family-owned company with more than
                            40 years of experience. The company opened its doors in 1979 under the name of Carnegie Tile
                            and Carpet in Carnegie, Pennsylvania. In 1982, the name was changed to Wilmac Flooring to
                            reflect the sole ownership of William McGrath. Since then, the company has moved locations
                            twice while remaining loyal to its roots in the Carnegie business district. In 2003, the
                            second generation joined the company with the addition of Tim McGrath. In 2010, Wilmac
                            Flooring expanded its current location while restoring the showroom and storefront.
                        </p>
                        <h2>Our Services</h2>
                        <p>
                            Flooring for residential, commercial, new construction, remodeling projects and all of your
                            custom design needs.
                        </p>
                        <h2>Our Goal</h2>
                        <p>
                            Our goal is to assist in your dream project by providing you with friendly, knowledgeable
                            experience and quality craftsmanship for a stress-free job.
                        </p>
                        <h2>Our Values</h2>
                        <p>
                            Wilmac Flooring believes in Old World business values where customers are guaranteed quality
                            products and excellent craftsmanship with attention to detail and personal client
                            interaction. Wilmac Flooring offers a unique shopping experience where clients receive
                            private, one-on-one studio time. Our newly renovated showroom offers an expansive selection
                            of materials, which allows us to accommodate your artistic creation or custom dream project.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ScreensAbout;
