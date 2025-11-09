import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
        Landing Page Title
      </h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>
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
