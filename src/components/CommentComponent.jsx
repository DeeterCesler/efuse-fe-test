import { useState } from 'react'
import PostHeaderComponent from './PostHeaderComponent'
import PostInteractionBar from './PostInteractionBar'

const CommentComponent = (props) => {
    const {post} = props
    const [hypeCommentToggle, setHypeCommentToggle] = useState(false);
    const [hypeCommentCounter, setHypeCommentCounter] = useState(0);

    const handleHypeCommentClick = () => {
      if(!hypeCommentToggle) {
        setHypeCommentCounter(hypeCommentCounter + 1)
        setHypeCommentToggle(!hypeCommentToggle)
      } else {
        setHypeCommentCounter(hypeCommentCounter - 1)
        setHypeCommentToggle(!hypeCommentToggle)
      }
    }
    return (
      <div className="comment">
        <PostHeaderComponent {...props} />
      <p>
        {props.postBody}
      </p>
      <PostInteractionBar hypeToggle={hypeCommentToggle} handleHypeClick={handleHypeCommentClick} hypeCounter={hypeCommentCounter} {...post} />
      </div>
    )
}

export default CommentComponent;
