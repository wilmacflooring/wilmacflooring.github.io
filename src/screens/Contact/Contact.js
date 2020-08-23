import React from 'react';
import Helmet from 'react-helmet';
import './Contact.css';

const ScreensContact = () => (
    <div>
        {/* Defining the Page title, meta, description */}
        <Helmet>
            <title>Wilmac Flooring - Contact</title>
            <meta name="description" content="Contact Page for Wilmac Flooring." />
            {/* TODO: Add subject to your SEO */}
            <meta name="subject" content="Contact" />
        </Helmet>
        <div>Contact page</div>
        {/* <Container>
            <Grid inverted stackable>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Header inverted as="h1">
                            Contact
                        </Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={16} className="Contact-contactinfo">
                        <blockquote>
                            <p>
                                Feel free to reach out with any questions or inquiries. Please do not send spam or try
                                to advertise any services to me.
                            </p>
                        </blockquote>
                        <Header inverted as="h3">
                            Email
                        </Header>
                        <p>
                            <a href="mailto:rusticsanta@hotmail.com">rusticsanta@hotmail.com</a>
                        </p>
                        <Header inverted as="h3">
                            LinkedIn
                        </Header>
                        <p>
                            <a href="https://www.linkedin.com/in/MattJonesCreation/">
                                linkedin.com/in/MattJonesCreation
                            </a>
                        </p>
                        <Header inverted as="h3">
                            Github
                        </Header>
                        <p>
                            <a href="https://github.com/MattJonesCreation">github.com/MattJonesCreation</a>
                        </p> 
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container> */}
    </div>
);

export default ScreensContact;
