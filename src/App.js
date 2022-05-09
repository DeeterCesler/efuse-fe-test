import { createContext } from 'react'
import './App.css'
import DynamicPostComponent from './components/DynamicPostComponent'

const dummyData = {
  post: {
    postType: 'post',
    postAuthor: 'dunkey',
    postAuthorProfileUrl: '../assets/dunkey.jpg',
    postAuthorId: 123,
    postBody:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Knack 2 baybee ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    numHypes: 300,
    numComments: 20,
    numShares: 10,
    views: 100,
  },
  comments: [
    {
      postType: 'comment',
      postAuthor: 'dunkey',
      postAuthorProfileUrl: '../assets/dunkey.jpg',
      postAuthorId: 123,
      postBody:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Knack 2 baybee ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      numHypes: 300,
      numComments: 20,
      numShares: 10,
    },
    {
      postType: 'comment',
      postAuthor: 'dunkey',
      postAuthorProfileUrl: '../assets/dunkey.jpg',
      postAuthorId: 123,
      postBody:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Knack 2 baybee ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      numHypes: 300,
      numComments: 20,
      numShares: 10,
    },
  ],
}

export const AppContext = createContext(dummyData)

function App() {
  return (
    <div>
      <div className="container">
        <DynamicPostComponent />
      </div>
    </div>
  )
}

export default App
