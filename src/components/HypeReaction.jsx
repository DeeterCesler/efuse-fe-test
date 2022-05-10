export default function HypeReaction(props){
    return (
        <div className="hype">
            <button className={`hype-button icon-button ${props.hypeToggle && 'hype-active'}`} onClick={props.handleHypeClick}>
                <div className="hype-icon"></div>
            </button>
            <p>
                <strong>{props.numHypes}</strong> {props.numHypes !== 1 ? 'Hypes' : 'Hype'}
            </p>
        </div>
    )
}
