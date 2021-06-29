import React from "react";
import activityModel from "../models/activityModel";
import { MAX_LENGTH } from "../models/activityModel";
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

const ERROR_MESSAGES = {
    emptyActivity: "Activity name cannot be empty",
    tooLongActivity: "Name too long: "
}

function mapStateToComponent(state){
    return {
        isNewActivity: state.isNew,
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
        // do not show warning if site just loaded 
        // or an activity has just been submitted
        if(this.state.isNewActivity){
            // default (show no warning)
                // className += "-inactive";
        }
        else{
            if(this.state.nameEmpty && !this.state.isNewActivity){
                message = ERROR_MESSAGES.emptyActivity;
                className += "-active";
            }
            else if(this.state.nameTooLong){
                message = ERROR_MESSAGES.tooLongActivity + this.state.activityLength + "/" + MAX_LENGTH + " characters";
                className += "-active";
            }
            else{
                className += "-inactive";
            }
        }
        return (
            <div className="popup-container">
                <div className={className}>
                    {message? <ErrorOutlineIcon fontSize="default"/>: null}
                     {message}
                </div>                
            </div>
        );
    };
}


export default PopupBox;
