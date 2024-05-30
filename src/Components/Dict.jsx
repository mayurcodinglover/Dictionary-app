import React from 'react'
import { useState } from 'react'

const Dict = () => {
    const [word, setword] = useState("");
    const [meaning, setmeaning] = useState("")

    const handleClick=async ()=>{
        await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then((res)=>res.json()).then((data)=>setmeaning(data[0].meanings[0].definitions[0].definition))
    }
    const handleChange=(e)=>{
        setword(e.target.value);
    }
  return (
    <div className="flex justify-center items-center bg-black">
      <div className="dict h-[20rem] w-[20rem] m-2 p-2 mt-10 border-2 border-solid border-white flex justify-start flex-col items-center rounded-md">
      <h1 className='text-white'>Dictionary App</h1>
        <input type="text" name="" id="" className="mt-10 rounded-sm" onChange={handleChange} value={word}/>
        <button type="submit" className="m-2 p-2 border-2 border-solid w-[5rem] rounded-lg text-white border-white mt-5" onClick={handleClick}>Submit</button>
        <h1 className="text-white mt-5">{meaning}</h1>
      </div>
    </div>
  )
}

export default Dict
