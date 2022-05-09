export default function CommentReaction(props){
    const { postType } = props;

    return (
        <div>
            <button className="comment-button icon-button">
                <div className="comment-icon"></div>
            </button>
            <strong>{props.numComments}</strong> {postType === 'post' ? 'Comments' : 'Replies'}
        </div>
    )
}
