import { useState } from 'react';
import commentIcon from '../assets/comment.svg';
import plus from '../assets/add.svg';

export default function AddCommentComponent(props){
    const [toggle, setToggle] = useState(false);
    const [comment, setComment] = useState('');

    const handleCommentInput = (e) => {
        setComment(e.currentTarget.value);
    }

    return (toggle ?
        <div className="add-comment-component-active" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative'}}>
            <div className='comment-input'>
                <input placeholder="Comment goes here" onChange={handleCommentInput} />
            </div>
            <div style={{position: 'absolute', right: '10px', alignItems: 'center'}}>
                <button className={`new-comment-button ${comment.length && 'comment-active'}`} disabled={!comment.length} style={{cursor: comment.length ? 'pointer': 'default'}}>Post</button>
            </div>
        </div>
     :
        <div className="add-comment-component" onClick={()=>setToggle(!toggle)}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <img src={commentIcon} alt='comment icon' height="20px" />
            <div className="comment-field">Add Comment</div>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <img src={plus} alt='plus sign' height="20px" />
            </div>
        </div>)
}
