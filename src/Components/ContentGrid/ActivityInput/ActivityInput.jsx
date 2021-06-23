
function ActivityInput({activity, onChangeActivity, onAddActivity, onFinishActivity}) {
    return (
        <div className="grid-cell-container activity-grid-cell">
            <div className="activity-input-container">
                <input 
                    className="activity-input" 
                    placeholder="Activity name"
                    value={activity}
                    onChange={event => onChangeActivity(event.target.value)}
                />
                <br/>
                <button 
                    className="btn"
                    onClick={onAddActivity}>Start activity</button>
                <button 
                    className="btn"
                    onClick={onFinishActivity}>Finish activity</button>
            </div>
        </div>
    );
}

export default ActivityInput;
