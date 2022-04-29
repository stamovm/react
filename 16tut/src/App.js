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
import { DataProvider } from './context/DataContext'

function App() {
  //todo 7:54 npx json-server -p 3500 -w data/db.json

  return (
    <div className="App">
      <Header title="React JS Blog" />
      <DataProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<NewPost />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<Missing />} />
        </Routes>
      </DataProvider>
      <Footer />
    </div>
  )
}

export default App
