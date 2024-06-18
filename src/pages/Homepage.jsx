import { Link } from 'react-router-dom'
import styled from 'styled-components'

import BookCard from '../components/BookCard'
import booksDummyData from '../data/booksDummyData'


const StyledCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`

const HomePage = () => {
  console.log('books data', booksDummyData)

  return (
    <div>
      <StyledCardsContainer>
        {booksDummyData.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            // img={book.coverImage}
            // title={book.title}
            // author={book.author}
            // shortDescription={book.shortDescription}
            // rating={book.rating}
          />
        ))}
      </StyledCardsContainer>
      <Link to="/myList">go to my list</Link>
    </div>
  )
}

export default HomePage