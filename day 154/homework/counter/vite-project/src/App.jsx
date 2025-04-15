import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>Count: ${count}</div>
      <button onClick={setCount(count + 1)}>Click</button>
    </>
  )
}

export default App
