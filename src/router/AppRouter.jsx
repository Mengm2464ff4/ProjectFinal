import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import About from '../pages/About'
import Categories from '../pages/Categories'
import Shop from '../pages/Shop'
import Home from "../components/Home";
import Product from "../components/Product";

const AppRouter = () => {
  return (
    <>
     <Routes> 
      <Route path="/"   element={
          <>
            <Home />
            <Product />
          </>
        }/>
      <Route path="/home" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/shop" element={<Shop />} />
     </Routes>
    </>
  )
}

export default AppRouter