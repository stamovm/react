import { Link } from 'react-router-dom'

const Missing = () => {
  return (
    <main>
      <h2>Page not found</h2>
      <p>
        <Link to="/">Visit the homepage</Link>
      </p>
    </main>
  )
}

export default Missing
