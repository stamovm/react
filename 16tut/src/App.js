import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './components/Home'
import NewPost from './components/NewPost'
import EditPost from './components/EditPost'
import PostPage from './components/PostPage'
import About from './components/About'
import Missing from './components/Missing'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import api from './api/posts'
import useWindowSize from './hooks/useWindowSize'
import useAxiosFetch from './hooks/useAxiosFetch'
import { DataProvider } from './context/DataContext'
import DataContext from './context/DataContext'

function App() {
  const [search, setSearch] = useState('')
  const [posts, setPosts] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  const [editTitle, setEditTitle] = useState('')
  const [editBody, setEditBody] = useState('')
  const navigate = useNavigate()
  const { width } = useWindowSize()

  const { data, fetchError, isLoading } = useAxiosFetch(
    'http://localhost:3500/posts'
  )
  //todo 7:24 npx json-server -p 3500 -w data/db.json
  useEffect(() => {
    setPosts(data)
  }, [data])

  useEffect(() => {
    const filteredResults = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLocaleLowerCase().includes(search.toLowerCase())
    )
    setSearchResults(filteredResults.reverse())
  }, [posts, search])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1
    const datetime = format(new Date(), 'MMMM dd', 'yyyy pp')
    const newPost = { id, title: postTitle, datetime, body: postBody }
    try {
      const response = await api.post('/posts', newPost)
      const allPosts = [...posts, response.data]
      setPosts(allPosts)
      setPostTitle('')
      setPostBody('')
      navigate('/')
    } catch (err) {
      console.log(`Error: ${err.message}`)
    }
  }

  const handleEdit = async (id) => {
    const datetime = format(new Date(), 'MMMM dd', 'yyyy pp')
    const updatedPost = { id, title: editTitle, datetime, body: editBody }
    try {
      const response = await api.put(`/posts/${id}`, updatedPost)
      setPosts(
        posts.map((post) => (post.id === id ? { ...response.data } : post))
      )
      setEditTitle('')
      setEditBody('')
      navigate('/')
    } catch (err) {
      console.log(`Error: ${err.message}`)
    }
  }

  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`)
      const postList = posts.filter((post) => post.id !== id)
      setPosts(postList)
      navigate('/')
    } catch (err) {
      console.log(`Error: ${err.message}`)
    }
  }

  return (
    <div className="App">
      <DataProvider>
        <Header title="React JS Blog" width={width} />
        <Nav search={search} setSearch={setSearch} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                posts={searchResults}
                fetchError={fetchError}
                isLoading={isLoading}
              />
            }
          />
          <Route
            path="/post"
            element={
              <NewPost
                handleSubmit={handleSubmit}
                postTitle={postTitle}
                setPostTitle={setPostTitle}
                postBody={postBody}
                setPostBody={setPostBody}
              />
            }
          />
          <Route
            path="/edit/:id"
            element={
              <EditPost
                posts={posts}
                handleEdit={handleEdit}
                editTitle={editTitle}
                setEditTitle={setEditTitle}
                editBody={editBody}
                setEditBody={setEditBody}
              />
            }
          />
          <Route path="/post">
            <Route
              path=":id"
              element={<PostPage posts={posts} handleDelete={handleDelete} />}
            />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<Missing />} />
        </Routes>
        <Footer />
      </DataProvider>
    </div>
  )
}

export default App
