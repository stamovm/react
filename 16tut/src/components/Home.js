import Feed from './Feed'

const Home = ({ posts, fetchError, isLoading }) => {
  return (
    <main className="Home">
      {/* {isLoading &&} */}
      {posts.length ? (
        <Feed posts={posts} />
      ) : (
        <p style={{ marginTop: '2rem' }}></p>
      )}

      <details>Number of posts: {posts.length}</details>
    </main>
  )
}

export default Home
