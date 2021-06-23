import activityModel from "../models/activityModel";
import activitiesHolderModel from "../models/activitiesHolderModel";

class ActivityPresenter{
    onAddNewActivity(){
        if(activitiesHolderModel.isLastActivityOngoing()){
            activitiesHolderModel.finishActivity();
        }
        activitiesHolderModel.addNewActivity(activityModel.state.activityName);
        activityModel.clearNewActivity();
    }

    onFinishActivity(){
        if(activitiesHolderModel.isLastActivityOngoing()){
            activitiesHolderModel.finishActivity();
        }
    }

    onChangeNewActivity(value){
        activityModel.changeNewActivity(value);
    }
}

const activityPresenter = new ActivityPresenter();
export default activityPresenter;
