import { useParams, Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useStoreState, useStoreActions } from 'easy-peasy'

const PostPage = () => {
  const deletePost = useStoreActions((actions) => actions.deletePost)
  const getPostById = useStoreState((state) => state.getPostById)
  const { id } = useParams()
  const post = getPostById(id)
  const navigate = useNavigate()

  const handleDelete = (id) => {
    deletePost(id)
    navigate('/')
  }

  return (
    <main className="PostPage">
      <article className="post">
        {post && (
          <>
            <h2>{post.title}</h2>
            <p className="postDate">{post.datetime}</p>
            <p className="postBody">{post.body}</p>
            <Link to={`/edit/${post.id}`}>
              <button className="editButton">Edit Post</button>
            </Link>
            <button
              className="deleteButton"
              onClick={() => handleDelete(post.id)}
            >
              Delete Post
            </button>
          </>
        )}
        {!post && (
          <>
            <h2>Post not found</h2>
            <p>You can:</p>
            <Link to="/">Visit the homepage</Link>
          </>
        )}
      </article>
    </main>
  )
}

export default PostPage
