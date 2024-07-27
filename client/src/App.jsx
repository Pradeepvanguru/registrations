import { useState } from 'react'
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Signup from './signup'
import Login from "./Login"
import {BrowserRouter,Routes,Route} from "react-router-dom"




function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup />} ></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
