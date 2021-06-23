import {EventEmitter} from "events";

class ActivitiesHolderModel extends EventEmitter{
    constructor(){
        super();
        this.state = {
            activities: []
        };
    }

    addNewActivity(activityName){
        this.state = { activities: 
            this.state.activities.concat({
                number: this.state.activities.length + 1,            
                activity: activityName,
                status: "in progress",
                duration: "",
                startTime: new Date().toLocaleString(),
                endTime: ""
            })
        };
        this.emit("change", this.state);
    }

    isLastActivityOngoing(){
        return (
            this.state.activities.length > 0 &&
            this.state.activities[this.state.activities.length - 1].status === "in progress"
        );
    }

    // finish activity
    finishActivity(){
        const finishTime = new Date().toLocaleString();
        let copyActivities = [...this.state.activities];
        let durationInMs = Date.parse(finishTime) - Date.parse(copyActivities[copyActivities.length - 1].startTime);
        durationInMs /= 1000;
        copyActivities[copyActivities.length - 1] = {
            ...copyActivities[copyActivities.length - 1],
            status: "done",
            duration: durationInMs,
            endTime: finishTime,
        }
        this.state = {activities: copyActivities};
        this.emit("change", this.state);
    }

    // change certain activity


}

const activitiesHolderModel = new ActivitiesHolderModel();
export default activitiesHolderModel;
