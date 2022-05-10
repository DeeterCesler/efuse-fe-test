export default function CommentReaction(props){
    const { postType } = props;

    return (
        <div>
            <button className="comment-button icon-button">
                <div className="comment-icon"></div>
            </button>
            <p>
                <strong>{props.numComments}</strong> {postType === 'post' ? (props.numComments !== 1 ? 'Comments' : 'Comment') : (props.numComments !== 1 ? 'Replies' : 'Reply') }
            </p>
        </div>
    )
}
