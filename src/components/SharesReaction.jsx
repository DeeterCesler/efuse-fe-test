export default function SharesReaction(props){

    return (
        <div>
            <button className="share-button icon-button">
                <div className="share-icon"></div>
            </button>
            <p>
                <strong>{props.numShares}</strong> {props.numShares !== 1 ? 'Shares' : 'Share'}
            </p>
        </div>
    )
}
