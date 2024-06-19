import { useState } from 'react';
import { useBooksContext } from '../stores/BooksProvider'
import { Link } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap'
import { FaTrashAlt } from 'react-icons/fa'
import { colors } from '../styles/colors';

const WishlistPage = () => {
  const { likedBooks, removeLikedBook } = useBooksContext();
  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const [selectedBookId, setSelectedBookId] = useState(null)


  const handleClickRemove = (bookId) => {
    console.log('handle click remove', bookId)
    setSelectedBookId(bookId)
    setShowConfirmModal(true)
    // removeLikedBook()
  }

  const confirmRemoval = (bookId) => {
    removeLikedBook(bookId)
    setShowConfirmModal(false)
  }

  if (likedBooks.length === 0) {
    return <div>No books liked yet.</div>;
  }

  return (
    <div>
      <table className="table mt-5">
        <thead>
          <tr>
            <th></th>
            <th style={{ width: '200px' }}>Title</th>
            <th style={{ width: '150px' }}>Author</th>
            <th>Description</th>
            <th style={{ width: '200px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {likedBooks.map((book) => (
            <tr key={book.id}>
              <td><img style={{ width: '100px'}} src={book.coverImage} /></td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.shortDescription}</td>
              <td>
                <Link to={`/books/${book.id}`} className="btn btn-primary ml-2" style={{ backgroundColor: colors.blue2, border: 'none', marginRight: '1em' }}>View Details</Link>
                <FaTrashAlt title="Remove" style={{ cursor: 'pointer' }} onClick={() => handleClickRemove(book.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showConfirmModal &&
        <Modal show={true}>
          {/* <Modal.Header>
            <Modal.Title>Confirm book removal</Modal.Title>
          </Modal.Header> */}
          <Modal.Body>
            <h6>Are you sure you want to remove this book from your list?</h6>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowConfirmModal(false)}>Cancel</Button>
            <Button variant="primary" style={{ backgroundColor: colors.blue2, border: 'none' }} onClick={() => confirmRemoval(selectedBookId)}>Confirm</Button>
          </Modal.Footer>
        </Modal>
      }
    </div>
  );
}

export default WishlistPage