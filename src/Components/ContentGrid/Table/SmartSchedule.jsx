import React from "react";
import activitiesHolderModel from "../models/activitiesHolderModel";
import Table from "./Table";

function mapStateToComponent(state){
    return {
        tableHead: ["Number", "Activity", "Status", "Duration (sec)", "Start time", "End time"],
        tableData: state.activities
    };
}

class SmartSchedule extends React.Component{
    constructor(){
        super();
        this.state = mapStateToComponent(activitiesHolderModel.state);
    }

    componentDidMount(){
        this.listener = this.listener.bind(this);
        activitiesHolderModel.addListener("change", this.listener);
    }

    listener(state){
        this.setState(mapStateToComponent(state));
    }

    componentWillUnmount(){
        activitiesHolderModel.removeListener("change", this.listener);
    }

    render(){
        return (
            <div className="schedule-container">
            <h1>Schedule</h1>
            {activitiesHolderModel.state.activities.length
                ? <Table
                    tableHead={this.state.tableHead}
                    tableData={this.state.tableData}
                    className="schedule-table-container"
                />
                : "Start an activity to view activity history"
            }
            </div>
        );
    }
}

export default SmartSchedule;
