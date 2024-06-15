import { Badge, Card } from 'react-bootstrap'
import styled from 'styled-components'


const StyledContainer = styled.div`
  width: 18rem;
  background-color: rgba(177, 201, 240, 0.5);
  border-radius: 10px;

  img {
    width: 200px;
    hi
  }
`

const BookItem = () => {


  return (
    <StyledContainer>
      <Card>
        <Card.Img variant="top" src="https://picsum.photos/200/180?random=1" alt="book title" />
        <Card.Body>
          <Card.Title>My title</Card.Title>
          <Card.Text>Book Author</Card.Text>
          <Card.Text>Short description</Card.Text>
          <Badge bg="secondary">Rating: 4.5</Badge>
        </Card.Body>
      </Card>
    </StyledContainer>
  )
}

export default BookItem