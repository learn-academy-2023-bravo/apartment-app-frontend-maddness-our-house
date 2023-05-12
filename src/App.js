import React, { useState, useEffect } from 'react'
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
// import { mockApartments } from './mockApartments'
import { mockUsers } from './mockUsers'
import './App.css'
import { Container } from 'reactstrap'

const BASE_URL = 'http://localhost:3000'

const App = () => {
  const [apartments, setApartments] = useState([])

  useEffect(() => {
    readApartments()
  }, [])

  const readApartments = () => {
    fetch(`${BASE_URL}/apartments`)
      .then((response) => response.json())
      .then((payload) => {
        setApartments(payload)
      })
      .catch((error) => console.log('Apartment read error', error))
  }

  const [currentUser, setCurrentUser] = useState(mockUsers[0])

  const signup = (email, password) => {
    setCurrentUser({ email: email, password: password })
  }

  const signin = (email, password) => {
    const user = mockUsers.find((user) => user.email === email)

    if (!user) {
      return console.error('no existing user with provided email')
    }

    if (user.encrypted_password !== password) {
      return console.error('incorrect password')
    }

    setCurrentUser(user)
  }

  const createApartment = (apartment) => {
    fetch(`${BASE_URL}/apartments`, {
      body: JSON.stringify(apartment),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
      .then((response) => response.json())
      .then(() => readApartments())
      .catch((errors) => console.log('Apartment create errors:', errors))
  }

  return (
    <>
      <Header current_user={currentUser} />
      <Container className='my-5'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/apartmentindex'
            element={<ApartmentIndex apartments={apartments} />}
          />
          <Route
            path='/apartmentshow/:id'
            element={
              <ApartmentShow
                apartments={apartments}
                current_user={currentUser}
              />
            }
          />
          <Route
            path='/apartmentnew'
            element={
              <ApartmentNew
                createApartment={createApartment}
                current_user={currentUser}
              />
            }
          />
          <Route path='/apartmentedit' element={<ApartmentEdit />} />
          <Route
            path='/myapartments'
            element={
              <MyApartments
                apartments={apartments}
                current_user={currentUser}
              />
            }
          />
          <Route path='/signin' element={<SignIn signin={signin} />} />
          <Route path='/signup' element={<SignUp signup={signup} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Container>
      <Footer />
    </>
  )
}

export default App
