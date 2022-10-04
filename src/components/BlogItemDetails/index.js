// Write your JS code here

import Loader from 'react-loader-spinner'
import {Component} from 'react'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {itemDetails: {}, isLoading: true}

  componentDidMount() {
    this.getBlogDetails()
  }

  getBlogDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const promise = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await promise.json()
    const details = {
      author: data.author,
      avatarUrl: data.avatar_url,
      id: data.id,
      imageUrl: data.image_url,
      title: data.title,
      content: data.content,
      topic: data.topic,
    }
    this.setState({itemDetails: details, isLoading: false})
  }

  render() {
    const {itemDetails, isLoading} = this.state
    const {title, imageUrl, avatarUrl, content, author} = itemDetails

    return (
      <div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <>
            <h1>{title}</h1>
            <img src={avatarUrl} alt="avatar" className="avatar" />
            <p>{author}</p>
            <img src={imageUrl} alt={title} className="image" />
            <p>{content}</p>
          </>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
