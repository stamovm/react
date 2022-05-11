import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './components/Home'
import NewPost from './components/NewPost'
import EditPost from './components/EditPost'
import PostPage from './components/PostPage'
import About from './components/About'
import Missing from './components/Missing'
import { Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import { useStoreActions } from 'easy-peasy'
import useAxiosFetch from './hooks/useAxiosFetch'

//to run the test server: > npx json-server -p 3500 -w data/db.json
function App() {
  const setPosts = useStoreActions((actions) => actions.setPosts)
  const { data, fetchError, isLoading } = useAxiosFetch(
    'http://localhost:3500/posts'
  )

  useEffect(() => {
    setPosts(data)
  }, [data, setPosts])

  return (
    <div className="App">
      <Header title="React JS Blog" />
      <Nav />
      <Routes>
        <Route
          path="/"
          element={<Home isLoading={isLoading} fetchError={fetchError} />}
        />
        <Route path="/post" element={<NewPost />} />
        <Route path="/edit/:id" element={<EditPost />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
