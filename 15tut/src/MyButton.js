const MyButton = ({ txt, style, setActiveSection }) => {
  return (
    <button
      type="button"
      className="btn"
      style={style}
      onClick={() => setActiveSection(txt)}
    >
      {txt}
    </button>
  )
}

export default MyButton
