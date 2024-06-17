import { createContext, useContext, useState } from 'react'


const BooksContext = createContext()
export const useBooksContext = () => useContext(BooksContext)


const BooksProvider = ({ children }) => {
  const [likedBooks, setLikedBooks] = useState([])

  const addLikedBook = (book) => {
    setLikedBooks(prevBooks => [...prevBooks, book])
    console.log('book to be added', book)
    console.log('likedBooks after add', likedBooks)
  }

  const removeLikedBook = (bookId) => {
    let updatedBooks = likedBooks.filter(book => book.id !== bookId)
    setLikedBooks(updatedBooks)
  }

  const checkIfLiked = (bookId) => {
    return likedBooks.some(book => book.id === bookId)
  }

  const test123 = () => {
    console.log('testing works provider')
  }

  const contextValues = {
    likedBooks, setLikedBooks,
    addLikedBook,
    removeLikedBook,
    test123,
    checkIfLiked
  }

  return (
    <BooksContext.Provider value={contextValues}>
      {children}
    </BooksContext.Provider>
  )
}

export default BooksProvider