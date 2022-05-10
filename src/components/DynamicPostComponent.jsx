import { useState, useContext } from 'react'
import PostHeaderComponent from './PostHeaderComponent'
import PostInteractionBar from './PostInteractionBar'
import AddCommentComponent from './AddCommentComponent'
import {UserContext} from '../App';

function DynamicPostComponent(props) {
  const { post } = props
  const context = useContext(UserContext)
  const [comments, setComments] = useState([]);

  const handleNewCommentSubmit = (newComment) => {
    setComments([...comments,
      {
        postType: 'comment',
        postAuthor: context.username,
        postAuthorProfileUrl: context.pfp,
        postAuthorId: 123,
        postBody: newComment,
        numHypes: 0,
        numComments: 0,
        numShares: 0,
      },
    ]);
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
      <PostInteractionBar {...post} />
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
