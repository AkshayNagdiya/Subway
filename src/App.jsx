import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homeherosection from './Components/Homeherosection'
import Menuherosection from './Components/Menuherosection'
import About from './Components/About'
import Storeherosection from './Components/Storeherosection'
import Cart from './Components/Cart'
import Footer from './Components/Footer'
import Checkout from './Components/Checkout'
import { useDispatch } from 'react-redux'
import { fetchMenu } from './features/Menu/MenuSlice'
import { ToastContainer } from 'react-toastify'


const App = () => {


  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchMenu())
  },[])


  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homeherosection/>}/>
        <Route path='/Home' element={<Homeherosection/>}/>
        <Route path='/Menu' element={<Menuherosection/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Store' element={<Storeherosection/>}/>
        <Route path='/Contact' element={<Storeherosection/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Checkout' element={<Checkout/>}/>
      </Routes>
      <ToastContainer/>
    </BrowserRouter>
  )
}

export default App
