import {Doughnut} from "react-chartjs-2";
import statisticsModel from "../models/statisticsModel";
import React from "react";

const emptyChartData = {
    data: {
        datasets: [{
            data: [1],
            borderWidth: 1,
            backgroundColor: "rgba(0, 84, 104, 0.2)",
            borderColor: "rgba(0, 84, 104, 1.0)"
            },
        ],
    }
};

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
    }

    componentDidMount(){
        this.listener = this.listener.bind(this);
        statisticsModel.addListener("change", this.listener);
    }

    listener(state){
        this.setState(mapComponentState(state));
    }

    componentWillUnmount(){
        statisticsModel.removeListener("change", this.listener);
    }

    render(){
        return (
            <div className="graph-container">
                <h1>Chart</h1>
                {this.state.data.labels.length
                    ? <Doughnut data={this.state.data}/>
                    : <Doughnut data={emptyChartData.data}/>
                }
            </div>
        );
    }
}

export default SmartChart;