import './App.css'
import PostHeaderComponent from './components/PostHeaderComponent'
import PostInteractionBar from './components/PostInteractionBar'
import AddCommentComponent from './components/AddCommentComponent'

function App() {
  const comment = () => {
    return (
      <div className="comment">
        <PostHeaderComponent postType="comment" />
      </div>
    )
  }

  return (
    <div>
      <div className="container">
        <div className="post">
          <PostHeaderComponent postType="post" />
          <br />
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Knack 2
            baybee ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </div>
          <br />
          <PostInteractionBar postType="post" views={100} />
          <AddCommentComponent />
        </div>
      </div>
    </div>
  )
}

export default App
