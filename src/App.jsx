import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Feed from './pages/Feed'
import Undefined from './pages/Undefined'
import VideoDetail from './pages/VideoDetail'
import Results from './pages/Results'









const App = () => {
  return (
    <BrowserRouter>
    
    <Header/>

    <Routes>

      <Route  path='/' element={<Feed/>}/>
      <Route path='/watch' element={<VideoDetail/>} />
      <Route  path='*' element={<Undefined/> }/>
      <Route path='/results' element={<Results/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
