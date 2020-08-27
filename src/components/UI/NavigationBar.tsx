import React, { FunctionComponent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, NavbarBrand } from 'reactstrap';
import { Image, Transformation } from 'cloudinary-react';
import './NavigationBar.css';

const NavigationBar: FunctionComponent = () => {
    const [activeItem, setActive] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const handleClick = (i: number) => setActive(i);

    return (
        <div className="NavigationBar">
            <Container>
                <Row>
                    <Col>
                        <Navbar color="fixed" light expand="md">
                            <NavbarBrand href="/">
                                <div>
                                    <Image cloudName="wilmacflooring" publicId="IMG_2550_wpodlk.jpg">
                                        <Transformation
                                            aspectRatio="1:1"
                                            gravity="auto"
                                            radius="max"
                                            width="50"
                                            crop="fill"
                                            secure={true}
                                            quality="auto"
                                            fetchFormat="auto"
                                        />
                                    </Image>{' '}
                                    WILMAC FLOORING
                                </div>
                            </NavbarBrand>
                            <NavbarToggler onClick={toggle} />
                            <Collapse isOpen={isOpen} navbar>
                                <Nav className="mr-auto" navbar>
                                    <NavItem active={activeItem === 0} onClick={() => handleClick(0)}>
                                        <NavLink tag={Link} to="/" name="home">
                                            Home
                                        </NavLink>
                                    </NavItem>
                                    <NavItem active={activeItem === 1} onClick={() => handleClick(1)}>
                                        <NavLink tag={Link} to="/about" name="aboutt">
                                            About Us
                                        </NavLink>
                                    </NavItem>
                                    <NavItem active={activeItem === 2} onClick={() => handleClick(2)}>
                                        <NavLink tag={Link} to="/products" name="products">
                                            Our Products
                                        </NavLink>
                                    </NavItem>
                                    <NavItem active={activeItem === 3} onClick={() => handleClick(3)}>
                                        <NavLink tag={Link} to="/gallery" name="gallery">
                                            Photo Gallery
                                        </NavLink>
                                    </NavItem>
                                    {/* <NavItem>
                            <NavLink tag={Link} to="/contact" name="contact">
                                Contact Us
                            </NavLink>
                        </NavItem> */}
                                </Nav>
                            </Collapse>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NavigationBar;
