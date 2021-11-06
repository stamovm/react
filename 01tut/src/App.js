import { useState } from 'react'
import Header from './Header'
import AddItem from './AddItem'
import Content from './Content'
import Footer from './Footer'

function App() {
  const [items, setItems] = useState([
    { id: 1, checked: false, item: 'item n1' },
    { id: 2, checked: true, item: 'item n2' },
    { id: 3, checked: false, item: 'item n3' },
  ])
  const [newItem, setNewItem] = useState([''])

  const setAndsaveItems = (newItems) => {
    setItems(newItems)
    localStorage.setItem('shoppinglist', JSON.stringify(newItems))
  }

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const myNewItem = { id, checked: false, item }
    const listItems = [...items, myNewItem]
    setAndsaveItems(listItems)
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    )
    setAndsaveItems(listItems)
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id)
    setAndsaveItems(listItems)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newItem) return
    addItem(newItem)
    setNewItem('')
  }

  return (
    <div className="App">
      <Header className="header" title="My list" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Content
        className="main"
        items={items}
        setItems={setItems}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer className="footer" length={items.length} />
    </div>
  )
}

export default App
