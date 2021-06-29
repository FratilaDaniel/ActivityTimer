import {EventEmitter} from "events";

// class that is responsible for creating a new activity
class ActivityModel extends EventEmitter{
    static MAX_LENGTH = 16;
        
    constructor(){
        super();
        this.state = {
            isNew: true,
            nameEmpty: true,
            nameTooLong: false,
            activityName: "",
        };
    }

    setIsNewActivityFalse(){
        this.state = { 
            ...this.state,
            isNew: false,
        };
        this.emit("change", this.state);
    }

    clearNewActivity(){
        this.state = { 
            isNew: true,
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
            isNew: false,
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
