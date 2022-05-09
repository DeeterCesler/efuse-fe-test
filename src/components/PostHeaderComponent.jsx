import img from '../assets/dunkey.jpg'

export default function PostHeaderComponent(props){
    return (
        <div className={`post-header-component ${props.postType}-header`}>
            <img src={img} className='pfp' alt='profile-pic'/>
            <div className='titles'>
                <h3>dunkey</h3>
                <p>2 minutes ago</p>
            </div>
        </div>
    )
}
