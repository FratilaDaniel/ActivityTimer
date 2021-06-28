import {Doughnut} from "react-chartjs-2";
import statisticsModel from "../models/statisticsModel";
import React from "react";

function mapComponentState(state){
    const labels = state.statistics.map(activity => {
        return activity.activity;
    });

    const data = state.statistics.map(activity => {
        return activity.durationPercentage;
    });


    return{
        data: {
            labels: labels,
            datasets: [
              {
                data: data,
                borderWidth: 1,
              },
            ],
          }
    }
}

class SmartChart extends React.Component{
    constructor(){
        super();
        this.state = mapComponentState(statisticsModel.state);
        this.listener = this.listener.bind(this);
        statisticsModel.addListener("change", this.listener);
    }

    listener(state){
        this.setState(mapComponentState(state));
    }

    componentWillUnmount(){
        statisticsModel.removeListener(this.listener);
    }

    render(){
        console.log(this.state.data)
        return (
            <div className="graph-container">
                {this.state.data.labels.length ?
                    <Doughnut data={this.state.data}/> :  
                    "Insert an activity to get started"}
            </div>
        );
    }
}

export default SmartChart;