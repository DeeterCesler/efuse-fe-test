import HypeReaction from './HypeReaction'
import CommentReaction from './CommentReaction'
import SharesReaction from './SharesReaction'

export default function PostInteractionBar(props){
    const { postType, numShares, numComments, views } = props

    return (
        <div className='reaction-bar'>
            <HypeReaction hypeToggle={props.hypeToggle} handleHypeClick={props.handleHypeClick} numHypes={props.hypeCounter} />
            <CommentReaction numComments={numComments} postType={postType}/>
            <SharesReaction numShares={numShares} />
            {postType === 'post' ? 
            <div className='views'>
                <p>
                    <b>{views}</b> {views !== 1 ? ' Views' : 'View'}
                </p>
            </div>
            : null }
        </div>
    )
}
