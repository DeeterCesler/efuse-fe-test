import { useState, useContext } from 'react'
import PostHeaderComponent from './PostHeaderComponent'
import PostInteractionBar from './PostInteractionBar'
import AddCommentComponent from './AddCommentComponent'
import {UserContext} from '../App';

function DynamicPostComponent(props) {
  const { post } = props
  const context = useContext(UserContext)
  const [hypeToggle, setHypeToggle] = useState(0);
  const [hypeCounter, setHypeCounter] = useState(0);
  const [comments, setComments] = useState([]);
  const [idCounter, setIdCounter] = useState(1) // defaulting to 1 becase I'm seeding a dummy post with an ID of 1 already

  const handleNewCommentSubmit = (newComment) => {
    setComments([...comments,
      {
        id: idCounter,
        postType: 'comment',
        postAuthor: context.username,
        postAuthorProfileUrl: context.pfp,
        postAuthorId: 123,
        postBody: newComment,
        numShares: 0,
      },
    ]);
    setIdCounter(idCounter + 1);
  }

  const handleHypeClick = () => {
    if(!hypeToggle) {
      setHypeCounter(hypeCounter + 1)
      setHypeToggle(!hypeToggle)
    } else {
      setHypeCounter(hypeCounter -1)
      setHypeToggle(!hypeToggle)
    }
  }
  
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
      <PostInteractionBar hypeToggle={hypeToggle} handleHypeClick={handleHypeClick} hypeCounter={hypeCounter} {...post} />
      <AddCommentComponent handleNewCommentSubmit={handleNewCommentSubmit} />
      <br/>
        { comments.length || post?.comments?.length
          ? <div className='separator' />
          : null
        }
        {/* This one below is only to show a preloaded comment batch (dunkey's) */}
        { post?.comments?.length ? 
        <div>
            {[...post.comments].map((comment) => {
                return <CommentComponent key={comment.id} {...comment}/>
            })}
        </div>
        :
        null
        }
        {/* The real comments */}
        { comments.length ? 
        <div>
            {comments?.map((comment) => {
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
