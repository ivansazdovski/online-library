import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import ErrorPage from './pages/ErrorPage'
import HomePage from './pages/HomePage'
import BookDetailsPage from './pages/BookDetailsPage'
import WishlistPage from './pages/WishlistPage'
import Breadcrumbs from './components/Breadcrumbs'
import BooksProvider from './stores/BooksProvider'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BooksPage from './pages/BooksPage'


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/wishlist",
    element: <WishlistPage />
  },
  {
    path: "/books",
    element: <BooksPage />
  },
  {
    path: "/books/:bookId",
    element: <BookDetailsPage />
  },
  {
    path: "*",
    element: <ErrorPage />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BooksProvider>
        <Header />
        {/* <Breadcrumbs /> */}
        <div className='container'>
          <RouterProvider router={router} />
          {/* <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/books/:bookId" element={<BookDetailsPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes> */}
        </div>
        <Footer />
      </BooksProvider>
  </React.StrictMode>,
)
