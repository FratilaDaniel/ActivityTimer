import activityModel from "./activityModel";

class ActivityPresenter{
    onAddNewActivity(){
        activityModel.addNewActivity();
        activityModel.clearNewActivityFields();
        activityModel.showCurrentState();
    }

    onChangeNewActivity(value){
        activityModel.changeNewActivity(value);
        activityModel.showCurrentState();
    }
}

const activityPresenter = new ActivityPresenter();
export default activityPresenter;
