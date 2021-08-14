import {EventEmitter} from "events";
import {MAX_LENGTH} from "../models/activityModel";

class WarningModel extends EventEmitter{
    constructor(){
        super();
        this.state = {
            attemptToAddEmpty: false,
            attemptToAddLong: false
        };
    }

    resetFields(){
        this.state = {
            attemptToAddEmpty: false,
            attemptToAddLong: false
        };
        this.emit("warningChange");
    }

    resetAttemptToAddEmpty(){
        this.state = {
            ...this.state,
            attemptToAddEmpty: false
        };
        this.emit("warningChange");
    }

    onAttemptToAddEmpty(){
        this.state = {
            ...this.state,
            attemptToAddEmpty: true
        };
        this.emit("warningChange", "Activity name cannot be empty");
    }

    resetAttemptToAddLong(){
        this.state = {
            ...this.state,            
            attemptToAddLong: false
        };
        this.emit("warningChange", this.state);
    }

    onAttemptToAddLong(){
        this.state = {
            ...this.state,
            attemptToAddLong: true
        };
        this.emit("warningChange", `Activity name too long, max ${MAX_LENGTH} characters`);
    }
}

const warningModel = new WarningModel();
export default warningModel;
