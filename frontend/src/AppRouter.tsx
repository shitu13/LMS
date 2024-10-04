import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminDashboard from './pages/AdminDashboard'
import AddNewBook from './pages/AddNewBook'
import BookList from './pages/BookList'

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminDashboard/>} />
        <Route path='/add-book' element={<AddNewBook/>}/>
        <Route path='/all-books' element={<BookList/>}/>
      </Routes>
    </Router>
  )
}

export default AppRouter
