import React, { FunctionComponent } from 'react';
import Helmet from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';
import { Image, Transformation } from 'cloudinary-react';
import './About.css';

const ScreensAbout: FunctionComponent = () => {
    return (
        <div className="About">
            <Helmet>
                <title>Wilmac Flooring - About Us</title>
                <meta name="description" content="About Page for Wilmac Flooring." />
                <meta name="subject" content="About" />
            </Helmet>
            <Container>
                <Row>
                    <Col>
                        <h1>About Us</h1>
                        <br />
                        <h3>What sets Wilmac Flooring apart</h3>
                        <p>
                            Wilmac Flooring is a customer-focused, quality-driven, family-owned company with more than
                            40 years of experience. The company opened its doors in 1979 under the name of Carnegie Tile
                            and Carpet in Carnegie, Pennsylvania. In 1982, the name was changed to Wilmac Flooring to
                            reflect the sole ownership of William McGrath. Since then, the company has moved locations
                            twice while remaining loyal to its roots in the Carnegie business district. In 2003, the
                            second generation joined the company with the addition of Tim McGrath. In 2010, Wilmac
                            Flooring expanded its current location while restoring the showroom and storefront.
                        </p>
                        <h4>Our Services</h4>
                        <p>
                            Flooring for residential, commercial, new construction, remodeling projects and all of your
                            custom design needs.
                        </p>
                        <h4>Our Goal</h4>
                        <p>
                            Our goal is to assist in your dream project by providing you with friendly, knowledgeable
                            experience and quality craftsmanship for a stress-free job.
                        </p>
                        <h4>Our Values</h4>
                        <p>
                            Wilmac Flooring believes in Old World business values where customers are guaranteed quality
                            products and excellent craftsmanship with attention to detail and personal client
                            interaction. Wilmac Flooring offers a unique shopping experience where clients receive
                            private, one-on-one studio time. Our newly renovated showroom offers an expansive selection
                            of materials, which allows us to accommodate your artistic creation or custom dream project.
                        </p>
                        <br />
                        <h3>Meet Tim McGrath</h3>
                        <Image
                            cloudName="wilmacflooring"
                            publicId="WillTim_ych8rm"
                            secure={true}
                            quality="auto"
                            fetchFormat="auto"
                            alt="Wilmac Flooring Logo"
                        >
                            <Transformation crop="scale" />
                        </Image>

                        <br />
                        <p>
                            <i>Insert a quick write-up of Tim Here with a different picture. </i>
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ScreensAbout;
