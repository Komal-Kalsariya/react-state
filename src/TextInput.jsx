import React, { useState } from 'react'

const TextInput = () => {

    let [text,settext]=useState("")
  

    const handetext=(e)=>{
        settext(e.target.value)
    }

  return (
    <div>
        <h4>Text Input</h4>
        <input type="text" value={text} onChange={handetext} placeholder='type something...'/>
       <p>{text}</p>
    </div>
   

  )
}

export default TextInput