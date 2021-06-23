import {EventEmitter} from "events";

// class that is responsible for creating a new activity
class ActivityModel extends EventEmitter{
    constructor(){
        super();
        this.state = {
            activityName: "",
        };
    }

    clearNewActivity(){
        this.state = {activityName: ""};
        this.emit("change", this.state);
    }

    changeNewActivity(value){
        this.state = {activityName: value};
        this.emit("change", this.state);
    }
}

const activityModel = new ActivityModel();
export default activityModel;
