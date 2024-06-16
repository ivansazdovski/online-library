import styled from 'styled-components'
import { FaXTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa6'

import { colors } from '../styles/colors'
import { getCurrentYear } from '../utils/utils'


const StyledFooter = styled.footer`
  height: 150px;
  color: ${colors.platinum};
  background-color: ${colors.blue3};
  width: 100%;
  display: flex;
  flex-direction: column;

  .social-links {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      padding: 2px 8px 6px 8px;
      margin: 5px;
      border: 2px solid ${colors.platinum};
      border-radius: 50px;
      text-decoration: none;
      color: inherit;
    }
  }

  .copyright {
    height: 50px;
    background-color: ${colors.richBlack};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const Footer = () => {
  
  return (
    <StyledFooter>
      <div className='social-links'>
        <a href='https://instagram.com/' target='_blank' role='button'><FaInstagram /></a>
        <a href='https://facebook.com/' target='_blank' role='button'><FaFacebookF /></a>
        <a href='https://twitter.com/' target='_blank' role='button'><FaXTwitter /></a>
      </div>
      <div className='copyright'>
        <span>© {getCurrentYear()} Ivan Sazdovski</span>
      </div>
    </StyledFooter>
  )
}

export default Footer
