import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/NavigationBar.css';

function NavigationBar() {
  return (
    <Navbar className='NavigationBar' bg="none" expand="lg">
      <Container>
        <Link className="router-link" to="/">
          <img
            src={logo}
            width="70"
            height="70"
            className="d-inline-block align-top"
            alt="Izxxr"
          />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="router-link" to="/">
              <Nav.Link href="/" className="nav-link">Home</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
