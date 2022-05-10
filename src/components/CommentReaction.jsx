export default function CommentReaction(props){
    const { postType } = props;

    return (
        <div>
            <button className="comment-button icon-button">
                <div className="comment-icon"></div>
            </button>
            <p>
                <b>{props.numComments}</b> {postType === 'post' ? (props.numComments !== 1 ? 'Comments' : 'Comment') : (props.numComments !== 1 ? 'Replies' : 'Reply') }
            </p>
        </div>
    )
}
