import { useState } from 'react'

function Content() {
  const [name, setName] = useState('Marin')
  const [count, setCount] = useState(0)

  const handleName = () => {
    const names = ['Maro', 'Ava', 'Eli', 'Jack']
    const int = Math.floor(Math.random() * 4)
    setName(names[int])
  }
  const handleClick = () => {
    setCount(count + 1)
    console.log(count)
  }
  const handleClick2 = (name) => {
    console.log(`${name} was clicked`)
  }
  const handleClick3 = (e) => {
    console.log(e.target.innerHTML)
  }
  return (
    <main>
      <p onDoubleClick={handleName}>Hello {name}</p>
      <button onClick={handleName}>Change name</button>
      <button onClick={() => handleClick('Maro')}>Click me Maro </button>
      <button onClick={(e) => handleClick3(e)}>Click me event </button>
    </main>
  )
}

export default Content
