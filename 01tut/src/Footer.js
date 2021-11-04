const Footer = ({ length }) => {
  const today = new Date()
  return (
    <footer>
      <p>
        {length} List Items Copyright &copy; {today.getFullYear()}
      </p>
    </footer>
  )
}

export default Footer
