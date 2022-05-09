export default function HypeReaction(props){
    return (
        <div className="hype">
            <button className="hype-button icon-button">
                <div className="hype-icon"></div>
            </button>
            <p>
                <strong>{props.numHypes}</strong> Hypes
            </p>
        </div>
    )
}
