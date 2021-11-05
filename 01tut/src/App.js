import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import { useState } from 'react'

function App() {
  const [items, setItems] = useState([
    { id: 1, checked: false, item: 'item n1' },
    { id: 2, checked: true, item: 'item n2' },
    { id: 3, checked: false, item: 'item n3' },
  ])
  const [name, setName] = useState('Marin 1')

  const handleName = () => {
    const names = ['Marin', 'Ava', 'Eli', 'Jack']
    const int = Math.floor(Math.random() * 4)
    setName(names[int])
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    )
    setItems(listItems)
    localStorage.setItem('shoppinglist', JSON.stringify(listItems))
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id)
    setItems(listItems)
    localStorage.setItem('shoppinglist', JSON.stringify(listItems))
  }

  return (
    <div className="App">
      <Header className="header" title="My list" />
      <Content
        className="main"
        items={items}
        setItems={setItems}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        handleName={handleName}
        name={name}
      />
      <Footer className="footer" length={items.length} />
    </div>
  )
}

export default App