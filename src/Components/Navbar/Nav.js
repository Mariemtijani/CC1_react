import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '@fortawesome/fontawesome-svg-core/styles.css';

import logo from './logo.svg'
import { Link } from 'react-router-dom';
import './Nav.css'
import BtnTheme from '../BtnTheme';
import {ThemeContext} from '../ThemeContext'
import { useContext, useEffect } from 'react'


 

function NavElement() {

  const {toggleTheme,theme} = useContext(ThemeContext)
  console.log(theme)

  return (
    <>
     <Navbar bg={theme ? "dark" : 'light'}   expand="lg">
      <Container>
        <Navbar.Brand >
            <img src={logo} style={{width:'70px', height:'70px'}} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: theme ? '#088F8F' : 'dark' }}/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link as={Link} to='/'  style={{ color:'#088F8F', fontWeight:'bold'}}>Home</Nav.Link>
            <Nav.Link  as={Link} to='/calculatore' style={{ color:'#088F8F', fontWeight:'bold'}}>Calculatore</Nav.Link>
            <Nav.Link  as={Link} to='/slider' style={{ color:'#088F8F', fontWeight:'bold'}}>Slider</Nav.Link>
            <Nav.Link  as={Link} to='/todolist' style={{ color:'#088F8F', fontWeight:'bold'}}>TodoList</Nav.Link>
            <Nav.Link  as={Link} to='/api' style={{ color:'#088F8F', fontWeight:'bold'}}>Api</Nav.Link>
            
          </Nav>
         <BtnTheme/>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </>
  );
}

export default NavElement;
