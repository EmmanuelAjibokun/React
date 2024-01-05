
import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive");

  function changeColor(color) {
    setColor(color)
  }

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg  bg-white px-3 py-2 rounded-3xl'>
          <button
          onClick={() => changeColor("black")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-black'
          >Black</button>
          <button
          onClick={() => setColor("blue")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-blue-700'
          >Blue</button>
          <button
          onClick={() => changeColor("red")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-700'
          >Red</button>
        </div>
      </div>
    </div>
  )
}

export default App
