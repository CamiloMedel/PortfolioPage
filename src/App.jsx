import { useState } from 'react'
import { Routes, Route } from "react-router"
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Porfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Home/>}/>
          <Route path="portfolio" element={<Porfolio/>}/>
          <Route path="contact" element={<Contact/>}/>
        </Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
