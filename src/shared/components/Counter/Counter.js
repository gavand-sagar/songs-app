import React, { useState } from 'react'

export default function Counter() {
  const [value,setValue] = useState(0);

  function increment(){
    setValue(value + 1)
  }

  function decrement(){
    setValue(value - 1)
  }

  return (
    <div>
        <span data-testid='spn01'>{value}</span>
        <button data-testid='btn01' onClick={increment}>+</button>
        <button data-testid='btn02' onClick={decrement}>-</button>
    </div>
  )
}
