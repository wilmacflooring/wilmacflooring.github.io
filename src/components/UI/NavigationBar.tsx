import React, { FunctionComponent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const NavigationBar: FunctionComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink tag={Link} to="/" name="home">
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/about" name="about">
                                About Us
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/products" name="products">
                                Our Products
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/gallery" name="gallery">
                                Photo Gallery
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/contact" name="contact">
                                Contact Us
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default NavigationBar;
