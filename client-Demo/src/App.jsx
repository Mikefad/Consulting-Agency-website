import { useState } from 'react'
import './App.css'
import Homedemopage from './Homedemo.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Homedemopage/>
    </>
  )
}

export default App
