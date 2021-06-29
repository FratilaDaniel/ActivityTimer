import React from "react";
import warningModel from "../models/warningModel";
import activityPresenter from "../presenters/activityPresenter";
import { MAX_LENGTH } from "../models/activityModel";
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

const ERROR_MESSAGES = {
    emptyActivity: "Activity name cannot be empty",
    tooLongActivity: "Name too long: "
}

function mapStateToComponent(state){
    return {
        attemptAddEmptyActivity: state.attemptToAddEmpty,
        attemptAddLongActivity: state.attemptToAddLong
    }
}

class PopupBox extends React.Component{
    constructor(){
        super();
        this.state =  mapStateToComponent(warningModel.state);
        this.listener = this.listener.bind(this);
        warningModel.addListener("change", this.listener);
    }

    listener(state){
        this.setState(mapStateToComponent(state));
    }

    componentWillUnmount(){
        warningModel.removeListener("change", this.listener);
    }

    // componentDidUpdate

    render(){
        let message = "";
        let className = "warning-message-box";

        if(this.state.attemptAddEmptyActivity){
            message = ERROR_MESSAGES.emptyActivity;
        }
        else if(this.state.attemptAddLongActivity){
            message = ERROR_MESSAGES.tooLongActivity + activityPresenter.getActivityLength() + "/" + MAX_LENGTH;

        }

        // no warnings 
        if(!this.state.attemptAddEmptyActivity && !this.state.attemptAddLongActivity){
            className = "warning-message-box";
        }
        else{
            let els = document.getElementsByClassName(className);
            if(els[0]){
                className = "warning-message-box-active"; 
            }
            else{
                if(document.getElementsByClassName("warning-message-box-active")[0]){
                    className = "warning-message-box-active2"; 
                }
                else{
                    className = "warning-message-box-active"; 
                }
                

            }
        }

        console.log(this.state, className);


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
