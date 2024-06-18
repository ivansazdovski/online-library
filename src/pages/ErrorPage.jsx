import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { colors } from '../styles/colors'
import monsterErrorImg from '../assets/monsterErrorImg.png'

const StyledWrapper = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  text-align: center;
  margin: 0 auto;

  img {
    width: 130px;
  }

  a {
    background-color: ${colors.blue2};
    border: none;
    text-transform: uppercase;
  }
`

const ErrorPage = () => {
  return (
    <StyledWrapper>
      <img src={monsterErrorImg} />
      <h1>Opps! Page Not Found.</h1>
      <h4>You must have picked the wrong door because I haven&apos;t been able to lay my eye on the page you are searching for.</h4>
      <Link to='/' className="btn btn-primary px-4">Go to home page</Link>
    </StyledWrapper>
  )
}

export default ErrorPage