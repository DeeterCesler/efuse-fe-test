import { createContext, useState, useContext } from 'react'
import './App.css'
import DynamicPostComponent from './components/DynamicPostComponent'
import GoLiveComponent from './components/GoLiveComponent'
import AddMediaComponent from './components/AddMediaComponent'
import dunkey from './assets/dunkey.jpg'
import pfp from './assets/default.jpeg'
import dunk2 from './assets/dunk2.jpeg'
import logo from './assets/logo.png'

const dummyData = {
  id: 1,
  postType: 'post',
  postAuthor: 'dunkey',
  postAuthorProfileUrl: dunkey,
  postAuthorId: 123,
  postBody:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Knack 2 baybee ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  numHypes: 300,
  numComments: 20,
  numShares: 10,
  views: 100,
  comments: [
    {
      id: 1,
      postType: 'comment',
      postAuthor: 'not dunkey',
      postAuthorProfileUrl: dunk2,
      postAuthorId: 123,
      postBody: 'hey dunkey I love your post',
      numHypes: 4,
      numComments: 1,
      numShares: 0,
    },
    {
      id: 2,
      postType: 'comment',
      postAuthor: 'dunkey',
      postAuthorProfileUrl: dunkey,
      postAuthorId: 123,
      postBody: 'thx man much appreciated',
      numHypes: 1,
      numComments: 0,
      numShares: 0,
    },
  ],
}

export const UserContext = createContext({
  id: 10,
  username: 'You',
  pfp: pfp,
})

function App() {
  const [newPost, setNewPost] = useState('')
  const [posts, setPosts] = useState([dummyData])
  const [idCounter, setIdCounter] = useState(1) // defaulting to 1 becase I'm seeding a dummy post with an ID of 1 already
  const context = useContext(UserContext)

  const handlePostSubmit = () => {
    setPosts([
      {
        id: idCounter + 1,
        postType: 'post',
        postAuthor: context.username,
        postAuthorProfileUrl: context.pfp,
        postAuthorId: 5,
        postBody: newPost,
        numHypes: 0,
        numComments: 0,
        numShares: 0,
        views: 0,
        comments: [],
      },
      ...posts,
    ])
    setIdCounter(idCounter + 1)
  }

  const handleNewPost = (e) => {
    setNewPost(e.currentTarget.value)
  }

  return (
    <div>
      <div className="mobile-menu">
        <div>
          <div>
            <svg
              width="14"
              height="12"
              viewBox="0 0 14 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.625 1.875C13.8125 1.875 14 1.71875 14 1.5V0.5C14 0.3125 13.8125 0.125 13.625 0.125H0.375C0.15625 0.125 0 0.3125 0 0.5V1.5C0 1.71875 0.15625 1.875 0.375 1.875H13.625ZM13.625 6.875C13.8125 6.875 14 6.71875 14 6.5V5.5C14 5.3125 13.8125 5.125 13.625 5.125H0.375C0.15625 5.125 0 5.3125 0 5.5V6.5C0 6.71875 0.15625 6.875 0.375 6.875H13.625ZM13.625 11.875C13.8125 11.875 14 11.7188 14 11.5V10.5C14 10.3125 13.8125 10.125 13.625 10.125H0.375C0.15625 10.125 0 10.3125 0 10.5V11.5C0 11.7188 0.15625 11.875 0.375 11.875H13.625Z"
                fill="#006CFA"
              />
            </svg>
          </div>
          <img src={logo} alt="logo" style={{ margin: '0 1rem' }} />
        </div>
        <div>
          <div className="search">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.875 14.6562L12.0938 10.875C12 10.8125 11.9062 10.75 11.8125 10.75H11.4062C12.375 9.625 13 8.125 13 6.5C13 2.9375 10.0625 0 6.5 0C2.90625 0 0 2.9375 0 6.5C0 10.0938 2.90625 13 6.5 13C8.125 13 9.59375 12.4062 10.75 11.4375V11.8438C10.75 11.9375 10.7812 12.0312 10.8438 12.125L14.625 15.9062C14.7812 16.0625 15.0312 16.0625 15.1562 15.9062L15.875 15.1875C16.0312 15.0625 16.0312 14.8125 15.875 14.6562ZM6.5 11.5C3.71875 11.5 1.5 9.28125 1.5 6.5C1.5 3.75 3.71875 1.5 6.5 1.5C9.25 1.5 11.5 3.75 11.5 6.5C11.5 9.28125 9.25 11.5 6.5 11.5Z"
                fill="#0B0B0C"
              />
            </svg>
          </div>
          <div className="user-dropdown">
            <img src={pfp} height="20px" alt="your pfp" />
            <div className="status"></div>
            <svg
              width="11"
              height="7"
              viewBox="0 0 11 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5859 1.4375L10.1406 0.96875C10.0234 0.851562 9.83594 0.851562 9.74219 0.96875L5.5 5.21094L1.23438 0.96875C1.14062 0.851562 0.953125 0.851562 0.835938 0.96875L0.390625 1.4375C0.273438 1.53125 0.273438 1.71875 0.390625 1.83594L5.28906 6.73438C5.40625 6.85156 5.57031 6.85156 5.6875 6.73438L10.5859 1.83594C10.7031 1.71875 10.7031 1.53125 10.5859 1.4375Z"
                fill="#697181"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="draft">
          <div className="draft-input">
            <input
              placeholder="What's on your mind?"
              onChange={handleNewPost}
            />
          </div>
          <div className="draft-bar">
            <div className="draft-bar-buttons">
              <AddMediaComponent />
              <GoLiveComponent />
            </div>
            <div>
              <button
                onClick={newPost.length && handlePostSubmit}
                className="new-post"
              >
                Post
              </button>
            </div>
          </div>
        </div>
        {posts?.map((post) => {
          return <DynamicPostComponent key={post.id} post={post} />
        })}
      </div>
    </div>
  )
}

export default App
