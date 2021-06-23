import SmartActivityInput from "./ActivityInput/SmartActivityInput";
import Graph from "./Graph";
import SmartSchedule from "./Table/SmartSchedule";
import SmartStatistics from "./Table/SmartStatistics";

function ContentGrid(props) {
    return (
        <div className="grid-container">
            <SmartActivityInput/>
            <SmartSchedule/>
            <SmartStatistics/>
            <Graph/>
        </div>
    );
}

export default ContentGrid;
