export default function PostHeaderComponent(props){
    return (
        <div className={`post-header-component ${props.postType}-header`}>
            <img src={props.postAuthorProfileUrl} className='pfp' alt='profile-pic'/>
            <div className='titles'>
                <h3>{props.postAuthor}</h3>
                <p>2 minutes ago</p>
            </div>
            { props.postType === 'post' && <div className="dots"></div> }
        </div>
    )
}
