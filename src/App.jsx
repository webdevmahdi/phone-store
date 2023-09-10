import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Reviews from './components/Reviews/Reviews'
import Blogs from './components/Blogs/Blogs'
import About from './components/About/About'
import Dashboard from './components/Dashboard/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/reviews' element={<Reviews></Reviews>}></Route>
          <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/about' element={<About></About>}></Route>
        </Routes>
      </div>
  )
}

export default App
