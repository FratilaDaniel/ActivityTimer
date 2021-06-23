import scheduleModel from "./scheduleModel";

// controller-type class
// binds view events to model logic
class SchedulePresenter{

    onAddNewData(){
        scheduleModel.addData();
    }

    onChange(property, value){
        // scheduleModel.
    }

}

const schedulePresenter = new SchedulePresenter();
export default schedulePresenter;