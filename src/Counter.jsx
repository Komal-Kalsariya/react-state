import React from 'react'
import { useState } from 'react'

const Counter = () => {
let [count,setCount]=useState(0)

const increMent=()=>{
    setCount(count+1)
}
const degreMent=()=>{
    setCount(count-1)
}

  return (
    <div>
        <h4>Count:{count}</h4>
        <button onClick={increMent}>Inc</button>
        <button onClick={degreMent}>Dec</button>
        
    </div>

  )
}

export default Counter