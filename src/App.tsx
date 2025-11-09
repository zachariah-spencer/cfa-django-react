import { useState } from 'react'
import { Button } from './components/ui/button'
import Header from './Header'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />

      <p className="read-the-docs">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem suscipit quo eum corporis pariatur dolores nostrum doloremque 
       aperiam, cum esse asperiores eveniet odit laudantium illo voluptas odio molestiae excepturi? Esse! Lorem, ipsum dolor sit 
       amet consectetur adipisicing elit. Excepturi ullam inventore fuga. Recusandae suscipit aliquid numquam non tempora dolorem 
       quasi! Ab tenetur repellat tempora voluptatem libero vitae expedita fuga quis? Lorem ipsum dolor sit, amet consectetur 
       adipisicing elit. Suscipit magnam, quisquam blanditiis cumque ea incidunt praesentium! Quod, asperiores. Amet eos ducimus a 
       nulla veritatis iure ab ut quo saepe voluptatem?
      </p>
    </>
  )
}

export default App
