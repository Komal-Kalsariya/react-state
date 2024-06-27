import React, { useState } from 'react'
let nextId=0
const DynamicList = () => {

    let [item,setItem]=useState("")
    let [items,setItems]=useState([])
    const handelitem=(e)=>{
        setItem(e.target.value)
    }
    const hndleitems=()=>{
        setItems([...items,{id:nextId++,item:item}])
    }
    
  return (
    <div>
        <h4>DynamicListArray</h4>
     <input value={item} onChange={handelitem}>
     </input>
     <button onClick={hndleitems}>
        Add
     </button>
     <ul>
        {
            items.map((ele=>
                <li>{ele.item}</li>
                

            ))
        }
     </ul>

    </div>
  )
}

export default DynamicList