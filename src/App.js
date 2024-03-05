import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Menu from './Pages/Menu'
import About from './component/About'
import Home from './component/Home'
import Pnf from './component/Pnf'
import Tracks from './component/Tracks'
import './App.css'

function App() {
  return(
    <BrowserRouter>
      <Menu/>

      <Routes>
            {/* router provider */}
            <Route path={`/`} element={<Home/>}/>
            <Route path={`/about`} element={<About/>}/>
            <Route path={`/tracks/:aId`} element={<Tracks/>}/>
            
            <Route path={`/*`} element={<Pnf/>}/>

            
      </Routes>
    </BrowserRouter>
  )
}

export default App