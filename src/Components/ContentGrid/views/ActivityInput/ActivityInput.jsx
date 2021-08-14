import Warning from "../Warning/Warning";

function ActivityInput({activity, onChangeActivity, onAddActivity, onFinishActivity, showWarning}) {
    return (
        <div className="activity-input-container">
            <input 
                className="activity-input" 
                placeholder="Activity name"
                value={activity}
                onChange={event => onChangeActivity(event.target.value)}
            />
                
            <Warning/>

            <div id="buttons-container">
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
