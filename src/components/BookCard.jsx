import { Badge, Button, Card, OverlayTrigger, Tooltip } from 'react-bootstrap'
import styled from 'styled-components'

import StarRating from './StarRating'
import { FaHeart, FaShoppingCart } from 'react-icons/fa'
import { CgMoreO } from "react-icons/cg";
import { useState } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { colors } from '../styles/colors';

const StyledContainer = styled.div`
  .card {
    width: 300px;
      padding-bottom: 10px;

  }

  img {
    border-radius: 5px 5px 0 0;
  }

  .title-rating {
    display: flex;
    justify-content: space-between;
  }

  .author {
    // color: gray;
    font-size: 12px;
    display: block;
    font-style: italic;
    opacity: 0.4;
  }

  .heart-icon {
    font-size: 24px;
    cursor: pointer;
    color: ${({isLiked}) => (isLiked ? '#b53c31' : 'lightgray')};
    transition: color 0.3s ease;
  }

  .heart-icon:hover {
    color: ${({isLiked}) => (isLiked ? 'darkred' : 'grey')};
  }
  
`

const CartButton = styled(Button)`
  background-color: ${colors.blue2};
  border: none;
  border-radius: 20px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  padding: 8px 12px;
  display: flex;
  align-items: center;

  svg {
    margin-right: 5px;
    font-size: 20px;
    border-radius: 25px;
  }
`

const BookCard = () => {
  const [isLiked, setIsLiked] = useState(false)

  const handleToggleLike = () => {
    setIsLiked(prevIsLiked => !prevIsLiked)
  }

  const renderToolTip = (props) => {
    const tooltipText = isLiked ? 'Remove from my list' : 'Add to my list'
    return (
      <Tooltip id="liked-tooltip" {...props}>
        {tooltipText}
      </Tooltip>
    )
  }

  return (
    <StyledContainer isLiked={isLiked}>
      <Card bg="light">
        <Card.Img variant="top" src="https://picsum.photos/300/150?random=1" alt="book title" />
        <Card.Body>
          <Card.Title>
            <div className="title-rating">Just as I Am <span><StarRating rating="2.5" /></span></div>
            <span className="author">Jane McClaskey</span>
          </Card.Title>
          <Card.Text>A young woman faces trials that uncover her true potential, meeting mentors and allies who challenge her to embrace her inner power.</Card.Text>
          <div style={{display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'end'}}>
            <OverlayTrigger placement="bottom" overlay={renderToolTip}>
              <span>
              <FaHeart className="heart-icon" onClick={handleToggleLike} />

              </span>
            </OverlayTrigger>
            <CartButton>
              <AiOutlineShoppingCart /> <span>Add to cart</span>
            </CartButton>
          </div>
        </Card.Body>
      </Card>
    </StyledContainer>
  )
}

export default BookCard