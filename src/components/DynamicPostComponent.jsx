import { useState, createContext } from 'react'
import PostHeaderComponent from './PostHeaderComponent'
import PostInteractionBar from './PostInteractionBar'
import AddCommentComponent from './AddCommentComponent'

export const PostContext = createContext();

function DynamicPostComponent(props) {
  const { post } = props
  const [comments, setComments] = useState([]);

  
  const CommentComponent = (props) => {
    return (
      <div className="comment">
        <PostHeaderComponent {...props} />
      <p>
        {props.postBody}
      </p>
      <PostInteractionBar {...props} />
      </div>
    )
  }

  return (
    <div className="post">
      <PostHeaderComponent {...post} />
      <p>
        {post.postBody}
      </p>
      <PostInteractionBar {...post} />
      <AddCommentComponent />
      <br/>
        { comments.length ? 
        <div>
            <div className='separator' />
            {comments?.map((comment) => {
                return <CommentComponent key={comment.id} {...comment}/>
            })}
        </div>
        :
        null
        }
        {/* This one below is only to show a preloaded comment batch (dunkey's) */}
        { post?.comments?.length ? 
        <div>
            <div className='separator' />
            {post.comments.map((comment) => {
                return <CommentComponent key={comment.id} {...comment}/>
            })}
        </div>
        :
        null
        }
    </div>
  )
}

export default DynamicPostComponent
