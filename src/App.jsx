import React, { useEffect, useRef, useState } from 'react'
import "./App.css"

const App = () => {

  const[name1,setName1] = useState("")
  const[name2,setName2] = useState("")

  let prevName = useRef("")
  let inputRef = useRef()

  useEffect(() => {
    prevName.current=name2
  },[name2])

  let typing = (e) => {
    setName1(e.target.value)
  }

  let clicking = () => {
    setName2(name1)
    setName1("")
    inputRef.current.focus()

  }

  useEffect(() => {
   inputRef.current.focus()
  },[])

 

  return (
    <div>
      <input type="text" placeholder='Enter your name...' onChange={typing} ref={inputRef} value={name1}/>
      <button onClick={clicking}>Click</button>

      <h3>Current Name : {name2}</h3>
      <p>previous Name : {prevName.current}</p>
    </div>
  )
}

export default App