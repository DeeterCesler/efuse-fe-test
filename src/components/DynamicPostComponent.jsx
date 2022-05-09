import { useContext } from 'react'
import PostHeaderComponent from './PostHeaderComponent'
import PostInteractionBar from './PostInteractionBar'
import AddCommentComponent from './AddCommentComponent'
import { AppContext } from '../App';

function App() {
  const context = useContext(AppContext);
  const { post, comments } = context;
  
  const CommentComponent = () => {
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
            {post.postBody}
          </div>
          <br />
          <PostInteractionBar postType="post" />
          <AddCommentComponent />
          <br/>
            { [].length ? 
            <div>
                <div className='separator' />
                {[].map((comment) => {
                    return <CommentComponent key={comment.id} {...comment}/>
                })}
            </div>
            :
            null
            }
        </div>
      </div>
    </div>
  )
}

export default App
