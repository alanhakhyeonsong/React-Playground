import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Mypage from "./pages/Mypage";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>

        <Route element={<ProtectedRoute />}>
          <Route path='/mypage' element={<Mypage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
