import React from 'react';
import'./App.css'
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import Student from './components/Student/Student'


function App() {
  return (
    <div className='text'>
      <NavBar/>
      <Hero/>
      <Student />
    </div>
  )
}

export default App
