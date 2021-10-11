import { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'

function Content() {
  const [name, setName] = useState('Marin')
  const [items, setItems] = useState([
    { id: 1, checked: false, item: 'item n1' },
    { id: 2, checked: true, item: 'item n2' },
    { id: 3, checked: false, item: 'item n3' },
  ])
  const handleName = () => {
    const names = ['Maro', 'Ava', 'Eli', 'Jack']
    const int = Math.floor(Math.random() * 4)
    setName(names[int])
  }
  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    )
    setItems(listItems)
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
            <FaTrashAlt role="button" tabIndex="0" />
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Content
