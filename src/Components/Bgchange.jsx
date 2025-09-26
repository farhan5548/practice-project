import React, { useState } from 'react'

function Bgchange() {
  const [color, setColor] = useState("white");
  function changeColor(newColor) {
    setColor(newColor);
  }
  return (
    <div className='h-[50vh] bg-white border-8 rounded-[4rem] border-black m-5 flex justify-center space-x-10'
      style={{ background: color }}>
      <button className='border-black border-2 rounded-full w-12 h-12 bg-red-500 mt-52 font-bold'
        onClick={() => changeColor("red")}
      >Red</button>

      <button className='border-black border-2 rounded-full w-12 h-12 bg-blue-500 mt-52 font-bold'
        onClick={() => changeColor("blue")}
      >Blue</button>

      <button className='border-black border-2 rounded-full w-12 h-12 bg-green-500 mt-52 font-bold'
        onClick={() => changeColor("green")}
      >Green</button>
    </div>
  )
}

export default Bgchange