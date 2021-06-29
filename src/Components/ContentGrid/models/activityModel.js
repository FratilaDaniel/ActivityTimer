import {EventEmitter} from "events";

// class that is responsible for creating a new activity
class ActivityModel extends EventEmitter{
    static MAX_LENGTH = 16;
        
    constructor(){
        super();
        this.state = {
            nameEmpty: true,
            nameTooLong: false,
            activityName: "",
        };
    }

    clearNewActivity(){
        this.state = { 
            nameEmpty: true, 
            nameTooLong: false, 
            activityName: "",
        };
        this.emit("change", this.state);
    }

    changeNewActivity(value){
        const trimmedValue = value.trim();
        let valueTooLong = false;
        let nameEmpty = false;
        if(trimmedValue === ""){ 
            nameEmpty = true;
        }
        if(value.length > ActivityModel.MAX_LENGTH){
            valueTooLong = true;
        }
        this.state = {
            activityName: value, 
            nameEmpty: nameEmpty,
            nameTooLong: valueTooLong
        };
        this.emit("change", this.state);
    }
}

const activityModel = new ActivityModel();
export default activityModel;
export let MAX_LENGTH = ActivityModel.MAX_LENGTH;
