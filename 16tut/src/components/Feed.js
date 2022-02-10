import Post from './Post'

const Feed = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      <details>
        <summary>Info</summary>
        Number of posts: {posts.length}
      </details>
    </>
  )
}

export default Feed
