import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'
import BooksProvider from './stores/BooksProvider'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BooksProvider>
      <Router>
        <App />
      </Router>
    </BooksProvider>
  </React.StrictMode>,
)
