import activityModel from "../models/activityModel";
import activitiesHolderModel from "../models/activitiesHolderModel";
import statisticsModel from "../models/statisticsModel";
import {MAX_LENGTH} from "../models/activityModel";

class ActivityPresenter{
    onAddNewActivity(){
        // check empty activity
        if(!activityModel.state.activityName){
            activityModel.setActivityEmpty();
        } // limit name length
        else if (activityModel.state.activityName.length > MAX_LENGTH){
            console.log("too long");
        }
        else{
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
