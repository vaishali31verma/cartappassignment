import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/home'
import Main from '../components/main'
import Products from "../components/products"
import Wholedis from '../components/wholedis'
import Cart from "../components/cart"
import Products2  from '../components/products2'
import Wholedisoftbale from '../components/wholedisoftable'
const Routerss = () => {
  return (
    <div>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/main" element={<Main/>}/>
        <Route  path ="/products" element={<Products/>}/>
        <Route  path ="/products2" element={<Products2/>}/>
        <Route path="/description" element={<Wholedis />}/>
        <Route path="/description2" element={<Wholedisoftbale />}/>
        <Route path="/descriptionoftable" element={<Wholedisoftbale />}/>
        
        <Route path="/Cart" element={<Cart />}/>
      </Routes>
    </div>
  )
}

export default Routerss
