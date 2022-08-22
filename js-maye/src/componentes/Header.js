import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const Header = () => {
     return(
        <>
        <Navbar bg="dark" variant="dark" className="justify-content-center">
        <Container>
          <img src="/js-maye/public/assets/img/Logo.jpg" alt="Logo" className='logo'/>  
          <Nav className="me-auto">
            <Nav.Link href="">Inicio</Nav.Link>
            <Nav.Link href="">Productos</Nav.Link>
            <Nav.Link href="">Contacto</Nav.Link> 
          </Nav>
          <img src="/js-maye/public/assets/img/carrito de compras.png" alt="carrito de compras"/>
        </Container>
      </Navbar>
      </>
     )
           
}
 
export default Header;
 