import React from 'react'
import { useEffect } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom' 
import './App.scss'
import { History } from './components'

import Suno from './pages/Suno/Suno'

const App = () => {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Suno />}></Route>
          <Route path='https://sunoo.netlify.app/history' element={<History />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
