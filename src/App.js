import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import HomePage from './Routes/HomePage';
import AboutPage from './Routes/AboutPage';
import CoursesPage from './Routes/CoursesPage';
import ContactUS from './Routes/ContactUS';
import SignUpPage from './Routes/SignUpPage';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/courses' element={<CoursesPage/>} />
        <Route path='/contact' element={<ContactUS/>} />
        <Route path='/signup' element={<SignUpPage/>} />


      </Routes>
    </div>
  )
}

export default App