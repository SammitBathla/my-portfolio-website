import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Navbar/Hero/Hero'
import Skills from './components/Navbar/Skills/Skills';
import './App.css';
import WorkExperience from './components/Navbar/WorkExperience/WorkExperience';

const App = () => {
  return (
    <>
        <Navbar />
        
        <div className="containor">
          <Hero />
          <Skills />
          <WorkExperience />
        </div>
    </>
  )
}

export default App;