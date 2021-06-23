// class that holds all information regarding
// user's activities, past and ongoing 
class ScheduleModel{
    constructor(){
        this.state = {
            data: [],
            newData: {
                number: "",
                activity: "",
                status: "",
                duration: "",
                startTime: "",
                endTime: "",
            },
        };
    }

    addData(){
        this.state = {
            ...this.state,
            data: this.state.data.concat(this.state.newData)
        };
    }

    changeNewDataProperty(property, value){
        this.state = {
            ...this.state,
            newData:{
                ...this.state.newData,
                [property]: value
            }
        };
    }
}

const scheduleModel = new ScheduleModel();
export default scheduleModel;
