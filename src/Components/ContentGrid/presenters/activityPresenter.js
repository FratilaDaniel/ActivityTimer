import activityModel from "../models/activityModel";
import activitiesHolderModel from "../models/activitiesHolderModel";
import statisticsModel from "../models/statisticsModel";
import warningModel from "../models/warningModel";
import {MAX_LENGTH} from "../models/activityModel";

class ActivityPresenter{
    // on click "start activity"
    onAddNewActivity(){
        if(activityModel.state.nameEmpty){
            // empty activity name (or whitespaces only), raise warning
            warningModel.onAttemptToAddEmpty();
        } 
        else if (activityModel.state.activityName.length > MAX_LENGTH){
            // activity name too long, raise warning
            warningModel.onAttemptToAddLong();
        }
        else{
            if(activitiesHolderModel.isLastActivityOngoing()){
                activitiesHolderModel.finishActivity();
                statisticsModel.computeStatistics(activitiesHolderModel.state.activities);
            }
            activitiesHolderModel.addNewActivity(activityModel.state.activityName.trim());
            activityModel.clearNewActivity();
            warningModel.resetFields();
        }
    }

    onFinishActivity(){
        if(activitiesHolderModel.isLastActivityOngoing()){
            activitiesHolderModel.finishActivity();
            statisticsModel.computeStatistics(activitiesHolderModel.state.activities);
            activityModel.clearNewActivity();
            warningModel.resetFields();
        }
    }

    getActivityLength(){
        return activityModel.state.activityName.length;
    }

    onChangeNewActivity(value){
        // reset attempt to add empty activity if present
        if(warningModel.state.attemptToAddEmpty){
            warningModel.resetAttemptToAddEmpty();
        }
        // change the new activity name
        activityModel.changeNewActivity(value);
        // raise warning if new name is too long, else reset warning
        if (activityModel.state.activityName.length > MAX_LENGTH){
            warningModel.onAttemptToAddLong();
        }
        else{
            warningModel.resetAttemptToAddLong();
        }
    }
}

const activityPresenter = new ActivityPresenter();
export default activityPresenter;
