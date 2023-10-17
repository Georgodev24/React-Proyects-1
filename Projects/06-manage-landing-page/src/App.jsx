import './App.css'
import Header from './components/header/Header'
import Intro from './components/body/Intro'
import About from './components/body/About'
import WhatSaid from './components/body/WhatSaid'
import Footer from './components/footer/Footer'

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
