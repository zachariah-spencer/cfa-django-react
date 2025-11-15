import { useState } from 'react'
import { Button } from './components/ui/button'
import './App.css'
import Header from './Header'
import HeroSection from './HeroSection'
import CardsSection from './CardsSection'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <HeroSection />
      <CardsSection />
      <Form />
    </>
  )
}

export default App
