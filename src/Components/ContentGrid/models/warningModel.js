import {EventEmitter} from "events";

class WarningModel extends EventEmitter{
    constructor(){
        super();
        this.state = {
            attemptToAddEmpty: 0,
            attemptToAddLong: 0
        };
    }

    resetFields(){
        this.state = {
            attemptToAddEmpty: 0,
            attemptToAddLong: 0
        }
        this.emit("change", this.state);
    }

    resetAttemptToAddEmpty(){
        this.state = {
            ...this.state,
            attemptToAddEmpty: 0
        };
        this.emit("change", this.state);
    }
    
    resetAttemptToAddLong(){
        this.state = {
            ...this.state,            
            attemptToAddLong: 0
        };
        this.emit("change", this.state);
    }

    onAttemptToAddEmpty(){
        const oldVal = this.state.attemptToAddEmpty;
        this.state = {
            ...this.state,
            attemptToAddEmpty: oldVal + 1
        };
        this.emit("change", this.state);
    }
    
    onAttemptToAddLong(){
        const oldVal = this.state.attemptToAddLong;
        this.state = {
            ...this.state,
            attemptToAddLong: oldVal + 1
        };
        this.emit("change", this.state);
    }
}

const warningModel = new WarningModel();
export default warningModel;
