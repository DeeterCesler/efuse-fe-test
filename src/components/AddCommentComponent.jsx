import comment from '../assets/comment.svg';
import plus from '../assets/add.svg';

export default function AddCommentComponent(){
    return (
        <div className="add-comment-component">
            <div style={{display: 'flex', alignItems: 'center'}}>
                <img src={comment} alt='comment icon' height="20px" />
            <div className="comment-field">Add Comment</div>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <img src={plus} alt='plus sign' height="20px" />
            </div>
        </div>
    )
}
