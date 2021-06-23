import SmartActivityInput from "./ActivityInput/SmartActivityInput";
import Table from "./Table/Table";
import Graph from "./Graph";
import SmartSchedule from "./Table/SmartSchedule";

function ContentGrid(props) {
    return (
        <div className="grid-container">
            <SmartActivityInput/>
            <SmartSchedule/>
            <Table 
                tableHead={["Number", "Activity", "Duration"]} 
                tableData={[["first", "second", "third"]]}
                role="Statistics"
                className="table-container" 
                />
            <Graph/>
        </div>
    );
}

export default ContentGrid;
