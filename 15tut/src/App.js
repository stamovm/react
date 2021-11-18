import { useState, useEffect } from 'react'
import MyButton from './MyButton'
import ListItem from './ListItem'

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
    getItems(activeSection)
  }, [activeSection])

  function getItems(section) {
    fetch(API_URL + section)
      .then((response) => response.json())
      .then((json) => {
        setItems(json)
      })
  }

  return (
    <div className="App">
      <section className="buttons">
        {sections.map((section, index) => (
          <MyButton
            key={index}
            setActiveSection={setActiveSection}
            style={activeSection === sections[index] ? activeStyle : {}}
            txt={sections[index]}
          />
        ))}
      </section>
      <section className="tables">
        <table>
          {items.map((item) => (
            <ListItem key={item.id} item={item} />
          ))}
        </table>
      </section>
    </div>
  )
}

export default App
