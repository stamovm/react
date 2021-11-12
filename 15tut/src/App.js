import { useState, useEffect } from 'react'
const sections = ['users', 'posts', 'comments']
const API_URL = 'https://jsonplaceholder.typicode.com/'
function App() {
  const [activeSection, setActiveSection] = useState(sections[0])
  const [items, setItems] = useState([])
  const activeStyle = {
    backgroundColor: 'black',
    color: 'white',
  }

  useEffect(() => {
    console.log('Loading: 1')
    getItems(activeSection)
  }, [])

  function getItems(section) {
    fetch(API_URL + section)
      .then((response) => response.json())
      .then((json) => {
        setItems(json)
      })
  }
  function btnClick(txt) {
    getItems(txt)
    setActiveSection(txt)
  }

  return (
    <div className="App">
      <section className="buttons">
        <button
          type="button"
          className="btn"
          onClick={() => btnClick(sections[0])}
          style={activeSection === sections[0] ? activeStyle : {}}
        >
          {sections[0]}
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => btnClick(sections[1])}
          style={activeSection === sections[1] ? activeStyle : {}}
        >
          {sections[1]}
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => btnClick(sections[2])}
          style={activeSection === sections[2] ? activeStyle : {}}
        >
          {sections[2]}
        </button>
      </section>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="li-item">
            {JSON.stringify(item)}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
