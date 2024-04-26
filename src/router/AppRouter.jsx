import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../pages/Main'
import Login from '../pages/Login'
import Register from '../pages/Register'
import MovieDetails from '../pages/MovieDetails'
import Navbar from '../components/Navbar'

const AppRouter = () => {
  return (
    <>
    <Navbar/>
   <Routes>
    <Route path="/" element={<Main/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/movie/:id' element={<MovieDetails/>}/>  
   </Routes>
   
    </>

  )
  
  
}

export default AppRouter