import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from './CartWidget'
 

export const Header = () => {
  return (
    <>
      <Navbar  className='Navbar'>
        <img src="./assets/img/Logo.jpg" alt="Logo" className='logo' />
        <Container className="justify-content-center">
          <Nav className='links'>
            <Nav.Item>
              <Nav.Link href="/home">Inicio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Productos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Contacto</Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
        < CartWidget/>
      </Navbar>
    </>
  )

}

export default Header;
