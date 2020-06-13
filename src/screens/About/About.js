import React from 'react';
import Helmet from 'react-helmet';
import { Container, Header, Segment, Grid, Divider } from 'semantic-ui-react';
import AboutImageCard from '../../components/About/ImageCard';
import UITable from '../../components/UI/Table';
import './About.css';

const experienceHeaders = ['RusticSantaTitle', 'RusticSantaTitle'];
const experienceRows = [
    ['RusticSantaDescription', 'RusticSantaDescription'],
    ['RusticSantaDescription', 'RusticSantaDescription'],
];
const educationHeaders = ['RusticSantaTitle', 'RusticSantaTitle'];
const educationRows = [['RusticSantaDescription', 'RusticSantaDescription']];
const skillsHeaders = [];
const skillsRows = [['RusticSantaDescription'], ['RusticSantaDescription']];

const ScreensAbout = () => (
    <Segment inverted vertical className="About-segment">
        {/* Defining the Page title, meta, description */}
        <Helmet>
            <title>Rustic Santa - About</title>
            <meta name="description" content="About Page for Rustic Santa." />
            <meta name="subject" content="About" />
        </Helmet>
        <Container>
            <Grid inverted stackable>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Header inverted as="h1">
                            About
                        </Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={6}>
                        <AboutImageCard />
                    </Grid.Column>
                    <Grid.Column width={8} className="About-intro">
                        <p>
                            Rustic Santa Description. Rustic Santa Description. Rustic Santa Description. Rustic Santa
                            Description. Rustic Santa Description. Rustic Santa Description. Rustic Santa Description.
                            Rustic Santa Description. Rustic Santa Description.
                        </p>
                        <p>
                            Rustic Santa Description. Rustic Santa Description. Rustic Santa Description. Rustic Santa
                            Description. Rustic Santa Description. Rustic Santa Description. Rustic Santa Description.
                            Rustic Santa Description. Rustic Santa Description.
                        </p>
                        <p>
                            Rustic Santa Description. Rustic Santa Description. Rustic Santa Description. Rustic Santa
                            Description. Rustic Santa Description. Rustic Santa Description. Rustic Santa Description.
                            Rustic Santa Description. Rustic Santa Description.
                        </p>
                    </Grid.Column>
                </Grid.Row>
                <Divider />
                <Grid.Row>
                    <Grid.Column width={6}>
                        <UITable headers={experienceHeaders} rows={experienceRows} title={'Experience'} />
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <UITable headers={educationHeaders} rows={educationRows} title={'Education'} />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <UITable headers={skillsHeaders} rows={skillsRows} title={'Technical Skills'} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    </Segment>
);

export default ScreensAbout;
