import styled from 'styled-components'

import BookCard from '../components/BookCard'
import booksDummyData from '../data/booksDummyData'


const StyledCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`

const BooksPage = () => {
  return (
    <div>
      <StyledCardsContainer>
        {booksDummyData.map((book) => (
          <BookCard
            key={book.id}
            book={book}
          />
        ))}
      </StyledCardsContainer>
    </div>
  )
}

export default BooksPage