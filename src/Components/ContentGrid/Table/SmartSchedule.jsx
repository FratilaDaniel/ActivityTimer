import React from "react";
import activitiesHolderModel from "../models/activitiesHolderModel";
import Table from "./Table";

function mapStateToComponent(state){
    return {
        tableHead: ["Number", "Activity", "Status", "Duration", "Start time", "End time"],
        tableData: state.activities
    };
}

class SmartSchedule extends React.Component{
    constructor(){
        super();
        this.state = mapStateToComponent(activitiesHolderModel.state);
        this.listener = this.listener.bind(this);
        activitiesHolderModel.addListener("change", this.listener);
    }

    listener(state){
        this.setState(mapStateToComponent(state));
    }

    componentWillUnmount(){
        activitiesHolderModel.removeListener(this.listener);
    }

    render(){
        return (
            <Table
                tableHead={this.state.tableHead}
                tableData={this.state.tableData}
                role="Schedule"
                className="schedule-container"
            />
        );
    }
}

export default SmartSchedule;
