import './App.css'
import Header from './components/Header'
import Intro from './components/Intro'
import About from './components/About'
import WhatSaid from './components/WhatSaid'
import Footer from './components/Footer'

function App() {
  return (
    <main className='font-main'>
      <Header />
      <Intro />
      <About />
      <WhatSaid />
      <Footer />
    </main>
  )
}

export default App
