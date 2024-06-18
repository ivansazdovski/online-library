import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BooksProvider from './stores/BooksProvider'
import MyList from './pages/MyListPage'
import BookDetails from './components/BookDetails'


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/myList",
    element: <MyList />
  },
  {
    path: "/books/:bookId",
    element: <BookDetails />
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
      <div className='container'>
        <RouterProvider router={router} />
      </div>
      <Footer />
    </BooksProvider>
  </React.StrictMode>,
)
