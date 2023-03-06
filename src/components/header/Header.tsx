import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../logo.svg';

const Header = ()=>{
    return <>
     <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Weather App</Navbar.Brand>
          <Nav className="me-auto">
          </Nav>
        </Container>
      </Navbar>
    </>
}
export default Header;