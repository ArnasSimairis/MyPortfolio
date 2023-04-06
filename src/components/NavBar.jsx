import { Link } from "react-router-dom";

import Nav from "react-bootstrap/Nav"
import NavBar from "react-bootstrap/NavBar"
import Container from "react-bootstrap/Container"

const ANavBar = () => {
    return (
        <NavBar>
            <Container>
                <Nav>
                    <h3>Arnas.JS</h3>
                    <Link to="/" className="nav-link">About</Link>
                    <Link to="/contac" className="nav-link">Contacts</Link>
                </Nav>
            </Container>
        </NavBar>
    )
}

export default ANavBar