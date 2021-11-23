import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './components/Home'
import NewPost from './components/NewPost'
import PostPage from './components/PostPage'
import About from './components/About'
import Missing from './components/Missing'
import { Route, Routes, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'

function App() {
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'first post',
      datetime: 'July 01, 2021 11:17:36 AM',
      body: 'This text is just here for testing purposes.',
    },
    {
      id: 2,
      title: 'second post',
      datetime: 'July 02, 2021 11:17:36 AM',
      body: 'This text is just here for testing purposes on the second post.',
    },
    {
      id: 3,
      title: 'another post',
      datetime: 'July 03, 2021 11:17:36 AM',
      body: 'This text is just here for testing purposes again.',
    },
  ])

  return (
    <div className="App">
      <Header title="React JS Blog" />
      <Nav search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home posts={posts} />} />
        <Route path="/post" element={<NewPost />} />
        <Route path="/post:id" element={<PostPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
