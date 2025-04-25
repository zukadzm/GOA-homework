import { useState } from 'react'

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const calc = (operator) => {
      const number1 = Number(num1);
      const number2 = Number(num2);

      if(operator === "+") setResult(number1 + number2)
      if(operator === "-") setResult(number1 - number2)
      if(operator === "*") setResult(number1 * number2)
      if(operator === "/") setResult(number1 / number2)
  }

  return (
    <>
      <div className=' flex justify-center'>
        <h1 className=' font-black caret-blue-800'>Calculator</h1>
        <input type="number" value={num1} placeholder='Enter first number' onChange={(e) => setNum1(e.target.value)}/>
        <input type="number" value={num2} placeholder='Enter second number' onChange={(e) => setNum2(e.target.value)}/>

        <div className='flex gap-4'>
            <button onClick={() => calc("+")}>+</button>
            <button onClick={() => calc("-")}>-</button>
            <button onClick={() => calc("*")}>*</button>
            <button onClick={() => calc("/")}>/</button>

            <p className='font-bold'>Result: {result}</p>
        </div>  

      </div>
    </>
  )
}

export default App
