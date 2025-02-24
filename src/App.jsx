import { useState } from 'react'
import Navbar from './componentes/Navbar';
import './App.css'
import "tailwindcss";
import Intro from "./componentes/Intro"
import TechStack from './componentes/TechStack';
import Projects from './componentes/Projects';

function App() {
  return (
    <>
    <section className='min-h-screen bg-[#181818] '>
      <div className='bg-[#181818]'>
        <Navbar />
      </div>
      <div>
        <Intro />
        <TechStack />
        <Projects />

        
      </div>
      </section>
    </>
  )
}

export default App
