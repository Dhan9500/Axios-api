import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Show from './Components/Show'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Show/>
  )
}

export default App
