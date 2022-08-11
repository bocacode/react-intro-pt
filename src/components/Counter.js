import { useState } from 'react'

const CounterComp = () => {
  const [count, setCount] = useState(0)

  console.log(count)

  return (
    <>
      <h4>Count is {count}</h4>
      <button onClick={() => setCount(count + 1)}> Increment </button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset </button>
    </>
  )
}

export default CounterComp
