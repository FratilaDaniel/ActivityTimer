import activityModel from "../models/activityModel";
import activitiesHolderModel from "../models/activitiesHolderModel";
import statisticsModel from "../models/statisticsModel";
import {MAX_LENGTH} from "../models/activityModel";

class ActivityPresenter{
    onAddNewActivity(){
        activityModel.setIsNewActivityFalse();
        if(activityModel.state.nameEmpty){
            // empty activity name (or whitespaces only), raise warning
        } 
        else if (activityModel.state.activityName.length > MAX_LENGTH){
            // activity name too long, raise warning
        }
        else{
            if(activitiesHolderModel.isLastActivityOngoing()){
                activitiesHolderModel.finishActivity();
                statisticsModel.computeStatistics(activitiesHolderModel.state.activities);
            }
            activitiesHolderModel.addNewActivity(activityModel.state.activityName.trim());
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
