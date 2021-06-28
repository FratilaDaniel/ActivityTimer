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

    let backgroundColors = [];
    let borderColors = [];

    state.statistics.forEach( () => {
        const color = [Math.random() * 256, Math.random() * 256, Math.random() * 256];
        backgroundColors.push("rgba(" + color[0] + ", " + color[1] + ", " + color[2] + ", 0.2)");
        borderColors.push("rgba(" + color[0] + ", " + color[1] + ", " + color[2] + ", 1.0)");
    });

    return{
        data: {
            labels: labels,
            datasets: [
              {
                data: data,
                borderWidth: 1,
                backgroundColor: backgroundColors,
                borderColor: borderColors
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
                    <Doughnut data={this.state.data} options={{title:{display: true, text: "Activities"}}}/> :  
                    "Insert an activity to get started"}
            </div>
        );
    }
}

export default SmartChart;