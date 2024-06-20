import { createContext, useCallback, useContext, useState } from 'react'
import booksDummyData from '../data/booksDummyData'
import axios from 'axios'

const BooksContext = createContext()
export const useBooksContext = () => useContext(BooksContext)


const BooksProvider = ({ children }) => {
  const [likedBooks, setLikedBooks] = useState([])
  const [activeUsers, setActiveUsers] = useState([])

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

  const getBookDetails = (bookId) => {
    return booksDummyData.find(book => book.id === bookId)
  }

  const getMostActiveUsers = useCallback(() => {
    axios.get('https://reqres.in/api/users')
      .then(response => {
        console.log('response getMostActiveUsers', response.data.data)
        setActiveUsers(response.data.data)
      }).catch(error => {
        console.log('error getMostActiveUsers', error)
      })
  }, [])

  const contextValues = {
    likedBooks, setLikedBooks,
    addLikedBook,
    removeLikedBook,
    checkIfLiked,
    getBookDetails,
    getMostActiveUsers,
    activeUsers, setActiveUsers
  }

  return (
    <BooksContext.Provider value={contextValues}>
      {children}
    </BooksContext.Provider>
  )
}

export default BooksProvider