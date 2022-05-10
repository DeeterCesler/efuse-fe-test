export default function CommentReaction(props){
    const { postType, numComments } = props;

    return (
        <div>
            <button className="comment-button icon-button">
                <div className="comment-icon"></div>
            </button>
            <p>
                <b>{numComments || 0}</b> {postType === 'post' ? (numComments !== 1 ? 'Comments' : 'Comment') : (numComments !== 1 ? 'Replies' : 'Reply') }
            </p>
        </div>
    )
}
