import { useContext } from 'react';
import { AppContext } from '../App';
import HypeReaction from './HypeReaction'
import CommentReaction from './CommentReaction'
import SharesReaction from './SharesReaction'

export default function PostInteractionBar(props){
    const context = useContext(AppContext);
    const { post } = context;
    const { postType } = props;

    
    return (
        <div className='reaction-bar'>
            <HypeReaction numHypes={post.numHypes} />
            <CommentReaction numComments={post.numComments} postType={postType}/>
            <SharesReaction numShares={post.numShares} />
            {postType === 'post' ? 
            <div>
                <strong>{post.views}</strong> Views
            </div>
            : null }
        </div>
    )
}
