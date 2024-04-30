import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
    return (
        <>
          <Navbar expand="lg" bg="info" data-bs-theme="info" className='rounded-0'>
            <Container fluid>
                <Navbar.Brand href="#home">
                <img src="image/travel.png" className='me-2' height="35" alt="" />
                 <strong SAFAR/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/About">About</Nav.Link>
                    <NavDropdown title="Top Destinations" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">
                            Lakshyadweep
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Masoorie
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                            Kaziranga
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">
                            Ayodhya 
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#">Premium Stay</Nav.Link>
                    <Nav.Link href="#">Bus Tickets</Nav.Link>
                    <Nav.Link href="/Contact">Contact</Nav.Link>
                    <NavDropdown title="Business" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/Login">
                            Business Login
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/Business">
                            Business Registration
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
                <div>
                <button type ="button" className= "btn-outline-prrimery me-3" >Login</button>
                <button type ="button" className= "btn-outline-prrimery me-3" >Sign-up</button>
                </div>
            </Container>
          </Navbar>
        </>
      );
}

export default Header;
            
     