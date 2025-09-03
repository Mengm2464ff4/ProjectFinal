import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Router } from 'react-router-dom'
import AppRouter from './router/AppRouter'

const  App =  () => {
  return  (
    <>
     <BrowserRouter>
         <Navbar />
      <AppRouter />
     </BrowserRouter>
     
    </>
  )
}

export default App;
