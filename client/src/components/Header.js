import React from 'react';
import { Container, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import {RiShoppingCartLine, RiUser3Line, RiSearch2Line} from 'react-icons/all'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <Navbar bg='light' className="px-5">
        <Container fluid>
        <Link to="/"><Navbar.Brand>PetShop</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link href='#link'>
                <RiSearch2Line className="text-dark font" />
            </Nav.Link>
            <Nav.Link href='#link'>
                <RiUser3Line className="text-dark font" />
            </Nav.Link>
            <Nav.Link href='#home'>
                <RiShoppingCartLine className="text-dark font" />
            </Nav.Link>
            {/* <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
