import React from "react";
import statisticsModel from "../models/statisticsModel";
import Table from "./Table";

function mapStateToComponent(state){
    return {
        tableHead: ["Activity", "Durations (sec)", "Duration (%)"],
        tableData: state.statistics 
    };    
}

class SmartStatistics extends React.Component{
    constructor(){
        super();
        this.state = mapStateToComponent(statisticsModel.state);
        this.listener = this.listener.bind(this);
        statisticsModel.addListener("change", this.listener);
    }

    listener(state){
        this.setState(mapStateToComponent(state))
    }

    componentWillUnmount(){
        statisticsModel.removeListener(this.listener);
    }

    render(){
        return (
            <div className="statistics-container">
                <h1>Statistics</h1>
                {statisticsModel.state.statistics.length 
                ? <Table 
                    tableHead={this.state.tableHead}
                    tableData={this.state.tableData}
                    className="statistics-table-container"
                />
                :  "Complete an activity to view statistics"
                }
            </div>
        );
    }
}

export default SmartStatistics;
