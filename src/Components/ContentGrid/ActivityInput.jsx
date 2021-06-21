
function ActivityInput(props){
    return (
        <div className="grid-cell-container activity-grid-cell">
            <div className="activity-input-container">
                <input className="activity-input" placeholder="Activity name"/>
                <br/>
                <button className="btn">Start activity</button>
                <button className="btn">Stop activity</button>
            </div>
        </div>
    );
}

export default ActivityInput;
