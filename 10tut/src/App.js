import { useState } from 'react'
import DisplayBox from './components/DisplayBox'
import TypeBox from './components/TypeBox'
import './App.css'

function App() {
  const [typedColor, setTypedColor] = useState('')
  const [hexValue, setHexValue] = useState('')
  const [isDarkText, setIsDarkText] = useState(true)

  return (
    <div className="App">
      <DisplayBox
        typedColor={typedColor}
        hexValue={hexValue}
        isDarkText={isDarkText}
      />
      <TypeBox
        typedColor={typedColor}
        setTypedColor={setTypedColor}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  )
}

export default App
