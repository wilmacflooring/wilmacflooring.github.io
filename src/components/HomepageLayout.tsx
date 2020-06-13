import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import {
    Button,
    Container,
    Grid,
    Header,
    Icon,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
} from 'semantic-ui-react';

// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
    const isSSR = typeof window === 'undefined';

    return isSSR ? (Responsive.onlyTablet.minWidth as number) : window.innerWidth;
};

const Nav = (props: any) => <NavLink exact {...props} activeClassName="active" />;

interface IProps {
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>, data: any) => void;
}

class Pages extends React.Component<IProps> {
    render() {
        return (
            <React.Fragment>
                <Menu.Item as={Nav} to="/" name="home" position="right" onClick={this.props.onClick}>
                    <Icon name="home" />
                    Home
                </Menu.Item>
                {/* <Menu.Item as={Nav} to="/projects" name="projects" onClick={this.props.onClick}>
                    <Icon name="briefcase" />
                    Projects
                </Menu.Item> */}
                <Menu.Item as={Nav} to="/about" name="about" onClick={this.props.onClick}>
                    <Icon name="info" />
                    About
                </Menu.Item>
                <Menu.Item as={Nav} to="/contact" name="contact" onClick={this.props.onClick}>
                    <Icon name="address book" />
                    Contact
                </Menu.Item>
            </React.Fragment>
        );
    }
}

interface IDesktopProps {
    children: any;
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component<IDesktopProps> {
    render() {
        const { children } = this.props;

        return (
            <Responsive minWidth={Responsive.onlyTablet.minWidth} getWidth={getWidth}>
                <Visibility>
                    <Segment inverted textAlign="center" style={{ padding: '1em 0em' }} vertical>
                        <Menu inverted={true} secondary={true} size="large">
                            <Container>
                                <Menu.Item as={Link} to="/" name="home">
                                    {/* <img src={logo} alt="logo" /> */}
                                </Menu.Item>
                                <Pages />
                            </Container>
                        </Menu>
                    </Segment>
                </Visibility>
                {this.props.children}
            </Responsive>
        );
    }
}

interface IMobileProps {
    children: Node;
}

interface IMobileState {
    sidebarOpened: boolean;
}

class MobileContainer extends Component<IMobileProps, IMobileState> {
    constructor(props: IMobileProps) {
        super(props);

        this.state = {
            sidebarOpened: false,
        };
    }

    handleSidebarHide = () => this.setState({ sidebarOpened: false });

    handleSidebarShow = () => this.setState({ sidebarOpened: true });

    render() {
        const { children } = this.props;
        const { sidebarOpened } = this.state;

        return (
            <Responsive as={Sidebar.Pushable} getWidth={getWidth} maxWidth={Responsive.onlyMobile.maxWidth}>
                <Sidebar
                    as={Menu}
                    animation="overlay"
                    direction="right"
                    inverted
                    onHide={this.handleSidebarHide}
                    vertical
                    visible={sidebarOpened}
                >
                    <Header style={{ padding: '1em 0em .5em 1em' }} inverted={true} as="h3">
                        Menu
                        <Icon style={{ float: 'right' }} name="close" link onClick={this.handleSidebarHide} />
                    </Header>
                    <Pages onClick={this.handleSidebarHide} />
                </Sidebar>

                <Sidebar.Pusher dimmed={sidebarOpened}>
                    <Segment inverted textAlign="center" style={{ padding: '1em 0em' }} vertical>
                        <Container>
                            <Menu inverted={true} secondary={true} size="large">
                                <Menu.Item as={Link} to="/" name="home">
                                    {/* <img src={logo} alt="logo" /> */}
                                </Menu.Item>
                                <Menu.Item position="right">
                                    <Button inverted={true} onClick={this.handleSidebarShow}>
                                        <Icon name="sidebar" />
                                        Menu
                                    </Button>
                                </Menu.Item>
                            </Menu>
                        </Container>
                    </Segment>
                    {children}
                </Sidebar.Pusher>
            </Responsive>
        );
    }
}

const ResponsiveContainer = ({ children }: any) => (
    <div>
        <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer>{children}</MobileContainer>
    </div>
);

ResponsiveContainer.propTypes = {
    children: PropTypes.node,
};

const HomepageLayout = ({ children }: any) => (
    <ResponsiveContainer>
        {children}

        {/* Footer */}
        <Segment inverted vertical style={{ padding: '2em 0em 1em 0em' }}>
            <Container>
                <Grid divided inverted stackable>
                    <Grid.Row>
                        <Grid.Column width={13}>
                            <p>
                                <a href="https://github.com/rusticsanta/rusticsanta.github.io/blob/source/LICENSE">
                                    All content is copyright © {new Date().getFullYear()} Rustic Santa, any trademarks
                                    are property of their respective owners
                                </a>
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    </ResponsiveContainer>
);

export default HomepageLayout;
