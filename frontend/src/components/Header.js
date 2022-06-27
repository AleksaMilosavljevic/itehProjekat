import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container, NavDropdown, Image } from "react-bootstrap";
import { logout } from "../actions/userActions";
import SearchBox from "./SearchBox";
import { Route } from "react-router-dom";

const Header = () => {
    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const logoutHandler = () => {
        dispatch(logout());
    };

    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>Projekat Iteh</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Route
                                render={({ history }) => (
                                    <SearchBox history={history} />
                                )}
                            />
                        </Nav>
                        <Nav className="ml-auto h5">
                            <LinkContainer to="/cart">
                                <Nav.Link>
                                    <i className="fas fa-shopping-cart"></i>{" "}
                                    CART{" "}
                                    {cartItems.length > 0 &&
                                        `(${cartItems.length})`}
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/search">
                                <Nav.Link>Prodavnica</Nav.Link>
                            </LinkContainer>

                            {userInfo ? (
                                <NavDropdown
                                    title={userInfo.name}
                                    id="username"
                                    className="mr-0"
                                >
                                    <LinkContainer to="/profile" className="h4">
                                        <NavDropdown.Item>
                                            Korisnik
                                        </NavDropdown.Item>
                                    </LinkContainer>
                                    <NavDropdown.Item
                                        onClick={logoutHandler}
                                        className="h4"
                                    >
                                        Logout
                                    </NavDropdown.Item>
                                </NavDropdown>
                            ) : (
                                <LinkContainer to="/login">
                                    <Nav.Link>
                                        <i className="fas fa-user"></i> Login
                                    </Nav.Link>
                                </LinkContainer>
                            )}
                            {userInfo && userInfo.isAdmin && (
                                <NavDropdown title={"ADMIN"} id="adminmenu">
                                    <LinkContainer
                                        to="/admin/userslist"
                                        className="h4"
                                    >
                                        <NavDropdown.Item>
                                            Korisnici
                                        </NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer
                                        to="/admin/productlist"
                                        className="h4"
                                    >
                                        <NavDropdown.Item>
                                            Proizvodi
                                        </NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer
                                        to="/admin/orderlist"
                                        className="h4"
                                    >
                                        <NavDropdown.Item>
                                            Porudzbine
                                        </NavDropdown.Item>
                                    </LinkContainer>
                                </NavDropdown>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
