export default function SharesReaction(props){

    return (
        <div>
            <button className="share-button icon-button">
                <div className="share-icon"></div>
            </button>
            <strong>{props.numShares}</strong> Shares
        </div>
    )
}
