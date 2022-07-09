import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Header() {
    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/" exact>
                            Sign Up
                        </Nav.Link>

                        <Nav.Link as={NavLink} to="/edit">
                            Edit Player
                        </Nav.Link>
                        
                        <Nav.Link as={NavLink} to="/search">
                            Search
                        </Nav.Link>
                        
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}

export default Header;