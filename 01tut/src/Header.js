const Header = ({ title }) => {
  const headerStyle = {
    // backgroundColor: 'royalblue',
    color: 'white',
  }
  return (
    <header>
      <h1 style={headerStyle}>{title}</h1>
    </header>
  )
}
Header.defaultProps = {
  title: 'default title1',
}

export default Header
