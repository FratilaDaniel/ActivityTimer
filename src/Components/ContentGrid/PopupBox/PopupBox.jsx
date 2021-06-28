import React from "react";
import activityModel from "../models/activityModel";
import { MAX_LENGTH } from "../models/activityModel";

const ERROR_MESSAGES = {
    emptyActivity: "Activity empty",
    tooLongActivity: "Name too long: "
}

function mapStateToComponent(state){
    return {
        nameEmpty: state.nameEmpty,
        nameTooLong: state.nameTooLong,
        activityLength: state.activityName.length,
    }
}

class PopupBox extends React.Component{
    constructor(){
        super();
        this.state = mapStateToComponent(activityModel.state);
        this.listener = this.listener.bind(this);
        activityModel.addListener("change", this.listener);
    }

    listener(state){
        this.setState(mapStateToComponent(state));
    }

    componentWillUnmount(){
        activityModel.removeListener(this.listener);
    }

    render(){
        let message = "";
        let className = "warning-message-box"
        if(this.state.nameEmpty){
            message = ERROR_MESSAGES.emptyActivity;
            className += "-active";
        }
        else if(this.state.nameTooLong){
            message = ERROR_MESSAGES.tooLongActivity + this.state.activityLength + "/" + MAX_LENGTH + " characters";
            className += "-active";
        }
        return (
            <div className="popup-container">
                <div className={className}>
                    {message}
                </div>                
            </div>
        );
    };
}


export default PopupBox;
