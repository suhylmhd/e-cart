import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';

function Header() {
  //to access state useSelector hook is used
  const wishlist = useSelector((state)=>state.wishlistReducer)//here the state represent store

  const cart = useSelector((state)=>state.cartReducer)
  
  return (
    <Navbar expand="lg" className="bg-danger position-fixed top-0 w-100" style={{zIndex:'1'}}>
      <Container>
        <Navbar.Brand ><Link to={'/'} style={{color:'white',textDecoration:'none'}}><i class="fa-solid fa-cart-shopping fa-beat me-3"></i>E-CART</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='btn border rounded me-5 mt-2'><Link to={'/wishlist'} style={{color:'white',textDecoration:'none'}}><i class="fa-solid fa-heart me-2" style={{color:'yellow'}} ></i>Wishlist <Badge bg="success">{wishlist.length}</Badge></Link></Nav.Link>
            <Nav.Link className='btn border rounded me-5 mt-2'><Link to={'/cart'} style={{color:'white',textDecoration:'none'}}><i class="fa-solid fa-cart-shopping" style={{color:'yellow'}}></i>Cart<Badge bg="success">{cart.length}</Badge></Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header