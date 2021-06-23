import React from "react";
import activityModel from "./activityModel";
import activityPresenter from "./activityPresenter";
import ActivityInput from "./ActivityInput";

function mapStateToComponent(state){
    return {
        data: state.data,
        activity: state.newActivity.activity
    };
}

class SmartActivityInput extends React.Component{
    constructor(){
        super();
        this.state = mapStateToComponent(activityModel.state);
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
        return (
            <ActivityInput
                activity={this.state.activity}
                onChangeActivity={activityPresenter.onChangeNewActivity}
                onAddActivity={activityPresenter.onAddNewActivity}
            />
        );
    }
}

export default SmartActivityInput;
