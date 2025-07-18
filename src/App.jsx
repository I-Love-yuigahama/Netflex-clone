import React, { useEffect } from 'react'
import Home from './pages/Home/Home'
import { Routes,Route,useNavigate } from 'react-router-dom'
import Login from './pages/Login/Login'
import Player from './pages/Player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { use } from 'react'
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  
  const nav = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async(user)=>{
      user ? (console.log("User is logged in"),  nav("/") ): (console.log("No user is logged in"), nav("/login") );
    })
  }, []);
  
  return (
    <div>
      <ToastContainer theme='dark' />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/player/:id' element={<Player/>}></Route>
      </Routes>
    </div>
  )
}

export default App