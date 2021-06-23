import {EventEmitter} from "events";

// class that holds all information regarding
// user's activities, past and ongoing 
class ScheduleModel extends EventEmitter{
    constructor(){
        super();
        this.state = {
            scheduleHead: ["Number", "Activity", "Status", "Duration", "Start time", "End time"],
            data: []
        };
    }

    addData(newData){
        this.state = {
            ...this.state,
            data: this.state.data.concat(newData)
        };
    }
}

const scheduleModel = new ScheduleModel();
export default scheduleModel;
