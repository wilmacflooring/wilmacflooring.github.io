import React, { FunctionComponent } from 'react';
import Helmet from 'react-helmet';
import ImageGallery from 'react-image-gallery';
import { Container, Row, Col } from 'reactstrap';

// import ProjectGroup from '../../components/Project/Group';
import './Home.css';

const images = [
    {
        original:
            'https://res.cloudinary.com/wilmacflooring/image/upload/c_scale/c_scale,f_auto,q_auto/cropped-StairsTop_ywk1mh',
        thumbnail:
            'https://res.cloudinary.com/wilmacflooring/image/upload/t_media_lib_thumb/v1598209117/cropped-StairsTop_ywk1mh.png',
        originalAlt: 'Beautiful tile work done by Wilmac Flooring.',
        thumbnailAlt: 'Beautiful tile work done by Wilmac Flooring.',
    },
    {
        original: 'https://res.cloudinary.com/wilmacflooring/image/upload/c_scale/c_scale,f_auto,q_auto/entry_gwynom',
        thumbnail:
            'https://res.cloudinary.com/wilmacflooring/image/upload/c_thumb,w_200,g_face/v1598720714/entry_gwynom.png',
        originalAlt: 'Incredible Entryway with custom centered tile.',
        thumbnailAlt: 'Incredible Entryway with custom centered tile.',
    },
    {
        original:
            'https://res.cloudinary.com/wilmacflooring/image/upload/c_scale/c_scale,f_auto,q_auto/floorAndTile_ydxzih',
        thumbnail:
            'https://res.cloudinary.com/wilmacflooring/image/upload/c_thumb,w_200,g_face/v1598720714/floorAndTile_ydxzih.png',
        originalAlt: 'Beautiful wood floors and tile combined together. Work by Wilmac Flooring.',
        thumbnailAlt: 'Beautiful wood floors and tile combined together. Work by Wilmac Flooring.',
    },
];

/* eslint-disable react/no-multi-comp */
/* Heads up! ScreensHome uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 * @TODO: Remove the inline styling everywhere
 */
const ScreensHome: FunctionComponent = () => (
    <div>
        {/* Defining the Page title, meta, description */}
        <Helmet>
            <title>Wilmac Flooring - Home</title>
            <meta name="description" content="Contains the featured projects of Wilmac Flooring." />
            {/* TODO: Add subject content for SEO. */}
            <meta name="subject" content="Technology Portfolio" />
        </Helmet>
        <h1>Latest Work</h1>
        <div className="Home">
            <Container>
                <Row>
                    <Col>
                        <ImageGallery items={images} showBullets={true} />
                    </Col>
                </Row>
            </Container>
        </div>
        {/* <div>
            <h2>
                <a>Visit our Photo Gallery</a>
            </h2>
        </div> */}
    </div>
);

export default ScreensHome;
