import Feed from './Feed'

const Home = ({ posts }) => {
  return (
    <main className="Home">
      {posts.length ? (
        <Feed posts={posts} />
      ) : (
        <p style={{ marginTop: '2rem' }}></p>
      )}

      <details>Some details here.</details>
      <meter value="25" min="1" max="100" />
    </main>
  )
}

export default Home
