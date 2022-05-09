import HypeReaction from './HypeReaction'
import CommentReaction from './CommentReaction'
import SharesReaction from './SharesReaction'

export default function PostInteractionBar(props){
    const { postType, views } = props;
    
    return (
        <div className='reaction-bar'>
            <HypeReaction numHypes={300} />
            <CommentReaction numComments={20} postType={postType}/>
            <SharesReaction numShares={10} />
            {postType === 'post' ? 
            <div>
                <strong>{views}</strong> Views
            </div>
            : null }
        </div>
    )
}
