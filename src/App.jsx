import { useState } from 'react'
import { Routes, Route } from "react-router"
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Porfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Resume from './components/Resume/Resume'
import './App.css'
import ProjectPage from './components/Portfolio/ProjectPage/ProjectPage'
import ContactConfirmation from './components/Contact/ContactConfirmation'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Home/>}/>
          <Route path="portfolio" element={<Porfolio/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="confirmation" element={<ContactConfirmation/>}/>
          <Route path="resume" element={<Resume/>}/>
          <Route path="projects/:projectId" element={<ProjectPage/>}/>
        </Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
