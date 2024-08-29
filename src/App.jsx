import React, { createContext, useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Register from './components/Register'
import Opening from './components/Opening'
import Login from './components/Login'
import Main from './components/Main'
import Product from './components/Productlist'
export const store=createContext();
const App = () => {
  const [token,setToken]=useState(null);
  return (
   
    <div>
      <store.Provider value={[token,setToken]}>
     <BrowserRouter>
     <Routes>
        <Route path="/" element={<Opening />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/profile" element={<Main/>} />
        <Route path="/products/:restaurantId" element={<Product />} />
     </Routes>
     </BrowserRouter>
     </store.Provider>

    </div>
  )
}

export default App
