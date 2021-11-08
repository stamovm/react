const DisplayBox = ({ typedColor, hexValue, isDarkText }) => {
  const divStyle = {
    backgroundColor: typedColor,
    color: isDarkText ? '#000' : '#fff',
  }

  return (
    <div style={divStyle} className="displayBox">
      <p>{typedColor ? typedColor : 'Empty Value'}</p>
      <p> {hexValue ? hexValue : null}</p>
    </div>
  )
}

export default DisplayBox
