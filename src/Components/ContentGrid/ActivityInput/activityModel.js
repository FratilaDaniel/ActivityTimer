import {EventEmitter} from "events";

// class that is responsible for creating a new activity
class ActivityModel extends EventEmitter{
    constructor(){
        super();
        this.state = {
            data: [],
            newActivity:{
                number: "",            
                activity: "",
                status: "",
                duration: "",
                startTime: "",
                endTime: ""
            }
        };
    }

    addNewActivity(){
        this.state = {
            ...this.state,
            data: this.state.data.concat({
                number: this.state.data.length + 1,            
                activity: this.state.newActivity.activity,
                status: "in progress",
                duration: "",
                startTime: new Date().getUTCDate(),
                endTime: ""
            })
        };
    }

    clearNewActivityFields(){
        this.state = {
            ...this.state,
            newActivity:{
                number: "",            
                activity: "",
                status: "",
                duration: "",
                startTime: "",
                endTime: ""
            }
        };
        this.emit("change", this.state);
    }

    changeNewActivity(value){
        this.state = {
            ...this.state,
            newActivity: {
                ...this.state.newActivity,
                activity: value
            }
        };
        this.emit("change", this.state);
    }

    showCurrentState(){
        console.log("Current: " + this.state.newActivity.activity, this.state.data);
    }
}

const activityModel = new ActivityModel();
export default activityModel;
