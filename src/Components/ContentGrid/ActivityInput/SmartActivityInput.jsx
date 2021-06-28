import React from "react";
import activityModel from "../models/activityModel";
import activityPresenter from "../presenters/activityPresenter";
import ActivityInput from "./ActivityInput";

function mapStateToComponent(state){
    return {
        activity: state.activityName,
        empty: state.empty,
    };
}

class SmartActivityInput extends React.Component{
    constructor(){
        super();
        this.state = mapStateToComponent(activityModel.state);
        this.state = {
            ...this.state, 
            empty: false
        }
        this.listener = this.listener.bind(this);
        activityModel.addListener("change", this.listener);
    }

    listener(modelState){
        this.setState(mapStateToComponent(modelState));
    }

    componentWillUnmount(){
        activityModel.removeListener("change", this.listener);
    }

    render() {
        if(this.state.empty){
            //placeholder = ERROR_MESSAGES.emptyActivity;
        }
        return (
            <ActivityInput
                activity={this.state.activity}
                onChangeActivity={activityPresenter.onChangeNewActivity}
                onAddActivity={activityPresenter.onAddNewActivity}
                onFinishActivity={activityPresenter.onFinishActivity}
            />    
        );
    }
}

export default SmartActivityInput;
