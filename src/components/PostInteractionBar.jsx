import HypeReaction from './HypeReaction'
import CommentReaction from './CommentReaction'
import SharesReaction from './SharesReaction'

export default function PostInteractionBar(props){
    const { postType, numHypes, numComments, numShares, views } = props

    
    return (
        <div className='reaction-bar'>
            <HypeReaction numHypes={numHypes} />
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
