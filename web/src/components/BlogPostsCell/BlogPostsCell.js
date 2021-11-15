// import { Link, routes } from '@redwoodjs/router'
import BlogPost from 'src/components/BlogPost'

export const QUERY = gql`
  query BlogPostsQuery {
    posts {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ posts }) => {
  // return posts.map((post) => (
  //   <article key={post.id}>
  //     <header>
  //       <h2>
  //         <Link to={routes.blogPost({ id: post.id })}>{post.title}</Link>
  //       </h2>
  //     </header>
  //     <p>{post.body}</p>
  //     <div>Posted at: {post.createdAt}</div>
  //   </article>
  // ))
  return posts.map((post) => <BlogPost key={post.id} post={post} />)
}
