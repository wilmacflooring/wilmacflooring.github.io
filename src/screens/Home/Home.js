import React, { Component } from 'react';
import Helmet from 'react-helmet';

// import ProjectGroup from '../../components/Project/Group';
import './Home.css';

/* eslint-disable react/no-multi-comp */
/* Heads up! ScreensHome uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 * @TODO: Remove the inline styling everywhere
 */
class ScreensHome extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                {/* Defining the Page title, meta, description */}
                <Helmet>
                    <title>Wilmac Flooring - Home</title>
                    <meta name="description" content="Contains the featured projects of Wilmac Flooring." />
                    {/* TODO: Add subject content for SEO. */}
                    <meta name="subject" content="Technology Portfolio" />
                </Helmet>
                {/* <Segment inverted textAlign="center" className="Home-segment" vertical>
                    <Container text>
                        <Header as="h1" content="Rustic Santa" inverted className="Home-h1" />
                        <Header as="h2" content="Description to be added." inverted className="Home-h2" />
                    </Container>
                </Segment> */}
                {/* Header Page */}
                {/* <Segment textAlign="center" className="Home-segment" vertical>
                    <Container>
                        <Grid columns={1}>
                            <Grid.Row>
                                <Grid.Column>
                                    <Header as="h3" className="Home-h3">
                                        Some Of My Latest Work
                                    </Header>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>Description to be added</Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </Segment> */}
            </React.Fragment>
        );
    }
}

export default ScreensHome;
