import activityModel from "../models/activityModel";
import activitiesHolderModel from "../models/activitiesHolderModel";
import statisticsModel from "../models/statisticsModel";

class ActivityPresenter{
    onAddNewActivity(){
        if(activityModel.state.activityName){
            if(activitiesHolderModel.isLastActivityOngoing()){
                activitiesHolderModel.finishActivity();
                statisticsModel.computeStatistics(activitiesHolderModel.state.activities);
            }
            activitiesHolderModel.addNewActivity(activityModel.state.activityName);
            activityModel.clearNewActivity();
        }

    }

    onFinishActivity(){
        if(activitiesHolderModel.isLastActivityOngoing()){
            activitiesHolderModel.finishActivity();
            statisticsModel.computeStatistics(activitiesHolderModel.state.activities);
            activityModel.clearNewActivity();
        }
    }

    onChangeNewActivity(value){
        activityModel.changeNewActivity(value);
    }
}

const activityPresenter = new ActivityPresenter();
export default activityPresenter;
