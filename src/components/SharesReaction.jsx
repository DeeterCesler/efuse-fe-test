export default function SharesReaction(props){

    return (
        <div>
            <button className="share-button icon-button">
                <div className="share-icon"></div>
            </button>
            <p>
                <strong>{props.numShares}</strong> Shares
            </p>
        </div>
    )
}
