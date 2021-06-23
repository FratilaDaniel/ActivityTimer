import {EventEmitter} from "events";

class StatisticsModel extends EventEmitter{
    constructor(){
        super();
        this.state = {
            activitiesMap: {},
            statistics: []
        };
    }

    // called upon finishing or renaming an activity or periodically
    computeStatistics(activities){
        this.createActivitiesMap(activities);
        this.computeDurationPercentages();
    }

    createActivitiesMap(activities){
        // remove duplicate activities but hold their durations
        let activitiesMap = new Map();
        activities.forEach(item => {
            if(activitiesMap.has(item.activity)){
                // item already exists, add the new duration
                const oldDuration = activitiesMap.get(item.activity);
                const newDuration = oldDuration + item.duration;
                activitiesMap.set(item.activity, newDuration);
            }
            else{
                activitiesMap.set(item.activity, item.duration);
            }
        });
        this.state = {
            ...this.state,
            activitiesMap: activitiesMap
        };
    }

    computeDurationPercentages(){
        let totalDuration = 0;
        this.state.activitiesMap.forEach(value => {
            totalDuration += value;
        });
        let statistics = [];
        this.state.activitiesMap.forEach((value, key) => {
            statistics.push({
                acitivity: key,
                durationSeconds: value,
                durationPercentage: value / totalDuration 
            });
        });
        this.state = {
            ...this.state,
            statistics: statistics
        };
        console.log(this.state.statistics);
        this.emit("change", this.state);
    }
}

const statisticsModel = new StatisticsModel();
export default statisticsModel;
