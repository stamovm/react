import { FaTrashAlt } from 'react-icons/fa'
import { useState } from 'react'

function Content({ items, setItems, handleCheck, handleDelete }) {
  const [name, setName] = useState('Marin')

  const handleName = () => {
    const names = ['Marin', 'Ava', 'Eli', 'Jack']
    const int = Math.floor(Math.random() * 4)
    setName(names[int])
    // setItems(listItems)
  }

  return (
    <main>
      <p onDoubleClick={handleName}>Hello {name}</p>
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input
              type="checkbox"
              onChange={() => handleCheck(item.id)}
              checked={item.checked}
            />
            <label>{item.item}</label>
            <FaTrashAlt
              onClick={() => handleDelete(item.id)}
              role="button"
              tabIndex="0"
            />
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Content
