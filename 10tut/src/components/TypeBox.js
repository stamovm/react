import colorNames from 'colornames'

const TypeBox = ({ setTypedColor, setHexValue, isDarkText, setIsDarkText }) => {
  return (
    <div>
      <form
        action="submit"
        className="typeBox"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="Add color name"
          autoFocus
          required
          onChange={(e) => {
            setTypedColor(e.target.value)
            setHexValue(colorNames(e.target.value))
          }}
        />
        <button type="button" onClick={() => setIsDarkText(!isDarkText)}>
          Toggle Text Color
        </button>
      </form>
    </div>
  )
}

export default TypeBox
