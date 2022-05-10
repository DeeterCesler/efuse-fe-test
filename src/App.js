import { createContext, useState, useContext } from 'react'
import './App.css'
import DynamicPostComponent from './components/DynamicPostComponent'
import dunkey from './assets/dunkey.jpg'
import pfp from './assets/default.jpeg'
import dunk2 from './assets/dunk2.jpeg'

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
      <div className="container">
        <div className="draft">
          <div className="draft-input">
            <input
              placeholder="What's on your mind?"
              onChange={handleNewPost}
            />
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
        {posts?.map((post) => {
          return <DynamicPostComponent key={post.id} post={post} />
        })}
      </div>
    </div>
  )
}

export default App
