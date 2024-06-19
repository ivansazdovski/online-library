import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Col, Row } from 'react-bootstrap'
import { FaHeart, FaCheckCircle } from 'react-icons/fa'
import { RiCloseCircleFill } from 'react-icons/ri'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import styled from 'styled-components'

import StarRating from '../components/StarRating'
import { useBooksContext } from '../stores/BooksProvider'
import { colors } from '../styles/colors'


const StyledContainer = styled.div`
  display: flex;
  gap: 2em;

  .left-wrapper {
    flex: 1;
    padding: 10px 0;
  }

  .right-wrapper {
    flex: 2;
  }

  .main-info {
    border-bottom: 2px solid lightgray;
    p {
      margin: 0;
    }
  }

  .author {
    font-size: 1.3rem;
    font-weight: 500;
    font-style: italic;
    opacity: 0.4;
    margin: 0
  }

  .product-details {
    p {
      margin: 0;
    }
    
    .col:first-child {
      text-align: right;
      opacity: 0.6;
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
  cursor: disabledpointer;
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

const BookDetailsPage = () => {
  const { bookId } = useParams()
  const { getBookDetails } = useBooksContext()
  const [book, setBook] = useState({})

  useEffect(() => {
    let foundBook = getBookDetails(bookId)
    console.log('foundBook', foundBook)
    setBook(foundBook)
  }, [getBookDetails, bookId])

  return (
    <StyledContainer>
      <div className='left-wrapper'>
        <img src="https://picsum.photos/400/550?random=1" />
      </div>
      <div className='right-wrapper'>
        <div className="main-info mb-4">
          <h1 className="my-0">{book.title}</h1>
          <div className="author mb-0">{book.author}</div>
          <StarRating rating={book.rating} size="20" />
          {book.available
            ? <p style={{marginTop: '24px',display: 'flex', alignItems: 'center', gap: 5, fontWeight: "500", color: "green", marginBottom: 0}}><FaCheckCircle style={{ fontSize: '18px'}} /> AVAILABLE</p> 
            : <p style={{marginTop: '24px', display: 'flex', alignItems: 'center', gap: 5, fontWeight: "500", color: "#de2454", marginBottom: 0}}><RiCloseCircleFill style={{ fontSize: '18px'}} /> OUT OF STOCK</p>}
          <div className="d-flex gap-3 mb-3">
            <CartButton disabled={!book.available}>
              <AiOutlineShoppingCart /> <span>Add to cart</span>
            </CartButton>
            <CartButton style={{ backgroundColor: 'white', border: '1px solid lightgray', color: colors.blue3}}>
              <FaHeart /> <span>Add to wishlist</span>
            </CartButton>
          </div>
        </div>

        <div className="description mb-4">
          <h5>Description</h5>
          <p><strong><em>{book.shortDescription}</em></strong></p>
          <p>{book.fullDescription}</p>
        </div>

        <div className="product-details mb-4">
          <h5>Product Details</h5>
          <Row>
            <Col>
              <p>ISBN</p>
              <p>Publisher</p>
              <p>Publication date</p>
              <p>Pages</p>
              <p>Weight</p>
              <p>Dimensions</p>
            </Col>
            <Col>
              <p>{book.isbn}e</p>
              <p>{book.publisher}</p>
              <p>{book.publicationDate}</p>
              <p>{book.pages}</p>
              <p>{book.weight}</p>
              <p>{book.dimensions}</p>
            </Col>
          </Row>
        </div>

        <div>
          <h5>About the  Author</h5>
          <p>{book.aboutAuthor}</p>
        </div>
      </div>
    </StyledContainer>
  )
}

export default BookDetailsPage