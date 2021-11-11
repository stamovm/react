import { useState, useEffect } from 'react'
import Header from './Header'
import AddItem from './AddItem'
import SearchItem from './SearchItem'
import Content from './Content'
import Footer from './Footer'
import apiRequest from './apiRequest'

function App() {
  const API_URL = 'http://localhost:3500/items'

  const [items, setItems] = useState([])
  //JSON.parse(localStorage.getItem('shoppinglist')) || []
  const [newItem, setNewItem] = useState([''])
  const [search, setSearch] = useState('')
  const [fetchError, setFetchError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL)
        console.log('response: ', response)
        if (!response.ok) throw Error('Did not receive data')
        const listItems = await response.json()

        setItems(listItems)
        setFetchError(null)
      } catch (err) {
        setFetchError(err.message)
      } finally {
        setIsLoading(false)
      }
    }
    setTimeout(() => {
      ;(async () => await fetchItems())()
    }, 2000)
  }, [])
  //localStorage.setItem('shoppinglist', JSON.stringify(items))

  const setAndsaveItems = (newItems) => {
    setItems(newItems)
    localStorage.setItem('shoppinglist', JSON.stringify(newItems))
  }

  const addItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const myNewItem = { id, checked: false, item }
    const listItems = [...items, myNewItem]
    setAndsaveItems(listItems)

    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(myNewItem),
    }
    const result = await apiRequest(API_URL, postOptions)
    if (result) setFetchError(result)
  }

  const handleCheck = async (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    )
    setAndsaveItems(listItems)

    const myItem = listItems.filter((item) => item.id === id)
    const updateOptons = {
      method: 'patch',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ checked: myItem[0].checked }),
    }
    const reqUrl = `${API_URL}/${id}`
    const result = await apiRequest(reqUrl, updateOptons)
    if (result) setFetchError(result)
  }

  const handleDelete = async (id) => {
    const listItems = items.filter((item) => item.id !== id)
    setAndsaveItems(listItems)

    const deleteOptions = { method: 'DELETE' }
    const reqUrl = `${API_URL}/${id}`
    const result = await apiRequest(reqUrl, deleteOptions)
    if (result) setFetchError(result)
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
      <SearchItem search={search} setSearch={setSearch} />
      <main>
        {fetchError && <p style={{ color: 'red' }}>{`Error: ${fetchError}`}</p>}
        <Content
          className="main"
          items={items.filter((item) =>
            item.item.toLowerCase().includes(search.toLowerCase())
          )}
          setItems={setItems}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      </main>
      <Footer className="footer" length={items.length} />
    </div>
  )
}

export default App
