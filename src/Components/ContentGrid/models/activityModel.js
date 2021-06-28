import {EventEmitter} from "events";

// class that is responsible for creating a new activity
class ActivityModel extends EventEmitter{
    static MAX_LENGTH = 20;
        
    constructor(){
        super();
        this.state = {
            nameEmpty: false,
            nameTooLong: false,
            activityName: "",
        };
    }

    clearNewActivity(){
        this.state = {activityName: ""};
        this.emit("change", this.state);
    }

    changeNewActivity(value){
        let valuetTooLong = false;
        console.log(value.length, ActivityModel.MAX_LENGTH)
        if(value.length > ActivityModel.MAX_LENGTH){
            valuetTooLong = true;
        }
        this.state = {
            activityName: value, 
            nameEmpty: false,
            nameTooLong: valuetTooLong
        };
        this.emit("change", this.state);
    }

    setActivityEmpty(){
        this.state = {
            ...this.state,
            nameEmpty: true
        };
        this.emit("change", this.state);
    }
}

const activityModel = new ActivityModel();
export default activityModel;
export let MAX_LENGTH = ActivityModel.MAX_LENGTH;
