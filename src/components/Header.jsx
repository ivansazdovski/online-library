import { Container, Nav, Navbar } from 'react-bootstrap'
import styled from 'styled-components'

import { colors } from '../styles/colors'
import libraryLogo1 from '../assets/libraryLogo1.png'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { FaHeart } from 'react-icons/fa'

const StyledNavbar = styled(Navbar)`
  padding: 5px 20px;
  background-color: ${colors.platinum};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.30);

  .navbar-collapse {
    background-color: ${colors.platinum};
  }

  

  img {
    width: 90px;
    height: auto;
  }

  svg {
    font-size: 20px;
  }
  
`

const Header = () => {

  return (
    <>
      <StyledNavbar collapseOnSelect expand="lg" sticky="top"> 
        <Container fluid>
          <Navbar.Brand href="/"><img src={libraryLogo1} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
          <Navbar.Collapse>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/books">Books</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link  href="/wishlist" className="d-flex gap-2" style={{ alignItems: 'center'}}>
                <FaHeart /> <span>Wishlist</span>
              </Nav.Link>
              <Nav.Link  href="/shoppingCart" className="d-flex gap-2" style={{ alignItems: 'center'}}>
                <AiOutlineShoppingCart /> <span>Cart</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </StyledNavbar>
    </>
    // <StyledHeader>
    //   <StyledHeaderLeft>
    //     <img src={libraryLogo1} />
    //   </StyledHeaderLeft>
    //   <StyledHeaderRight>
    //     <a>Home</a>
    //     <a>About</a>
    //     <a>Contact</a>
    //   </StyledHeaderRight>
    // </StyledHeader>
  )
}

export default Header
