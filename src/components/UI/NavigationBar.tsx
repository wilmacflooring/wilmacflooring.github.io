import React from 'react';
import { NavLink as ReactRouterNavLink } from 'react-router-dom';
import { Container, Row, Col, Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, NavbarBrand } from 'reactstrap';
import { Image, Transformation } from 'cloudinary-react';
import './NavigationBar.css';

interface IState {
    activeItem: number;
    isOpen: boolean;
}

class NavigationBar extends React.Component<unknown, IState> {
    constructor(props: unknown) {
        super(props);

        this.state = {
            isOpen: false,
            activeItem: 0,
        };
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    };

    render() {
        return (
            <div className="NavigationBar">
                <Container>
                    <Row>
                        <Col>
                            <Navbar color="fixed" light expand="md">
                                <NavbarBrand href="/">
                                    <div>
                                        <Image
                                            cloudName="wilmacflooring"
                                            publicId="IMG_2550_wpodlk"
                                            secure={true}
                                            quality="auto"
                                            fetchFormat="auto"
                                            alt="Wilmac Flooring Logo"
                                        >
                                            <Transformation
                                                aspectRatio="1:1"
                                                gravity="auto"
                                                radius="max"
                                                width="63"
                                                crop="fill"
                                            />
                                        </Image>{' '}
                                        WILMAC FLOORING
                                    </div>
                                </NavbarBrand>
                                <NavbarToggler onClick={this.toggle} />
                                <Collapse isOpen={this.state.isOpen} navbar>
                                    <Nav className="mr-auto" navbar>
                                        <NavItem>
                                            <NavLink
                                                tag={ReactRouterNavLink}
                                                to="/"
                                                exact={true}
                                                name="home"
                                                activeClassName="active"
                                            >
                                                Home
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                tag={ReactRouterNavLink}
                                                to="/about"
                                                name="about"
                                                activeClassName="active"
                                            >
                                                About Us
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                tag={ReactRouterNavLink}
                                                to="/products"
                                                name="products"
                                                activeClassName="active"
                                            >
                                                Our Products
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                tag={ReactRouterNavLink}
                                                to="/gallery"
                                                name="gallery"
                                                activeClassName="active"
                                            >
                                                Photo Gallery
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </Collapse>
                            </Navbar>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default NavigationBar;
