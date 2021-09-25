import { useState } from 'react'

function Content() {
  const handleName = () => {
    const names = ['Maro', 'Ava', 'Eli', 'Jack']
    const int = Math.floor(Math.random() * 4)
    return names[int]
  }
  const handleClick = () => {
    console.log('You clicked')
  }
  const handleClick2 = (name) => {
    console.log(`${name} was clicked`)
  }
  const handleClick3 = (e) => {
    console.log(e.target.innerHTML)
  }
  return (
    <main>
      <p onDoubleClick={handleClick}>Hello {handleName()}</p>
      <button onClick={handleClick}>Click me</button>
      <button onClick={() => handleClick2('Maro')}>Click me Maro </button>
      <button onClick={(e) => handleClick3(e)}>Click me event </button>
    </main>
  )
}

export default Content
