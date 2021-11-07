const TypeBox = ({ typedColor, setTypedColor }) => {
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
          onChange={(e) => setTypedColor(e.target.value)}
        />
      </form>
    </div>
  )
}

export default TypeBox
