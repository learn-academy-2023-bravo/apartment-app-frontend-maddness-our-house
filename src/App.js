import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import ApartmentEdit from './pages/ApartmentEdit'
import ApartmentIndex from './pages/ApartmentIndex'
import ApartmentNew from './pages/ApartmentNew'
import MyApartments from './pages/MyApartments'
import ApartmentShow from './pages/ApartmentShow'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Header from './components/Header'
import Footer from './components/Footer'
import { mockApartments } from './mockApartments'
import { mockUsers } from './mockUsers'
import './App.css'

const App = () => {
  const [apartments, setApartments] = useState(mockApartments)
  const [currentUser, setCurrentUser] = useState(mockUsers[0])

  const signup = (email, password) => {
    setCurrentUser({ email: email, password: password })
  }

  const signin = (email, password) => {
    const user = mockUsers.find(user => user.email === email)

    if (!user) {
      return console.error('no existing user with provided email')
    }
    
    if (user.encrypted_password !== password) {
      return console.error('incorrect password')
    }

    setCurrentUser(user)
  }

  return (
    <>
      <Header current_user={currentUser} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/apartmentindex' element={<ApartmentIndex apartments={apartments} />} />
        <Route path='/apartmentshow/:id' element={<ApartmentShow apartments={apartments} current_user={currentUser} />} />
        <Route path='/apartmentnew' element={<ApartmentNew />} />
        <Route path='/apartmentedit' element={<ApartmentEdit />} />
        <Route path='/myapartments' element={<MyApartments apartments={apartments} current_user={currentUser} />} />
        <Route path='/signin' element={<SignIn signin={signin} />} />
        <Route path='/signup' element={<SignUp signup={signup} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
