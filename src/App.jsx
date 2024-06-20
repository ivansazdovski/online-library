import { Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage'
import BooksPage from './pages/BooksPage'
import BookDetailsPage from './pages/BookDetailsPage'
import AboutPage from './pages/AboutPage'
import WishlistPage from './pages/WishlistPage'
import ErrorPage from './pages/ErrorPage'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/books/:bookId" element={<BookDetailsPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App