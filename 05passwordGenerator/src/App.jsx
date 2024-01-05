/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef();

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numAllowed) str += "0123456789"
    if(charAllowed) str += "!@~#$%^&*()"

    for (let i=1; i < length; i++) {
      const randomNum = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(randomNum)
    }

    setPassword(pass)
  }, [length, numAllowed, charAllowed]);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current.select()
  }

  useEffect(() => {
    generatePassword()
  }, [length, numAllowed, charAllowed])

  return (
    <div className= 'w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />
        <button
          onClick={copyPasswordToClipboard}
          className='outline-non bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
      </div>
      <div
      className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1 text-white'>
          <input
          type="range"
          min={6}
          max={20}
          value={length}
          className='cursor-pointer'
          onChange={e=> setLength(e.target.value)}
          name=''
          id='' />
          <label htmlFor="length">lenght: {length}</label>
        </div>

        <div className='flex items-center gap-x-1 text-white'>
          <input
          type="checkbox"
          defaultChecked={numAllowed}
          onChange={() => {
            setNumAllowed((prev)=>!prev)
          }} />
          <label htmlFor="number">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1 text-white'>
          <input 
          type="checkbox"
          defaultChecked={charAllowed}
          onChange={() => {
            setCharAllowed((prev)=>!prev)
          }} />
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
