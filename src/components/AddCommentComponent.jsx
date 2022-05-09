import plus from '../assets/add.svg';

export default function AddCommentComponent(){
    return (
        <div className="add-comment-component">
            <div className="comment-field">Add Comment</div>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <img src={plus} alt='plus sign' height="20px" />
            </div>
        </div>
    )
}
