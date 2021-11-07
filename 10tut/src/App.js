import { useState } from 'react'
import DisplayBox from './components/DisplayBox'
import TypeBox from './components/TypeBox'
import './App.css'

function App() {
  const [typedColor, setTypedColor] = useState()
  return (
    <div className="App">
      <DisplayBox typedColor={typedColor} setTypedColor={setTypedColor} />
      <TypeBox typedColor={typedColor} setTypedColor={setTypedColor} />
    </div>
  )
}

export default App
