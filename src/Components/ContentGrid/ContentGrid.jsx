import SmartActivityInput from "./ActivityInput/SmartActivityInput";
import Table from "./Table/Table";
import Graph from "./Graph";

function ContentGrid(props){
    const scheduleHead = ["Number", "Activity", "Status", "Duration", "Start time", "End time"];
    const statisticsHead = ["Number", "Activity", "Duration"];
    return (
        <div className="grid-container">
            <SmartActivityInput/>
            <Table 
                tableHead={scheduleHead} 
                role="Schedule"
                className="schedule-container"
                />
            <Table 
                tableHead={statisticsHead} 
                role="Statistics"
                className="table-container" 
                />
            <Graph/>
        </div>
    );
}

export default ContentGrid;
