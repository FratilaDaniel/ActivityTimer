import "./warning.css";
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import React from "react";
import warningModel from "../models/warningModel";

class Warning extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            active: false,
            message: ""
        };
    }

    componentDidMount(){
        this.warningChange = this.warningChange.bind(this);
        warningModel.addListener("warningChange", this.warningChange);
    }

    warningChange(message){
        this.setState({
            active: warningModel.state.attemptToAddEmpty || warningModel.state.attemptToAddLong,
            message: message
        });
    }

    componentWillUnmount(){
        warningModel.removeListener("warningChange", this.warningChange);
    }

    render(){
        console.log(this.state.active);
        return (
            this.state.active 
            ? <div id="warning-container">
                <span id="warning-image-container"><ErrorOutlineIcon/></span>&ensp;{this.state.message}
            </div>
            : null
        );
    }
    
}

export default Warning;
