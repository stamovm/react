import React from 'react'
import Greet from './components/Greet.js'
import Welcome from './components/Welcome.js'
import Hello from './components/Hello.js'
import TodoList from './components/TodoList.js'
function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome />
      <Hello />
      <TodoList />
    </div>
  )
}

export default App
