import { Badge, Button, Card, OverlayTrigger, Tooltip } from 'react-bootstrap'
import styled, { css } from 'styled-components'

import StarRating from './StarRating'
import { FaHeart, FaShoppingCart } from 'react-icons/fa'
import { CgMoreO } from "react-icons/cg";
import { useEffect, useState } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { colors } from '../styles/colors';
import { useBooksContext } from '../stores/BooksProvider';

const StyledContainer = styled.div`
  .card {
    width: 300px;
    padding-bottom: 10px;
  }

  img {
    border-radius: 5px 5px 0 0;
  }

  .author {
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    font-style: italic;
    opacity: 0.4;
  }

  .card-text {
    margin: 0;
    height: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 1.5em;
    line-clamp: 4;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }

  .heart-icon {
    font-size: 24px;
    cursor: pointer;
    transition: color 0.3s ease;
    color: ${(props) => (props.$liked === 'true' ? '#b53c31' : 'lightgray')};

    &:hover {
      color: ${(props) => (props.$liked === 'true' ? 'darkred' : 'grey')};
    }
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
  margin-top: 1em;

  svg {
    margin-right: 5px;
    font-size: 20px;
    border-radius: 25px;
  }
`

const BookCard = ({ book }) => {
  const { addLikedBook, removeLikedBook, checkIfLiked,  } = useBooksContext()
  const [isLiked, setIsLiked] = useState(false)

  useEffect(() => {
    const bookLiked = checkIfLiked(book.id)
    if (bookLiked) {
      setIsLiked(true)
    }
  }, [checkIfLiked, book.id])

  const handleToggleLike = () => {
    let newValue = !isLiked
    if (newValue) {
      addLikedBook(book)
    } else {
      removeLikedBook(book.id)
    }
    setIsLiked(newValue)
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
    <StyledContainer $liked={isLiked ? 'true' : 'false'}>
      <Card bg="light">
        <Card.Img variant="top" src={book.coverImage} alt="book title" />
        <Card.Body>
          <Card.Title>
            <div className='d-flex justify-content-end' style={{ gap: '1rem' }}>
              <span><StarRating rating={book.rating} /></span>
              <OverlayTrigger placement="bottom" overlay={renderToolTip}>
                <span><FaHeart className="heart-icon" onClick={handleToggleLike} /></span>
              </OverlayTrigger>
            </div>
            <div>{book.title}</div>
            <div className="author">{book.author}</div>
          </Card.Title>
          <Card.Text>{book.shortDescription}</Card.Text>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
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