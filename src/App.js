import React from 'react';
import { Routes, Route } from "react-router-dom"
import ApartmentEdit from "./pages/ApartmentEdit"
import ApartmentIndex from "./pages/ApartmentIndex"
import ApartmentNew from "./pages/ApartmentNew"
import ApartmentProtectedIndex from "./pages/ApartmentProtectedIndex"
import ApartmentShow from "./pages/ApartmentShow"
import Home  from "./pages/Home"
import NotFound  from "./pages/NotFound"
import SignIn  from "./pages/SignIn"
import SignUp  from "./pages/SignUp"
import Header  from "./components/Header"
import Footer  from "./components/Footer"




import './App.css';

const App = () => {
  return(
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apartmentindex" element={<ApartmentIndex />} />
        <Route path="/apartmentshow" element={<ApartmentShow />} />
        <Route path="/apartmentnew" element={<ApartmentNew />} />
        <Route path="/apartmentedit" element={<ApartmentEdit />} />
        <Route path="/apartmentprotectedindex" element={<ApartmentProtectedIndex />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
