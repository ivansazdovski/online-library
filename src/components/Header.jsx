import { Link, NavLink } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap'
import styled from 'styled-components'

import { colors } from '../styles/colors'
import libraryLogo1 from '../assets/libraryLogo1.png'

const StyledHeader = styled.header`
  padding: 0 50px;
  height: 50px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.30);
  background-color: ${colors.platinum};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 90px;
    height: auto;
  }
`

const StyledHeaderRight = styled.nav`

`

const StyledLink = styled(Link)`
  color: red;
`
const StyledNavbar = styled(Navbar)`
  padding: 0 50px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.30);
  background-color: #f8f9fa; // Adjust this color as needed
`;

const Header = () => {

  return (
    <StyledHeader>
      <StyledHeaderLeft>
        <img src={libraryLogo1} />
      </StyledHeaderLeft>
      <StyledHeaderRight>
        <a>Home</a>
        <a>About</a>
        <a>Contact</a>
      </StyledHeaderRight>
    </StyledHeader>
  )
}

export default Header
