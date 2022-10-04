// Write your JS code here
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import BlogItem from '../BlogItem'

import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogList extends Component {
  state = {blogsList: [], isLoading: true}

  componentDidMount() {
    this.getBlogsList()
  }

  getBlogsList = async () => {
    const promise = await fetch('https://apis.ccbp.in/blogs')
    const data = await promise.json()

    const updatedData = data.map(eachItem => ({
      author: eachItem.author,
      avatarUrl: eachItem.avatar_url,
      id: eachItem.id,
      imageUrl: eachItem.image_url,
      title: eachItem.title,
      topic: eachItem.topic,
    }))
    this.setState({blogsList: updatedData, isLoading: false})
  }

  render() {
    const {blogsList, isLoading} = this.state
    return (
      <div className="container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <ul>
            {blogsList.map(eachItem => (
              <BlogItem key={eachItem.id} details={eachItem} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default BlogList
