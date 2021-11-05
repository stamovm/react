const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  )
}
Header.defaultProps = {
  title: 'default title1',
}

export default Header
