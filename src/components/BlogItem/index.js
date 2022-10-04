// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {details} = props
  const {id, title, imageUrl, avatarUrl, topic, author} = details

  return (
    <Link to={`/blogs/${id}`}>
      <li className="list-item">
        <img src={imageUrl} alt="blog" className="image" />
        <div>
          <p>{topic}</p>
          <h1>{title}</h1>
          <img src={avatarUrl} alt="avatar" className="avatar" />
          <p>{author}</p>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
